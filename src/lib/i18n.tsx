import React, { createContext, useContext, useMemo, useState, ReactNode } from "react";

type LanguageCode = "en" | "hi" | "mr" | "or";

type Translations = Record<string, string>;

type Dictionary = Record<LanguageCode, Translations>;

const dictionary: Dictionary = {
  en: {
    back: "Back",
    login: "Login",
    logout: "Logout",
    get_started: "Get Started Today",
    phone_number: "Phone number",
    password: "Password",
    sign_in: "Sign In",
    create_account: "Create Account",
    welcome_hub: "Welcome to India's Agricultural Hub",
    gov_schemes: "Government Schemes for Agriculture",
    climate_dashboard: "Climate Resilience Dashboard",
    yield_dashboard: "Yield Prediction Dashboard",
  },
  hi: {
    back: "वापस",
    login: "लॉगिन",
    logout: "लॉगआउट",
    get_started: "आज ही शुरू करें",
    phone_number: "फोन नंबर",
    password: "पासवर्ड",
    sign_in: "साइन इन",
    create_account: "खाता बनाएँ",
    welcome_hub: "भारत के कृषि केंद्र में आपका स्वागत है",
    gov_schemes: "कृषि के लिए सरकारी योजनाएँ",
    climate_dashboard: "जलवायु सहनशीलता डैशबोर्ड",
    yield_dashboard: "उपज पूर्वानुमान डैशबोर्ड",
  },
  mr: {
    back: "मागे",
    login: "लॉगिन",
    logout: "लॉगआउट",
    get_started: "आजच सुरू करा",
    phone_number: "फोन नंबर",
    password: "पासवर्ड",
    sign_in: "साइन इन",
    create_account: "खाते तयार करा",
    welcome_hub: "भारताच्या कृषी केंद्रात आपले स्वागत आहे",
    gov_schemes: "शेतीसाठी सरकारी योजना",
    climate_dashboard: "हवामान लवचिकता डॅशबोर्ड",
    yield_dashboard: "उत्पादन अंदाज डॅशबोर्ड",
  },
  or: {
    back: "ପଛକୁ",
    login: "ଲଗଇନ୍",
    logout: "ଲଗଆଉଟ୍",
    get_started: "ଆଜିଠାରୁ ଆରମ୍ଭ କରନ୍ତୁ",
    phone_number: "ଫୋନ୍ ନମ୍ବର",
    password: "ପାସୱାର୍ଡ",
    sign_in: "ସାଇନ୍ ଇନ୍",
    create_account: "ଖାତା ସୃଷ୍ଟି କରନ୍ତୁ",
    welcome_hub: "ଭାରତର କୃଷି କେନ୍ଦ୍ରକୁ ସ୍ୱାଗତ",
    gov_schemes: "କୃଷି ପାଇଁ ସରକାରୀ ଯୋଜନା",
    climate_dashboard: "ଜଲବାୟୁ ଲଚିଳାପନା ଡ୍ୟାଶବୋର୍ଡ",
    yield_dashboard: "ଉତ୍ପାଦନ ପୂର୍ବାନୁମାନ ଡ୍ୟାଶବୋର୍ଡ",
  },
};

type I18nContextValue = {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>("en");

  const t = useMemo(() => {
    return (key: string) => {
      const table = dictionary[language] || dictionary.en;
      return table[key] ?? dictionary.en[key] ?? key;
    };
  }, [language]);

  const value = useMemo<I18nContextValue>(() => ({ language, setLanguage, t }), [language, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};



