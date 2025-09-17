import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, MapPin, IndianRupee, Star, Sparkles, Clock, ArrowUpAZ, ArrowDown01 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";

type CropKey = "rice" | "tomato" | "wheat" | "maize";

type Mandi = {
  id: string;
  name: string;
  distanceKm: number;
  prices: Record<CropKey, { current: number; previous: number }>;
};

const CROPS: { value: CropKey; label: string }[] = [
  { value: "rice", label: "Rice" },
  { value: "tomato", label: "Tomato" },
  { value: "wheat", label: "Wheat" },
  { value: "maize", label: "Maize" },
];

const MANDIS: Mandi[] = [
  {
    id: "baripada",
    name: "Baripada Mandi",
    distanceKm: 15,
    prices: {
      rice: { current: 1850, previous: 1820 },
      tomato: { current: 22, previous: 25 },
      wheat: { current: 2100, previous: 2080 },
      maize: { current: 1650, previous: 1675 },
    },
  },
  {
    id: "balasore",
    name: "Balasore Mandi",
    distanceKm: 42,
    prices: {
      rice: { current: 1840, previous: 1860 },
      tomato: { current: 24, previous: 21 },
      wheat: { current: 2125, previous: 2125 },
      maize: { current: 1620, previous: 1600 },
    },
  },
  {
    id: "keonjhar",
    name: "Keonjhar Mandi",
    distanceKm: 67,
    prices: {
      rice: { current: 1885, previous: 1870 },
      tomato: { current: 19, previous: 20 },
      wheat: { current: 2090, previous: 2060 },
      maize: { current: 1700, previous: 1690 },
    },
  },
];

const PriceTag = ({ value, unit }: { value: number; unit: string }) => (
  <div className="flex items-baseline gap-1">
    <IndianRupee className="w-5 h-5 text-[#2563eb]" />
    <span className="text-2xl font-semibold tracking-tight">{value}</span>
    <span className="text-sm text-muted-foreground">/ {unit}</span>
  </div>
);

const Trend = ({ current, previous }: { current: number; previous: number }) => {
  const delta = current - previous;
  if (delta > 0)
    return (
      <div className="flex items-center text-green-600 gap-1">
        <ArrowUpRight className="w-4 h-4" />
        <span className="text-xs">+{delta}</span>
      </div>
    );
  if (delta < 0)
    return (
      <div className="flex items-center text-red-600 gap-1">
        <ArrowDownRight className="w-4 h-4" />
        <span className="text-xs">{delta}</span>
      </div>
    );
  return <span className="text-xs text-muted-foreground">No change</span>;
};

const unitByCrop: Record<CropKey, string> = {
  rice: "Quintal",
  tomato: "Kg",
  wheat: "Quintal",
  maize: "Quintal",
};

