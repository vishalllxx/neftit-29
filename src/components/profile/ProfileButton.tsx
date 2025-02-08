
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileButton() {
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="rounded-full p-0 h-10 w-10 ring-1 ring-white/20 hover:ring-white/40 transition-all"
      type="button"
      aria-label="Open profile menu"
    >
      <Avatar>
        <AvatarImage src="https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&dpr=1&w=1000" alt="Bored Ape" />
        <AvatarFallback>BA</AvatarFallback>
      </Avatar>
    </Button>
  );
}
