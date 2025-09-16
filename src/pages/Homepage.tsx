import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wheat, Leaf, Droplets, Sun, Shield, TrendingUp, Users, Map } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const schemes = [
    {
      title: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
      description: "Direct income support of ₹6,000 per year to eligible farmer families",
      icon: Users,
      benefits: ["₹2,000 per installment", "Three installments per year", "Direct bank transfer"],
    },
    {
      title: "Crop Insurance Scheme (PMFBY)",
      description: "Comprehensive crop insurance coverage against natural calamities",
      icon: Shield,
      benefits: ["Low premium rates", "Quick claim settlement", "Coverage for all crops"],
    },
    {
      title: "Soil Health Card Scheme",
      description: "Provides soil nutrient status and recommendations to farmers",
      icon: Leaf,
      benefits: ["Free soil testing", "Nutrient recommendations", "Improved productivity"],
    },
    {
      title: "Micro Irrigation Fund",
      description: "Promotes efficient water usage through drip and sprinkler irrigation",
      icon: Droplets,
      benefits: ["Water conservation", "Increased crop yield", "Subsidized equipment"],
    },
    {
      title: "Kisan Credit Card (KCC)",
      description: "Flexible and hassle-free credit facility for farmers",
      icon: TrendingUp,
      benefits: ["Easy loan access", "Reasonable interest rates", "Flexible repayment"],
    },
    {
      title: "National Agriculture Market (e-NAM)",
      description: "Online trading platform for agricultural commodities",
      icon: Map,
      benefits: ["Better price discovery", "Transparent trading", "Reduced transaction costs"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-agriculture-earth to-background">
      {/* Header */}
      <header className="border-b border-border bg-card/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Wheat className="h-8 w-8 text-agriculture-green" />
            <h1 className="text-2xl font-bold text-foreground">Farm Forward Dashboard</h1>
          </div>
          <Button onClick={() => navigate('/login')} className="bg-agriculture-green hover:bg-agriculture-green/90">
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Welcome to India's Agricultural Hub
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Empowering farmers with government schemes, climate insights, and AI-powered yield predictions.
            Access comprehensive agricultural support designed for sustainable farming and increased prosperity.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
              <Sun className="h-5 w-5 text-agriculture-orange" />
              <span className="text-sm font-medium">Climate Resilience</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
              <TrendingUp className="h-5 w-5 text-agriculture-green" />
              <span className="text-sm font-medium">Yield Prediction</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
              <Shield className="h-5 w-5 text-agriculture-brown" />
              <span className="text-sm font-medium">Government Schemes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Government Schemes Section */}
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
          {schemes.map((scheme, index) => {
            const Icon = scheme.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-agriculture-green/20 hover:border-agriculture-green/40">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-agriculture-green/10 rounded-lg flex items-center justify-center group-hover:bg-agriculture-green/20 transition-colors">
                    <Icon className="h-6 w-6 text-agriculture-green" />
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
                        <div className="w-1.5 h-1.5 bg-agriculture-green rounded-full" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-agriculture-green to-agriculture-light-green rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Farming?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of farmers already benefiting from our comprehensive agricultural platform.
            Access personalized insights, weather forecasts, and government scheme information.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/login')}
            className="bg-white text-agriculture-green hover:bg-agriculture-earth"
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