const MandiBhaba = () => {
  const [selectedCrop, setSelectedCrop] = useState<CropKey>("rice");
  const [query, setQuery] = useState("");
  const [radiusKm, setRadiusKm] = useState<number[]>([100]);
  const [sortBy, setSortBy] = useState<"distance" | "price">("distance");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const withinRadius = MANDIS.filter(m => m.distanceKm <= radiusKm[0]);
    const byQuery = withinRadius.filter(m => (q ? m.name.toLowerCase().includes(q) : true));
    const sorted = [...byQuery].sort((a, b) => {
      if (sortBy === "distance") return a.distanceKm - b.distanceKm;
      return b.prices[selectedCrop].current - a.prices[selectedCrop].current;
    });
    return sorted;
  }, [query, radiusKm, sortBy, selectedCrop]);

  const best = useMemo(() => {
    return [...filtered].sort((a, b) => b.prices[selectedCrop].current - a.prices[selectedCrop].current)[0];
  }, [filtered, selectedCrop]);

  const lastUpdated = new Date().toLocaleTimeString();

  return (
    <div className="mx-auto max-w-6xl px-4 pb-8 pt-24">
      {/* Hero */}
      <div className="mb-6 rounded-2xl p-6 border border-[#e6d9c5] bg-gradient-to-r from-[#fcfaf7] via-[#f8f5f1] to-[#fcfaf7]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-[#2563eb]" />
              <h1 className="text-2xl font-bold tracking-tight">Mandi Bhaba</h1>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Live nearby market prices to help you sell at the right place and time.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <Badge variant="secondary" className="bg-[#e9f0ff] text-[#2563eb]">Primary crop: {CROPS.find(c => c.value === selectedCrop)?.label}</Badge>
              <Badge variant="outline" className="border-[#e6d9c5]">{filtered.length} mandis within {radiusKm[0]} km</Badge>
              <Badge variant="outline" className="border-[#e6d9c5] flex items-center gap-1"><Clock className="w-3 h-3" /> Updated {lastUpdated}</Badge>
            </div>
          </div>
          {best && (
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-xs text-muted-foreground mb-1">Best price nearby</span>
              <div className="inline-flex items-center gap-2 rounded-lg border border-[#e6d9c5] bg-[#fcfaf7] px-3 py-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-medium">{best.name}</span>
                <span className="text-xs text-muted-foreground">({best.distanceKm} km)</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search mandi by name"
          className="bg-[#f8f5f1] border-[#d6c2a1] placeholder:text-muted-foreground/70"
        />
        <Select value={selectedCrop} onValueChange={(v: CropKey) => setSelectedCrop(v)}>
          <SelectTrigger className="min-w-[160px] border-[#2563eb]">
            <SelectValue placeholder="Select crop" />
          </SelectTrigger>
          <SelectContent>
            {CROPS.map(c => (
              <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="rounded-lg border border-[#e6d9c5] bg-[#fcfaf7] px-3 py-2">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-muted-foreground">Radius</span>
            <span>{radiusKm[0]} km</span>
          </div>
          <Slider value={radiusKm} min={10} max={200} step={5} onValueChange={(v) => setRadiusKm(v)} />
        </div>
        <Select value={sortBy} onValueChange={(v: any) => setSortBy(v)}>
          <SelectTrigger className="min-w-[160px] border-[#e6d9c5]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="distance"><div className="flex items-center gap-2"><ArrowUpAZ className="w-4 h-4" />Nearest first</div></SelectItem>
            <SelectItem value="price"><div className="flex items-center gap-2"><ArrowDown01 className="w-4 h-4" />Highest price</div></SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((m) => {
          const price = m.prices[selectedCrop];
          const isBest = best && best.id === m.id;
          const delta = price.current - price.previous;
          const percent = price.previous ? Math.round((delta / price.previous) * 100) : 0;
          const spark: number[] = [
            Math.max(0, price.previous - 20),
            price.previous,
            price.previous + Math.round(delta / 2),
            price.current,
          ];
          const max = Math.max(...spark);
          const min = Math.min(...spark);
          const toY = (v: number) => 36 - ((v - min) / (max - min || 1)) * 36;
          const path = `M 0 ${toY(spark[0])} L 24 ${toY(spark[1])} L 48 ${toY(spark[2])} L 72 ${toY(spark[3])}`;
          return (
            <Card key={m.id} className={`relative border-[#e6d9c5] bg-[#fcfaf7] overflow-hidden ${isBest ? "ring-2 ring-[#2563eb]/40" : ""}`}>
              {isBest && (
                <div className="absolute right-0 top-0 px-3 py-1 bg-[#2563eb] text-white text-xs rounded-bl-md flex items-center gap-1">
                  <Star className="w-3 h-3" /> Best price
                </div>
              )}
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    {CROPS.find(c => c.value === selectedCrop)?.label}
                    <Badge variant="outline" className="border-[#d6c2a1] text-xs">{unitByCrop[selectedCrop]}</Badge>
                  </span>
                  <span className="flex items-center text-sm text-muted-foreground gap-1">
                    <MapPin className="w-4 h-4" /> {m.distanceKm} km away
                  </span>
                </CardTitle>
                <div className="text-sm text-foreground font-medium mt-1">{m.name}</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Current price</div>
                    <PriceTag value={price.current} unit={unitByCrop[selectedCrop]} />
                    <div className="mt-1 text-xs text-muted-foreground">Prev: <span className="line-through">₹{price.previous}</span></div>
                  </div>
                  <div className="flex flex-col items-end">
                    <Trend current={price.current} previous={price.previous} />
                    <span className={`text-xs ${percent >= 0 ? "text-green-600" : "text-red-600"}`}>{percent >= 0 ? "+" : ""}{percent}%</span>
                  </div>
                </div>
                <div className="mt-4">
                  <svg width="100%" height="40" viewBox="0 0 72 40" preserveAspectRatio="none">
                    <path d={path} fill="none" stroke="#2563eb" strokeWidth="2" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MandiBhaba;


