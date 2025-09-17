import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n } from "@/lib/i18n";
import { Globe } from "lucide-react";

const LANGUAGES: { code: string; label: string }[] = [
  { code: "en", label: "English" },
  { code: "as", label: "অসমীয়া (Assamese)" },
  { code: "bn", label: "বাংলা (Bengali)" },
  { code: "brx", label: "बड़ो (Bodo)" },
  { code: "doi", label: "डोगरी (Dogri)" },
  { code: "gu", label: "ગુજરાતી (Gujarati)" },
  { code: "hi", label: "हिन्दी (Hindi)" },
  { code: "kn", label: "ಕನ್ನಡ (Kannada)" },
  { code: "ks", label: "کٲشُر (Kashmiri)" },
  { code: "kok", label: "कोंकणी (Konkani)" },
  { code: "mai", label: "मैथिली (Maithili)" },
  { code: "ml", label: "മലയാളം (Malayalam)" },
  { code: "mni", label: "ꯃꯤꯇꯩ ꯂꯣꯟ (Meitei)" },
  { code: "mr", label: "मराठी (Marathi)" },
  { code: "ne", label: "नेपाली (Nepali)" },
  { code: "or", label: "ଓଡ଼ିଆ (Odia)" },
  { code: "pa", label: "ਪੰਜਾਬੀ (Punjabi)" },
  { code: "sa", label: "संस्कृतम् (Sanskrit)" },
  { code: "sat", label: "ᱥᱟᱱᱛᱟᱲᱤ (Santali)" },
  { code: "sd", label: "سنڌي (Sindhi)" },
  { code: "ta", label: "தமிழ் (Tamil)" },
  { code: "te", label: "తెలుగు (Telugu)" },
  { code: "ur", label: "اردو (Urdu)" },
];

const LanguageDropdown = () => {
  const { language, setLanguage } = useI18n();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 border-agriculture-green/40">
          <Globe className="h-4 w-4 text-agriculture-green" />
          EN
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-[60vh] w-56 overflow-auto">
        {LANGUAGES.map((l) => (
          <DropdownMenuItem key={l.code} onClick={() => setLanguage(l.code as any)} className={language === l.code ? "text-agriculture-green" : ""}>
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;


