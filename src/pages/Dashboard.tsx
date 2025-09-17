import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wheat,
  Sun,
  Cloud,
  CloudRain,
  Droplets,
  Info,
  ChevronDown,
  ChevronUp,
  Home,
  Camera,
  IndianRupee,
  Calendar,
  Mic,
} from "lucide-react";
import LanguageQuickToggle from "@/components/LanguageQuickToggle";
import VoiceTranslator from "@/components/VoiceTranslator";
import { toast } from "@/components/ui/sonner";
import BottomTabNav from "@/components/BottomTabNav";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showTaskDetails, setShowTaskDetails] = useState(false);

  const threeDayWeather = [
    { label: "Aaj", icon: Sun, max: 31, min: 24 },
    { label: "Kaal", icon: Cloud, max: 29, min: 23 },
    { label: "Parsi", icon: CloudRain, max: 27, min: 22 },
  ];

  const cropHealthPercent = 82; // Green zone

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_80%_-20%,_rgba(34,197,94,0.15),_transparent),radial-gradient(900px_500px_at_-10%_10%,_rgba(16,185,129,0.12),_transparent)] from-agriculture-earth to-background bg-gradient-to-br selection:bg-agriculture-green/20 selection:text-foreground">
      {/* Top Bar */}
      <header className="border-b border-border/60 bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Wheat className="h-8 w-8 text-agriculture-green" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-agriculture-green via-emerald-400 to-agriculture-light-green bg-clip-text text-transparent drop-shadow-sm">
              Debasis Babu's Farm
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <LanguageQuickToggle />
            <VoiceTranslator />
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/70 backdrop-blur text-foreground border border-border/60 shadow-sm">
              <Sun className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium">28°C</span>
            </div>
            <Button variant="outline" className="hover:border-agriculture-green/60 hover:bg-agriculture-green/10" onClick={() => navigate('/climate-resilience')}>Climate</Button>
            <Button variant="outline" className="hover:border-agriculture-green/60 hover:bg-agriculture-green/10" onClick={() => navigate('/yield-prediction')}>Yield</Button>
            <Button variant="outline" className="hover:border-agriculture-green/60 hover:bg-agriculture-green/10" onClick={() => navigate('/mandi-bhaba')}>Mandi</Button>
            <Button variant="outline" className="hover:border-agriculture-green/60 hover:bg-agriculture-green/10" onClick={() => navigate('/krishi-calendar')}>Calendar</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-28">
        {/* A. Aaj ra Kama (Today's Task) */}
        <Card className="mb-6 border-agriculture-green/30 bg-card/70 backdrop-blur-md hover:border-agriculture-green/60 transition-all duration-300 hover:shadow-lg hover:shadow-agriculture-green/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-agriculture-green/20 to-emerald-300/20 border border-agriculture-green/30 flex items-center justify-center shadow-sm">
                <Droplets className="h-6 w-6 text-agriculture-green" />
              </div>
              <div>
                <CardTitle className="text-xl">Aaj ra Kama</CardTitle>
                <CardDescription className="text-base text-foreground">
                  Irrigate your paddy crop this evening.
                </CardDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              className="flex items-center gap-1 hover:bg-agriculture-green/10"
              onClick={() => setShowTaskDetails(v => !v)}
            >
              <Info className="h-4 w-4" />
              Learn More {showTaskDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CardHeader>
          {showTaskDetails && (
            <CardContent className="text-sm text-muted-foreground">
              - Best time: 5 PM – 7 PM to reduce evaporation.
              <br />- Target: Maintain 2-3 cm standing water in paddy field.
              <br />- Tip: Check field bunds to prevent water loss.
            </CardContent>
          )}
        </Card>

        {/* B. Paga (Weather) */}
        <Card className="mb-6 bg-card/70 backdrop-blur-md border-agriculture-green/30 hover:border-agriculture-green/60 transition-all duration-300 hover:shadow-lg hover:shadow-agriculture-green/20">
          <CardHeader>
            <CardTitle className="text-lg">Paga (Weather)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              {threeDayWeather.map((d) => (
                <div key={d.label} className="group rounded-xl border border-agriculture-green/30 p-4 flex flex-col items-center bg-gradient-to-br from-agriculture-green/10 to-emerald-300/10 backdrop-blur hover:from-agriculture-green/20 hover:to-emerald-300/20 transition-all duration-300">
                  <span className="text-sm font-medium mb-2">{d.label}</span>
                  <d.icon className="h-8 w-8 mb-2 text-agriculture-green group-hover:scale-110 transition-transform" />
                  <div className="text-sm"><span className="font-semibold text-foreground">{d.max}°</span> / {d.min}°</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* C. Fasal Swasthya (Crop Health) */}
        <Card className="mb-6 bg-card/70 backdrop-blur-md border-agriculture-green/30 hover:border-agriculture-green/60 transition-all duration-300 hover:shadow-lg hover:shadow-agriculture-green/20">
          <CardHeader>
            <CardTitle className="text-lg">Fasal Swasthya (Crop Health)</CardTitle>
            <CardDescription>Uttam (ଉତ୍ତମ)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Progress value={cropHealthPercent} className="h-4 overflow-hidden" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span className="text-emerald-600 font-medium">Green: Good</span>
                <span className="text-yellow-600 font-medium">Yellow: Needs Attention</span>
                <span className="text-red-600 font-medium">Red: Problem</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* D. Bottom Tab Bar */}
      <BottomTabNav />

      {/* E. Voice Assistant (Floating) */}
      <Button
        className="fixed bottom-20 right-5 rounded-full h-14 w-14 p-0 shadow-lg bg-gradient-to-br from-agriculture-green to-emerald-500 hover:from-emerald-500 hover:to-agriculture-green transition-all duration-300 ring-2 ring-agriculture-green/40 hover:ring-emerald-400/60"
        onClick={() => {/* Placeholder for Kalia Bhai */}}
      >
        <Mic className="h-6 w-6 text-white drop-shadow" />
      </Button>
    </div>
  );
};

export default Dashboard;