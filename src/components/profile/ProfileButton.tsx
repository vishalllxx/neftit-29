
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileButton() {
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="rounded-full p-0 h-10 w-10 ring-1 ring-white/20 hover:ring-white/40 transition-all"
      type="button"
    >
      <Avatar>
        <AvatarImage src="/placeholder.svg" alt="Profile" />
        <AvatarFallback>VS</AvatarFallback>
      </Avatar>
    </Button>
  );
}
