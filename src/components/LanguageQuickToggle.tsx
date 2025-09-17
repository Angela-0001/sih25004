import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const langs: { code: "en" | "hi" | "mr" | "or"; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "hi", label: "हिं" },
  { code: "mr", label: "મरा" as any }, // Short label for compactness
  { code: "or", label: "ଓଡ଼" },
];

const LanguageQuickToggle = () => {
  const { language, setLanguage } = useI18n();
  return (
    <div className="flex items-center gap-1 bg-card/80 border rounded-lg p-1">
      {langs.map((l) => (
        <Button
          key={l.code}
          size="sm"
          variant={language === l.code ? "default" : "outline"}
          className={language === l.code ? "bg-agriculture-green hover:bg-agriculture-light-green" : "border-agriculture-green/40 hover:border-agriculture-green/60"}
          onClick={() => setLanguage(l.code)}
        >
          {l.label}
        </Button>
      ))}
    </div>
  );
};

export default LanguageQuickToggle;



