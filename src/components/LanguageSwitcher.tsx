import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useI18n } from "@/lib/i18n";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useI18n();
  return (
    <Select value={language} onValueChange={(v) => setLanguage(v as any)}>
      <SelectTrigger
        aria-label="Change language"
        className="w-[170px] border-agriculture-green/40 hover:border-agriculture-green/60 hover:bg-agriculture-green/10 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-agriculture-green" />
          <SelectValue placeholder="Language" />
        </div>
      </SelectTrigger>
      <SelectContent className="max-h-[60vh] overflow-auto">
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="as">অসমীয়া (Assamese)</SelectItem>
        <SelectItem value="bn">বাংলা (Bengali)</SelectItem>
        <SelectItem value="brx">बड़ो (Bodo)</SelectItem>
        <SelectItem value="doi">डोगरी (Dogri)</SelectItem>
        <SelectItem value="gu">ગુજરાતી (Gujarati)</SelectItem>
        <SelectItem value="hi">हिन्दी (Hindi)</SelectItem>
        <SelectItem value="kn">ಕನ್ನಡ (Kannada)</SelectItem>
        <SelectItem value="ks">کٲشُر (Kashmiri)</SelectItem>
        <SelectItem value="kok">कोंकणी (Konkani)</SelectItem>
        <SelectItem value="mai">मैथिली (Maithili)</SelectItem>
        <SelectItem value="ml">മലയാളം (Malayalam)</SelectItem>
        <SelectItem value="mni">ꯃꯤꯇꯩ ꯂꯣꯟ (Meitei)</SelectItem>
        <SelectItem value="mr">मराठी (Marathi)</SelectItem>
        <SelectItem value="ne">नेपाली (Nepali)</SelectItem>
        <SelectItem value="or">ଓଡ଼ିଆ (Odia)</SelectItem>
        <SelectItem value="pa">ਪੰਜਾਬੀ (Punjabi)</SelectItem>
        <SelectItem value="sa">संस्कृतम् (Sanskrit)</SelectItem>
        <SelectItem value="sat">ᱥᱟᱱᱛᱟᱲᱤ (Santali)</SelectItem>
        <SelectItem value="sd">سنڌي (Sindhi)</SelectItem>
        <SelectItem value="ta">தமிழ் (Tamil)</SelectItem>
        <SelectItem value="te">తెలుగు (Telugu)</SelectItem>
        <SelectItem value="ur">اردو (Urdu)</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;


