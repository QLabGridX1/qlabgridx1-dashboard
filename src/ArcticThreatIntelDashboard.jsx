import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function ArcticThreatIntelDashboard() {
  const triggers = [
    { title: "Greenland Strategic Drift", level: 85, risk: "Severe", tag: "Geopolitical Shift" },
    { title: "NATO–EU Arctic Divergence", level: 73, risk: "Very High", tag: "Alliance Friction" },
    { title: "BRICS Port Buy-ins via Russia", level: 68, risk: "High", tag: "Infrastructure Infiltration" },
    { title: "Arctic Energy vs EU Green Law", level: 62, risk: "High", tag: "Policy Conflict" },
    { title: "Quantum Threat Trigger (Snowflake Base)", level: 59, risk: "Moderate", tag: "Dual-Use Science" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {triggers.map((trigger, index) => (
        <Card key={index} className="shadow-xl rounded-2xl">
          <CardContent className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{trigger.title}</h2>
              <Badge variant="destructive">{trigger.risk}</Badge>
            </div>
            <Progress value={trigger.level} />
            <div className="text-sm text-muted-foreground">Category: {trigger.tag}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
