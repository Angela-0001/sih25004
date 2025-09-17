import { CheckCircle2, Circle, Sprout, Flower2, Leaf, Scissors } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StageKey = "sowing" | "germination" | "growth" | "flowering" | "harvest";

type Task = {
  id: string;
  title: string;
  stage: StageKey;
  done: boolean;
  description: string;
  icon: React.ReactNode;
};

const STAGE_LABEL: Record<StageKey, string> = {
  sowing: "Sowing",
  germination: "Germination",
  growth: "Growth",
  flowering: "Flowering",
  harvest: "Harvest",
};

const STAGE_ICON: Record<StageKey, React.ReactNode> = {
  sowing: <Sprout className="w-4 h-4" />,
  germination: <Leaf className="w-4 h-4" />,
  growth: <Leaf className="w-4 h-4" />,
  flowering: <Flower2 className="w-4 h-4" />,
  harvest: <Scissors className="w-4 h-4" />,
};

const TASKS: Task[] = [
  {
    id: "t1",
    title: "Seed treatment and field prep",
    stage: "sowing",
    done: true,
    description: "Treat seeds with recommended fungicide; plough and level the field.",
    icon: STAGE_ICON.sowing,
  },
  {
    id: "t2",
    title: "Irrigation for germination",
    stage: "germination",
    done: true,
    description: "Light irrigation to maintain moisture until emergence.",
    icon: STAGE_ICON.germination,
  },
  {
    id: "t3",
    title: "First nitrogen top-dressing",
    stage: "growth",
    done: false,
    description: "Apply 1/3rd recommended nitrogen with weeding.",
    icon: STAGE_ICON.growth,
  },
  {
    id: "t4",
    title: "Pest scouting and IPM",
    stage: "growth",
    done: false,
    description: "Scout for stem borer; use pheromone traps; apply biocontrol if needed.",
    icon: STAGE_ICON.growth,
  },
  {
    id: "t5",
    title: "Panicle initiation fertilizer",
    stage: "flowering",
    done: false,
    description: "Balanced NPK application at PI stage.",
    icon: STAGE_ICON.flowering,
  },
  {
    id: "t6",
    title: "Harvest and threshing",
    stage: "harvest",
    done: false,
    description: "Harvest at 20-24% grain moisture; dry to safe storage levels.",
    icon: STAGE_ICON.harvest,
  },
];

const StageMarker = ({ active }: { active: boolean }) => (
  <div className="relative flex items-center">
    <div className={`w-2 h-2 rounded-full ${active ? "bg-[#2563eb]" : "bg-neutral-300"}`} />
    <div className={`h-full w-px ml-[3px] ${active ? "bg-[#2563eb]" : "bg-neutral-300"}`} />
  </div>
);

const KrishiCalendar = () => {
  const grouped = TASKS.reduce<Record<StageKey, Task[]>>((acc, t) => {
    (acc[t.stage] ||= []).push(t);
    return acc;
  }, { sowing: [], germination: [], growth: [], flowering: [], harvest: [] });

  const order: StageKey[] = ["sowing", "germination", "growth", "flowering", "harvest"];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-2xl font-bold tracking-tight mb-6">Krishi Calendar</h1>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-[#e6d9c5]" />
        <div className="space-y-6">
          {order.map((stage) => (
            <div key={stage} className="relative pl-12">
              <div className="absolute left-0 top-2 flex items-center justify-center w-8 h-8 rounded-full bg-[#fcfaf7] border border-[#e6d9c5]">
                {STAGE_ICON[stage]}
              </div>
              <h2 className="text-lg font-semibold mb-3">{STAGE_LABEL[stage]}</h2>
              <div className="space-y-3">
                {grouped[stage].map((task) => (
                  <Card key={task.id} className="border-[#e6d9c5] bg-[#fcfaf7]">
                    <CardHeader className="py-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        {task.icon}
                        <span className={task.done ? "line-through text-muted-foreground" : ""}>{task.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 pb-4 flex items-center justify-between">
                      <p className={`text-sm ${task.done ? "text-muted-foreground" : ""}`}>{task.description}</p>
                      <div className="ml-4">
                        {task.done ? (
                          <div className="flex items-center text-neutral-500 gap-1">
                            <CheckCircle2 className="w-5 h-5" />
                            <span className="text-sm">Completed</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-[#2563eb] gap-1">
                            <Circle className="w-5 h-5" />
                            <span className="text-sm">Upcoming</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KrishiCalendar;


