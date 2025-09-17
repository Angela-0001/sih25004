import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Wheat, ArrowLeft, TrendingUp, BarChart3, Target, Lightbulb, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import LanguageQuickToggle from "@/components/LanguageQuickToggle";
import VoiceTranslator from "@/components/VoiceTranslator";

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

  const yieldSeries = [
    { crop: "Paddy", current: 4.2, predicted: 4.8 },
    { crop: "Wheat", current: 3.1, predicted: 3.4 },
    { crop: "Maize", current: 2.8, predicted: 3.2 },
    { crop: "Pulses", current: 1.2, predicted: 1.4 },
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
            <h1 className="text-2xl font-bold bg-gradient-to-r from-agriculture-green to-agriculture-light-green bg-clip-text text-transparent">Yield Prediction Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <LanguageQuickToggle />
            <VoiceTranslator />
            <Button
              variant="outline"
              onClick={() => navigate('/climate-resilience')}
              className="border-agriculture-green/40 hover:bg-agriculture-green/10 hover:border-agriculture-green/60 focus-visible:ring-2 focus-visible:ring-agriculture-green"
            >
              Climate Dashboard
            </Button>
          </div>
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
            <Card className="mb-8 hover:shadow-lg transition-all duration-300 border-agriculture-green/30">
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
                    <div key={index} className="p-6 bg-agriculture-green/5 border border-agriculture-green/20 rounded-lg hover:border-agriculture-green/40 transition-colors">
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

            {/* Yield Comparison Chart */}
            <Card className="mb-8 hover:shadow-lg transition-all duration-300 border-agriculture-green/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-agriculture-green" />
                  Current vs Predicted Yield (tons/ha)
                </CardTitle>
                <CardDescription>
                  Visual comparison across selected crops
                </CardDescription>
              </CardHeader>
              <CardContent style={{ height: 320 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={yieldSeries} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                    <XAxis dataKey="crop" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="current" name="Current" fill="hsl(var(--agriculture-brown))" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="predicted" name="Predicted" fill="hsl(var(--agriculture-green))" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Influencing Factors */}
            <Card className="hover:shadow-lg transition-all duration-300 border-agriculture-green/30">
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
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:border-agriculture-green/40 transition-colors">
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
            <Card className="mt-8 hover:shadow-lg transition-all duration-300 border-agriculture-green/30">
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