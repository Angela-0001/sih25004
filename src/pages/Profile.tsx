import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-24 pb-24">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://api.dicebear.com/7.x/thumbs/svg?seed=debasis" />
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">Debasis Babu</div>
            <div className="text-sm text-muted-foreground">debasis@example.com</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;


