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
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="hi">हिन्दी</SelectItem>
        <SelectItem value="mr">मराठी</SelectItem>
        <SelectItem value="or">ଓଡ଼ିଆ</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;


