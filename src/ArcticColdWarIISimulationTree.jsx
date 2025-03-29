import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const scenarios = [
  { title: "NATO Arctic Expansion", consequence: "Russia fortifies Murmansk + launches Arctic naval drills", risk: "High" },
  { title: "China Joins NSR Logistics Pact", consequence: "Europe bypassed, BRICS Arctic corridor formed", risk: "Severe" },
  { title: "Greenland Signs Dual Treaty with US & Denmark", consequence: "EU left out of Arctic sovereignty framework", risk: "Very High" },
  { title: "Russia Offers Arctic Neutrality Treaty", consequence: "Undermines NATO legitimacy, woos Global South", risk: "Strategic" },
  { title: "EU Declares Arctic Critical Sovereignty Zone", consequence: "Triggers backlash from Russia, testing EU deterrence", risk: "Calculated" }
];

export default function ArcticColdWarIISimulationTree() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {scenarios.map((node, index) => (
        <Card key={index} className="shadow-xl rounded-2xl">
          <CardContent className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{node.title}</h2>
              <Badge variant="outline">{node.risk}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{node.consequence}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
