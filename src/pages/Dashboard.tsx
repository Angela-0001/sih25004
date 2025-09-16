import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wheat, LogOut, User, TrendingUp, CloudRain } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Wheat className="h-8 w-8 text-agriculture-green" />
            <h1 className="text-2xl font-bold text-foreground">Farm Forward Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>Welcome, Farmer</span>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Your Agricultural Command Center
          </h2>
          <p className="text-lg text-muted-foreground">
            Access climate insights and yield predictions to optimize your farming operations.
          </p>
        </div>

        {/* Dashboard Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <Card 
            className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-agriculture-green/20 hover:border-agriculture-green/40"
            onClick={() => navigate('/climate-resilience')}
          >
            <CardHeader className="space-y-4">
              <div className="w-16 h-16 bg-agriculture-green/10 rounded-2xl flex items-center justify-center group-hover:bg-agriculture-green/20 transition-colors">
                <CloudRain className="h-8 w-8 text-agriculture-green" />
              </div>
              <div>
                <CardTitle className="text-2xl text-foreground mb-2">
                  Climate Resilience Dashboard
                </CardTitle>
                <CardDescription className="text-base">
                  Monitor weather patterns, climate risks, and get early warnings for natural disasters. 
                  Plan your farming activities based on comprehensive climate data.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-agriculture-green rounded-full" />
                  <span className="text-muted-foreground">7-day weather forecast</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-agriculture-green rounded-full" />
                  <span className="text-muted-foreground">Disaster risk alerts</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-agriculture-green rounded-full" />
                  <span className="text-muted-foreground">Climate-resistant crop recommendations</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-agriculture-green rounded-full" />
                  <span className="text-muted-foreground">Optimal sowing dates</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-agriculture-green hover:bg-agriculture-green/90">
                Access Climate Dashboard
              </Button>
            </CardContent>
          </Card>

          <Card 
            className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-agriculture-green/20 hover:border-agriculture-green/40"
            onClick={() => navigate('/yield-prediction')}
          >
            <CardHeader className="space-y-4">
              <div className="w-16 h-16 bg-agriculture-orange/10 rounded-2xl flex items-center justify-center group-hover:bg-agriculture-orange/20 transition-colors">
                <TrendingUp className="h-8 w-8 text-agriculture-orange" />
              </div>
              <div>
                <CardTitle className="text-2xl text-foreground mb-2">
                  Yield Prediction
                </CardTitle>
                <CardDescription className="text-base">
                  Get AI-powered crop yield predictions based on historical data, weather patterns, 
                  and soil health metrics to optimize your farming strategy.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-agriculture-orange rounded-full" />
                  <span className="text-muted-foreground">AI-powered predictions</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-agriculture-orange rounded-full" />
                  <span className="text-muted-foreground">Multi-crop analysis</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-agriculture-orange rounded-full" />
                  <span className="text-muted-foreground">Historical trend analysis</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-agriculture-orange rounded-full" />
                  <span className="text-muted-foreground">Optimization recommendations</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-agriculture-orange hover:bg-agriculture-orange/90">
                View Predictions
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-agriculture-green mb-2">25°C</div>
              <p className="text-sm text-muted-foreground">Current Temperature</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-agriculture-orange mb-2">85%</div>
              <p className="text-sm text-muted-foreground">Soil Moisture</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-agriculture-brown mb-2">12</div>
              <p className="text-sm text-muted-foreground">Days to Harvest</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;