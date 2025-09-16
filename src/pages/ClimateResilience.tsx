import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wheat, ArrowLeft, CloudRain, Thermometer, Wind, Droplets, AlertTriangle, Shield, TrendingUp, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  const recommendations = [
    { title: "Short-Duration Rice Varieties", description: "Consider CR Dhan 310 or Sahbhagi Dhan for monsoon season" },
    { title: "Water Management", description: "Install drip irrigation to optimize water usage during dry spells" },
    { title: "Soil Health", description: "Apply organic matter to improve soil water retention capacity" },
    { title: "Crop Diversification", description: "Intercrop with pulses to improve soil nitrogen and reduce risks" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Wheat className="h-8 w-8 text-agriculture-green" />
            <h1 className="text-2xl font-bold text-foreground">Climate Resilience Dashboard</h1>
          </div>
          <Button variant="outline" onClick={() => navigate('/yield-prediction')}>
            View Yield Predictions
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <Thermometer className="h-8 w-8 text-agriculture-orange mr-4" />
              <div>
                <p className="text-2xl font-bold text-foreground">25°C</p>
                <p className="text-sm text-muted-foreground">Temperature</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Droplets className="h-8 w-8 text-blue-500 mr-4" />
              <div>
                <p className="text-2xl font-bold text-foreground">65%</p>
                <p className="text-sm text-muted-foreground">Humidity</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Wind className="h-8 w-8 text-agriculture-green mr-4" />
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Wind (km/h)</p>
              </div>
            </CardContent>
          </Card>
          <Card>
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
            <Card className="mb-8">
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
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
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

            {/* Climate Recommendations */}
            <Card>
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
                    <div key={index} className="p-4 bg-agriculture-green/5 border border-agriculture-green/20 rounded-lg">
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
            <Card className="mb-8">
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
                    <div key={index} className="p-4 border rounded-lg">
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
            <Card>
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