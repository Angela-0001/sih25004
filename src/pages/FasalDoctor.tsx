import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import BottomTabNav from "@/components/BottomTabNav";

type Report = {
  farmerName: string;
  village: string;
  crop: string;
  soilType: string;
  language: string;
  areaAcre: string;
  irrigation: string;
  sowingDate: string;
  issues: string;
};

const FasalDoctor = () => {
  const [farmerName, setFarmerName] = useState("");
  const [village, setVillage] = useState("");
  const [crop, setCrop] = useState("");
  const [soilType, setSoilType] = useState("");
  const [language, setLanguage] = useState("Odia");
  const [areaAcre, setAreaAcre] = useState("");
  const [irrigation, setIrrigation] = useState("Canal");
  const [sowingDate, setSowingDate] = useState("");
  const [issues, setIssues] = useState("");
  const [report, setReport] = useState<Report | null>(null);

  const canSubmit = useMemo(() => {
    return farmerName && crop && soilType && issues;
  }, [farmerName, crop, soilType, issues]);

  const handleGenerate = () => {
    const rep: Report = {
      farmerName,
      village,
      crop,
      soilType,
      language,
      areaAcre,
      irrigation,
      sowingDate,
      issues,
    };
    setReport(rep);
    // Scroll to report
    setTimeout(() => {
      const el = document.getElementById("fasal-report");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleDownloadPdf = () => {
    if (!report) return;
    const w = window.open("", "_blank", "width=800,height=900");
    if (!w) return;
    const html = `
<!doctype html>
<html>
  <head>
    <meta charset='utf-8'/>
    <title>Fasal Doctor Report</title>
    <style>
      body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif; margin: 24px; color: #111827; }
      h1 { margin: 0 0 8px; font-size: 22px; }
      h2 { font-size: 16px; margin: 20px 0 8px; }
      .muted { color: #6b7280; }
      .card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; margin-top: 12px; }
      .row { display: grid; grid-template-columns: 160px 1fr; gap: 12px; margin: 6px 0; }
      .badge { display: inline-block; border: 1px solid #bfdbfe; color: #2563eb; background: #eff6ff; padding: 2px 8px; border-radius: 999px; font-size: 12px; }
      .section { margin-top: 12px; }
    </style>
  </head>
  <body>
    <h1>Fasal Doctor Report</h1>
    <div class='muted'>Generated on ${new Date().toLocaleString()}</div>
    <div class='card'>
      <div class='row'><strong>Farmer name</strong><div>${report.farmerName}</div></div>
      <div class='row'><strong>Village</strong><div>${report.village || '-'}</div></div>
      <div class='row'><strong>Preferred language</strong><div>${report.language}</div></div>
      <div class='row'><strong>Crop</strong><div>${report.crop}</div></div>
      <div class='row'><strong>Soil type</strong><div>${report.soilType}</div></div>
      <div class='row'><strong>Area (acre)</strong><div>${report.areaAcre || '-'}</div></div>
      <div class='row'><strong>Irrigation</strong><div>${report.irrigation}</div></div>
      <div class='row'><strong>Sowing date</strong><div>${report.sowingDate || '-'}</div></div>
    </div>
    <div class='section'>
      <h2>Farmer inputs (in ${report.language})</h2>
      <div class='card'>${report.issues.replace(/</g, "&lt;").replace(/\n/g, '<br/>')}</div>
    </div>
    <div class='section'>
      <h2>Advisory (auto-generated)</h2>
      <div class='card'>
        <div>Based on your crop <span class='badge'>${report.crop}</span> and soil <span class='badge'>${report.soilType}</span>, maintain optimal moisture and follow recommended nutrient schedule.</div>
        <ul>
          <li>Ensure field drainage in case of heavy rainfall.</li>
          <li>Scout for pests weekly; use IPM and avoid overuse of chemicals.</li>
          <li>Split nitrogen application across growth stages.</li>
        </ul>
      </div>
    </div>
    <script>window.print(); setTimeout(() => window.close(), 300);</script>
  </body>
</html>`;
    w.document.write(html);
    w.document.close();
  };

  return (
    <div className="mx-auto max-w-3xl px-4 pt-24 pb-24">
      <Card className="border-[#e6d9c5] bg-[#fcfaf7]">
        <CardHeader>
          <CardTitle>Fasal Doctor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="farmer">Farmer name</Label>
              <Input id="farmer" value={farmerName} onChange={(e) => setFarmerName(e.target.value)} placeholder="e.g., Debasis Babu" className="bg-[#f8f5f1] border-[#d6c2a1]" />
            </div>
            <div>
              <Label htmlFor="village">Village</Label>
              <Input id="village" value={village} onChange={(e) => setVillage(e.target.value)} placeholder="e.g., Baripada" className="bg-[#f8f5f1] border-[#d6c2a1]" />
            </div>
            <div>
              <Label>Preferred language</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="border-[#d6c2a1] bg-[#fcfaf7]"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Odia">Odia</SelectItem>
                  <SelectItem value="Hindi">Hindi</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Crop</Label>
              <Input value={crop} onChange={(e) => setCrop(e.target.value)} placeholder="e.g., Rice" className="bg-[#f8f5f1] border-[#d6c2a1]" />
            </div>
            <div>
              <Label>Soil type</Label>
              <Input value={soilType} onChange={(e) => setSoilType(e.target.value)} placeholder="e.g., Loamy" className="bg-[#f8f5f1] border-[#d6c2a1]" />
            </div>
            <div>
              <Label>Area (acre)</Label>
              <Input value={areaAcre} onChange={(e) => setAreaAcre(e.target.value)} placeholder="e.g., 2" className="bg-[#f8f5f1] border-[#d6c2a1]" />
            </div>
            <div>
              <Label>Irrigation</Label>
              <Select value={irrigation} onValueChange={setIrrigation}>
                <SelectTrigger className="border-[#d6c2a1] bg-[#fcfaf7]"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Canal">Canal</SelectItem>
                  <SelectItem value="Tube-well">Tube-well</SelectItem>
                  <SelectItem value="Rainfed">Rainfed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Sowing date</Label>
              <Input type="date" value={sowingDate} onChange={(e) => setSowingDate(e.target.value)} className="bg-[#f8f5f1] border-[#d6c2a1]" />
            </div>
          </div>
          <div>
            <Label>Describe your field/plant issues (in your language)</Label>
            <Textarea value={issues} onChange={(e) => setIssues(e.target.value)} rows={5} placeholder="Write symptoms, pests, disease, nutrient issues, weather impact, etc." className="bg-[#f8f5f1] border-[#d6c2a1]" />
          </div>
          <div className="flex gap-3">
            <Button disabled={!canSubmit} className="bg-[#2563eb] hover:bg-[#1e4fd6]" onClick={handleGenerate}>Generate report</Button>
            {report && (
              <Button variant="outline" className="border-[#2563eb] text-[#2563eb]" onClick={handleDownloadPdf}>Download PDF</Button>
            )}
          </div>
        </CardContent>
      </Card>

      {report && (
        <div id="fasal-report" className="mt-6">
          <Card className="border-[#e6d9c5] bg-[#fcfaf7]">
            <CardHeader>
              <CardTitle>Report Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <InfoItem label="Farmer" value={report.farmerName} />
                <InfoItem label="Village" value={report.village || '-'} />
                <InfoItem label="Language" value={report.language} />
                <InfoItem label="Crop" value={report.crop} />
                <InfoItem label="Soil" value={report.soilType} />
                <InfoItem label="Area (acre)" value={report.areaAcre || '-'} />
                <InfoItem label="Irrigation" value={report.irrigation} />
                <InfoItem label="Sowing date" value={report.sowingDate || '-'} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Farmer inputs (in {report.language})</div>
                <div className="rounded-md border border-[#e6d9c5] bg-white p-3 whitespace-pre-wrap">{report.issues}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Advisory</div>
                <div className="rounded-md border border-[#e6d9c5] bg-white p-3">
                  Based on your crop <strong>{report.crop}</strong> and soil <strong>{report.soilType}</strong>, maintain optimal moisture and follow recommended nutrient schedule. Split nitrogen applications. Scout weekly for pests and use IPM.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <BottomTabNav />
    </div>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-xs text-muted-foreground">{label}</div>
    <div className="text-sm font-medium">{value}</div>
  </div>
);

export default FasalDoctor;


