import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { Volume2, Square } from "lucide-react";

const langToVoiceLocale: Record<string, string[]> = {
  en: ["en-IN", "en-GB", "en-US"],
  hi: ["hi-IN"],
  mr: ["mr-IN", "hi-IN"],
  or: ["or-IN", "hi-IN"],
};

const pageKeyByPath: Record<string, string> = {
  "/": "welcome_hub",
  "/login": "login",
  "/dashboard": "welcome_hub",
  "/climate-resilience": "climate_dashboard",
  "/yield-prediction": "yield_dashboard",
};

const VoiceTranslator = () => {
  const { language, t } = useI18n();
  const location = useLocation();
  const [speaking, setSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const textToSpeak = useMemo(() => {
    const key = pageKeyByPath[location.pathname] ?? "welcome_hub";
    const parts = [t(key)];
    if (location.pathname === "/") {
      parts.push(t("gov_schemes"));
    }
    return parts.join(". ");
  }, [location.pathname, t]);

  useEffect(() => {
    return () => {
      if (utteranceRef.current) {
        window.speechSynthesis.cancel();
        utteranceRef.current = null;
      }
    };
  }, []);

  const pickVoice = () => {
    const desired = langToVoiceLocale[language] || [];
    const voices = window.speechSynthesis.getVoices();
    for (const pref of desired) {
      const v = voices.find((voice) => voice.lang?.toLowerCase().startsWith(pref.toLowerCase()));
      if (v) return v;
    }
    return voices[0];
  };

  const handleSpeak = () => {
    if (!("speechSynthesis" in window)) return;
    if (speaking) return;
    const u = new SpeechSynthesisUtterance(textToSpeak);
    const voice = pickVoice();
    if (voice) u.voice = voice;
    u.lang = voice?.lang || (langToVoiceLocale[language]?.[0] ?? "en-IN");
    u.rate = 1;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    utteranceRef.current = u;
    setSpeaking(true);
    window.speechSynthesis.speak(u);
  };

  const handleStop = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
    utteranceRef.current = null;
  };

  return (
    <div className="flex items-center gap-2">
      <Button size="sm" variant={speaking ? "secondary" : "outline"} onClick={speaking ? undefined : handleSpeak} disabled={speaking}
        className="border-agriculture-green/40 hover:border-agriculture-green/60">
        <Volume2 className="h-4 w-4 mr-1 text-agriculture-green" />
        {speaking ? "Speaking" : "Read"}
      </Button>
      <Button size="sm" variant="outline" onClick={handleStop} className="border-agriculture-green/40 hover:border-agriculture-green/60">
        <Square className="h-4 w-4 text-agriculture-brown" />
      </Button>
    </div>
  );
};

export default VoiceTranslator;



