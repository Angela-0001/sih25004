import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wheat, ArrowLeft, CloudRain, Thermometer, Wind, Droplets, AlertTriangle, Shield, TrendingUp, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import LanguageQuickToggle from "@/components/LanguageQuickToggle";
import VoiceTranslator from "@/components/VoiceTranslator";

const ClimateResilience = () => {
  const navigate = useNavigate();

  const weatherData = [
    { day: "Today", temp: "25°C", condition: "Partly Cloudy", humidity: "65%", wind: "12 km/h" },
    { day: "Tomorrow", temp: "27°C", condition: "Sunny", humidity: "58%", wind: "8 km/h" },
    { day: "Day 3", temp: "23°C", condition: "Light Rain", humidity: "78%", wind: "15 km/h" },
    { day: "Day 4", temp: "24°C", condition: "Cloudy", humidity: "72%", wind: "10 km/h" },
    { day: "Day 5", temp: "26°C", condition: "Sunny", humidity: "60%", wind: "7 km/h" },
  ];

  const alerts = [
    { type: "warning", title: "Moderate Rain Expected", message: "Light to moderate rainfall expected in next 48 hours. Ensure proper drainage.", time: "2 hours ago" },
    { type: "info", title: "Optimal Sowing Period", message: "Current conditions are favorable for Kharif crop sowing.", time: "1 day ago" },
  ];

  const climateSeries = [
    { day: "Today", temp: 25, humidity: 65, wind: 12 },
    { day: "Tomorrow", temp: 27, humidity: 58, wind: 8 },
    { day: "Day 3", temp: 23, humidity: 78, wind: 15 },
    { day: "Day 4", temp: 24, humidity: 72, wind: 10 },
    { day: "Day 5", temp: 26, humidity: 60, wind: 7 },
  ];

  const recommendations = [
    { title: "Short-Duration Rice Varieties", description: "Consider CR Dhan 310 or Sahbhagi Dhan for monsoon season" },
    { title: "Water Management", description: "Install drip irrigation to optimize water usage during dry spells" },
    { title: "Soil Health", description: "Apply organic matter to improve soil water retention capacity" },
    { title: "Crop Diversification", description: "Intercrop with pulses to improve soil nitrogen and reduce risks" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-agriculture-earth to-background selection:bg-agriculture-green/20 selection:text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 group">
            <Button variant="ghost" onClick={() => navigate('/dashboard')} className="hover:text-agriculture-green">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="relative">
              <Wheat className="h-8 w-8 text-agriculture-green transition-transform duration-300 group-hover:rotate-6" />
              <span className="pointer-events-none absolute -inset-1 rounded-full bg-agriculture-green/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-agriculture-green to-agriculture-light-green bg-clip-text text-transparent">Climate Resilience Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <LanguageQuickToggle />
            <VoiceTranslator />
            <Button
              variant="outline"
              onClick={() => navigate('/yield-prediction')}
              className="border-agriculture-green/40 hover:bg-agriculture-green/10 hover:border-agriculture-green/60 focus-visible:ring-2 focus-visible:ring-agriculture-green"
            >
              View Yield Predictions
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:-translate-y-1 hover:shadow-md transition-all duration-300 border-agriculture-green/30">
            <CardContent className="flex items-center p-6">
              <Thermometer className="h-8 w-8 text-agriculture-orange mr-4" />
              <div>
                <p className="text-2xl font-bold text-foreground">25°C</p>
                <p className="text-sm text-muted-foreground">Temperature</p>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:-translate-y-1 hover:shadow-md transition-all duration-300 border-agriculture-green/30">
            <CardContent className="flex items-center p-6">
              <Droplets className="h-8 w-8 text-blue-500 mr-4" />
              <div>
                <p className="text-2xl font-bold text-foreground">65%</p>
                <p className="text-sm text-muted-foreground">Humidity</p>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:-translate-y-1 hover:shadow-md transition-all duration-300 border-agriculture-green/30">
            <CardContent className="flex items-center p-6">
              <Wind className="h-8 w-8 text-agriculture-green mr-4" />
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Wind (km/h)</p>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:-translate-y-1 hover:shadow-md transition-all duration-300 border-agriculture-green/30">
            <CardContent className="flex items-center p-6">
              <CloudRain className="h-8 w-8 text-agriculture-brown mr-4" />
              <div>
                <p className="text-2xl font-bold text-foreground">15%</p>
                <p className="text-sm text-muted-foreground">Rain Chance</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Weather Forecast */}
          <div className="lg:col-span-2">
            <Card className="mb-8 hover:shadow-lg transition-all duration-300 border-agriculture-green/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-agriculture-green" />
                  7-Day Weather Forecast
                </CardTitle>
                <CardDescription>
                  Detailed weather predictions for your farming region
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weatherData.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-agriculture-green/5 rounded-lg border border-agriculture-green/20 hover:border-agriculture-green/40 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-16 text-sm font-medium text-foreground">{day.day}</div>
                        <div className="flex items-center gap-2">
                          <Thermometer className="h-4 w-4 text-agriculture-orange" />
                          <span className="text-sm font-medium">{day.temp}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{day.condition}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Droplets className="h-3 w-3" />
                          {day.humidity}
                        </div>
                        <div className="flex items-center gap-1">
                          <Wind className="h-3 w-3" />
                          {day.wind}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Climate Trends Chart */}
            <Card className="mb-8 hover:shadow-lg transition-all duration-300 border-agriculture-green/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-agriculture-green" />
                  Climate Trends (Next 5 Days)
                </CardTitle>
                <CardDescription>
                  Temperature, humidity, and wind speed overview
                </CardDescription>
              </CardHeader>
              <CardContent style={{ height: 320 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={climateSeries} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                    <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                    <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" />
                    <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="temp" name="Temp (°C)" stroke="hsl(var(--agriculture-orange))" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 6 }} />
                    <Line yAxisId="right" type="monotone" dataKey="humidity" name="Humidity (%)" stroke="hsl(var(--agriculture-green))" strokeWidth={3} dot={false} />
                    <Line yAxisId="right" type="monotone" dataKey="wind" name="Wind (km/h)" stroke="hsl(var(--agriculture-brown))" strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Climate Recommendations */}
            <Card className="hover:shadow-lg transition-all duration-300 border-agriculture-green/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-agriculture-green" />
                  Climate-Smart Recommendations
                </CardTitle>
                <CardDescription>
                  AI-powered suggestions based on current climate conditions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="p-4 bg-agriculture-green/5 border border-agriculture-green/20 rounded-lg hover:border-agriculture-green/40 transition-colors">
                      <h4 className="font-medium text-foreground mb-2">{rec.title}</h4>
                      <p className="text-sm text-muted-foreground">{rec.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alerts & Risk Assessment */}
          <div>
            <Card className="mb-8 hover:shadow-lg transition-all duration-300 border-agriculture-green/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-agriculture-orange" />
                  Risk Alerts
                </CardTitle>
                <CardDescription>
                  Real-time alerts for your region
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:border-agriculture-green/40 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant={alert.type === 'warning' ? 'destructive' : 'secondary'}>
                          {alert.type === 'warning' ? 'Warning' : 'Info'}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{alert.time}</span>
                      </div>
                      <h4 className="font-medium text-foreground mb-1">{alert.title}</h4>
                      <p className="text-sm text-muted-foreground">{alert.message}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Risk Assessment */}
            <Card className="hover:shadow-lg transition-all duration-300 border-agriculture-green/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-agriculture-green" />
                  Risk Assessment
                </CardTitle>
                <CardDescription>
                  Current risk levels for your crops
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Drought Risk</span>
                    <Badge variant="secondary">Low</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Flood Risk</span>
                    <Badge variant="destructive">Moderate</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Pest Risk</span>
                    <Badge variant="secondary">Low</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Disease Risk</span>
                    <Badge variant="secondary">Low</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClimateResilience;