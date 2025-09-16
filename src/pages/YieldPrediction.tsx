import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Wheat, ArrowLeft, TrendingUp, BarChart3, Target, Lightbulb, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const YieldPrediction = () => {
  const navigate = useNavigate();

  const crops = [
    { name: "Paddy (Rice)", current: "4.2 tons/ha", predicted: "4.8 tons/ha", confidence: 92, trend: "up" },
    { name: "Wheat", current: "3.1 tons/ha", predicted: "3.4 tons/ha", confidence: 88, trend: "up" },
    { name: "Maize", current: "2.8 tons/ha", predicted: "3.2 tons/ha", confidence: 85, trend: "up" },
    { name: "Pulses", current: "1.2 tons/ha", predicted: "1.4 tons/ha", confidence: 90, trend: "up" },
  ];

  const factors = [
    { factor: "Soil Health", impact: "High", status: "Good", description: "Optimal nitrogen and phosphorus levels" },
    { factor: "Weather Conditions", impact: "Medium", status: "Favorable", description: "Adequate rainfall and temperature" },
    { factor: "Irrigation", impact: "High", status: "Adequate", description: "Sufficient water supply available" },
    { factor: "Seed Quality", impact: "Medium", status: "Good", description: "High-quality certified seeds used" },
  ];

  const recommendations = [
    { title: "Optimize Fertilizer Application", description: "Apply urea in 3 splits for better nitrogen utilization", priority: "High" },
    { title: "Improve Drainage", description: "Install proper drainage to prevent waterlogging during monsoon", priority: "Medium" },
    { title: "Pest Management", description: "Monitor for brown plant hopper and apply IPM practices", priority: "Medium" },
    { title: "Harvest Timing", description: "Plan harvest for optimal moisture content (20-22%)", priority: "High" },
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
            <h1 className="text-2xl font-bold text-foreground">Yield Prediction Dashboard</h1>
          </div>
          <Button variant="outline" onClick={() => navigate('/climate-resilience')}>
            Climate Dashboard
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <Select defaultValue="odisha">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="odisha">Odisha</SelectItem>
                <SelectItem value="bhubaneswar">Bhubaneswar</SelectItem>
                <SelectItem value="cuttack">Cuttack</SelectItem>
                <SelectItem value="puri">Puri</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <Select defaultValue="kharif2024">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select Season" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kharif2024">Kharif 2024</SelectItem>
                <SelectItem value="rabi2024">Rabi 2024-25</SelectItem>
                <SelectItem value="summer2025">Summer 2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Yield Predictions */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-agriculture-green" />
                  AI-Powered Yield Predictions
                </CardTitle>
                <CardDescription>
                  Predicted yields based on current conditions and historical data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {crops.map((crop, index) => (
                    <div key={index} className="p-6 bg-agriculture-green/5 border border-agriculture-green/20 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-foreground">{crop.name}</h3>
                        <Badge variant="secondary" className="bg-agriculture-green/10 text-agriculture-green">
                          {crop.confidence}% Confidence
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Current Yield</p>
                          <p className="text-xl font-bold text-foreground">{crop.current}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Predicted Yield</p>
                          <div className="flex items-center gap-2">
                            <p className="text-xl font-bold text-agriculture-green">{crop.predicted}</p>
                            <TrendingUp className="h-4 w-4 text-agriculture-green" />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Improvement Potential</span>
                          <span className="font-medium text-agriculture-green">
                            +{((parseFloat(crop.predicted) - parseFloat(crop.current)) / parseFloat(crop.current) * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-agriculture-green h-2 rounded-full transition-all duration-500"
                            style={{ width: `${crop.confidence}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Influencing Factors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-agriculture-green" />
                  Yield Influencing Factors
                </CardTitle>
                <CardDescription>
                  Key factors affecting your crop yield predictions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {factors.map((factor, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium text-foreground">{factor.factor}</h4>
                        <p className="text-sm text-muted-foreground">{factor.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={factor.status === 'Good' || factor.status === 'Favorable' || factor.status === 'Adequate' ? 'secondary' : 'destructive'}
                          className="mb-1"
                        >
                          {factor.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground">{factor.impact} Impact</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-agriculture-orange" />
                  Optimization Recommendations
                </CardTitle>
                <CardDescription>
                  Actions to maximize your crop yield
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-foreground text-sm">{rec.title}</h4>
                        <Badge 
                          variant={rec.priority === 'High' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {rec.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{rec.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-lg">Season Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Expected Revenue</span>
                    <span className="font-semibold text-agriculture-green">₹2,45,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Cost Savings</span>
                    <span className="font-semibold text-agriculture-orange">₹18,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">ROI Improvement</span>
                    <span className="font-semibold text-agriculture-green">+15.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Harvest Date</span>
                    <span className="font-semibold text-foreground">Nov 15, 2024</span>
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

export default YieldPrediction;