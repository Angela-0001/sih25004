import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-24 pb-24">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notif">Notifications</Label>
            <Switch id="notif" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="compact">Compact layout</Label>
            <Switch id="compact" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;


