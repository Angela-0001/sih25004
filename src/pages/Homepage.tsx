import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wheat, Leaf, Droplets, Sun, Shield, TrendingUp, Users, Map } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LanguageQuickToggle from "@/components/LanguageQuickToggle";
import VoiceTranslator from "@/components/VoiceTranslator";

const Homepage = () => {
  const navigate = useNavigate();

  const schemes = [
    {
      title: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
      description: "Direct income support of ₹6,000 per year to eligible farmer families",
      href: "https://pmkisan.gov.in/",
      logo: "https://pmkisan.gov.in/assets/img/favicon.png",
      benefits: ["₹2,000 per installment", "Three installments per year", "Direct bank transfer"],
    },
    {
      title: "Crop Insurance Scheme (PMFBY)",
      description: "Comprehensive crop insurance coverage against natural calamities",
      href: "https://pmfby.gov.in/",
      logo: "https://pmfby.gov.in/img/favicon.ico",
      benefits: ["Low premium rates", "Quick claim settlement", "Coverage for all crops"],
    },
    {
      title: "Soil Health Card Scheme",
      description: "Provides soil nutrient status and recommendations to farmers",
      href: "https://soilhealth.dac.gov.in/",
      logo: "https://soilhealth.dac.gov.in/content/images/favicon.ico",
      benefits: ["Free soil testing", "Nutrient recommendations", "Improved productivity"],
    },
    {
      title: "Micro Irrigation Fund (PMKSY)",
      description: "Promotes efficient water usage through drip and sprinkler irrigation",
      href: "https://pmksy.gov.in/",
      logo: "https://pmksy.gov.in/pmksy_logo.png",
      benefits: ["Water conservation", "Increased crop yield", "Subsidized equipment"],
    },
    {
      title: "Kisan Credit Card (KCC)",
      description: "Flexible and hassle-free credit facility for farmers",
      href: "https://www.pmkisan.gov.in/kcc.aspx",
      logo: "https://www.pmkisan.gov.in/newassets/img/favicon.ico",
      benefits: ["Easy loan access", "Reasonable interest rates", "Flexible repayment"],
    },
    {
      title: "National Agriculture Market (e-NAM)",
      description: "Online trading platform for agricultural commodities",
      href: "https://enam.gov.in/",
      logo: "https://enam.gov.in/web/resources/assets/img/favicon.png",
      benefits: ["Better price discovery", "Transparent trading", "Reduced transaction costs"],
    },
  ];

  const schemeLogos = [
    {
      name: "PM-KISAN",
      href: "https://pmkisan.gov.in/",
      logo: "https://pmkisan.gov.in/assets/img/favicon.png",
    },
    {
      name: "PMFBY",
      href: "https://pmfby.gov.in/",
      logo: "https://pmfby.gov.in/img/favicon.ico",
    },
    {
      name: "Soil Health Card",
      href: "https://soilhealth.dac.gov.in/",
      logo: "https://soilhealth.dac.gov.in/content/images/favicon.ico",
    },
    {
      name: "e-NAM",
      href: "https://enam.gov.in/",
      logo: "https://enam.gov.in/web/resources/assets/img/favicon.png",
    },
    {
      name: "Kisan Credit Card",
      href: "https://www.pmkisan.gov.in/kcc.aspx",
      logo: "https://www.pmkisan.gov.in/newassets/img/favicon.ico",
    },
    {
      name: "PMKSY (Micro Irrigation)",
      href: "https://pmksy.gov.in/",
      logo: "https://pmksy.gov.in/pmksy_logo.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-agriculture-earth to-background selection:bg-agriculture-green/20 selection:text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <Wheat className="h-8 w-8 text-agriculture-green transition-transform duration-300 group-hover:rotate-6" />
              <span className="pointer-events-none absolute -inset-1 rounded-full bg-agriculture-green/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-agriculture-green to-agriculture-light-green bg-clip-text text-transparent">
              Farm Forward Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <LanguageQuickToggle />
            <VoiceTranslator />
            <Button
              onClick={() => navigate('/login')}
              className="bg-agriculture-green hover:bg-agriculture-light-green text-white shadow-sm hover:shadow-md hover:shadow-agriculture-green/30 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-agriculture-green"
            >
              Login
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-agriculture-green blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-agriculture-brown blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <img
              src="/logo.jpeg"
              alt="Site Logo"
              className="h-64 w-auto rounded-xl shadow border bg-white/70 backdrop-blur"
            />
          </div>
          <h2 className="text-5xl font-extrabold tracking-tight text-foreground mb-6">
            Welcome to India's Agricultural Hub
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Empowering farmers with government schemes, climate insights, and AI-powered yield predictions.
            Access comprehensive agricultural support designed for sustainable farming and increased prosperity.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border transition-all duration-300 hover:-translate-y-0.5 hover:border-agriculture-green/50">
              <Sun className="h-5 w-5 text-agriculture-orange" />
              <span className="text-sm font-medium">Climate Resilience</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border transition-all duration-300 hover:-translate-y-0.5 hover:border-agriculture-green/50">
              <TrendingUp className="h-5 w-5 text-agriculture-green" />
              <span className="text-sm font-medium">Yield Prediction</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border transition-all duration-300 hover:-translate-y-0.5 hover:border-agriculture-green/50">
              <Shield className="h-5 w-5 text-agriculture-brown" />
              <span className="text-sm font-medium">Government Schemes</span>
            </div>
          </div>
        </div>
      </section>

      

      {/* Government Schemes Section */}
      {/* Quick Access removed; accessible after login on Dashboard */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Government Schemes for Agriculture
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore comprehensive government initiatives designed to support farmers and enhance agricultural productivity across India.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schemes.map((scheme, index) => (
            <a
              key={index}
              href={scheme.href}
              target="_blank"
              rel="noreferrer"
              className="block group"
            >
              <div className="rounded-xl p-[1px] bg-gradient-to-br from-agriculture-green/50 via-agriculture-light-green/40 to-transparent group-hover:from-agriculture-green group-hover:via-agriculture-light-green group-hover:to-agriculture-green/30 transition-colors">
                <Card className="rounded-[11px] hover:shadow-lg transition-all duration-300 border-agriculture-green/20 hover:border-agriculture-green/50 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-agriculture-green/60">
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 bg-agriculture-green/10 rounded-lg flex items-center justify-center group-hover:bg-agriculture-green/20 transition-colors overflow-hidden">
                      <img src={scheme.logo} alt={scheme.title} className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  <CardTitle className="text-xl text-foreground leading-tight">
                    {scheme.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {scheme.description}
                  </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {scheme.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-agriculture-green to-agriculture-light-green rounded-full" />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-agriculture-green to-agriculture-light-green rounded-2xl p-12 text-center text-white shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Farming?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of farmers already benefiting from our comprehensive agricultural platform.
            Access personalized insights, weather forecasts, and government scheme information.
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/login')}
            className="bg-white text-agriculture-green hover:bg-agriculture-earth shadow-md hover:shadow-agriculture-green/30 transition-all duration-300"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Wheat className="h-6 w-6 text-agriculture-green" />
            <span className="text-lg font-semibold text-foreground">Farm Forward Dashboard</span>
          </div>
          <p className="text-muted-foreground">
            Empowering Indian agriculture through technology and government support
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;