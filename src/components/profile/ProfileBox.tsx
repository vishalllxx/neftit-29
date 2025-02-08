
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileBox() {
  return (
    <Link to="/profile" className="block">
      <div className="flex items-center gap-3 mb-8 p-3 rounded-lg hover:bg-white/5 transition-colors">
        <Avatar className="h-10 w-10 ring-1 ring-white/20">
          <AvatarImage src="https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&dpr=1&w=1000" alt="Bored Ape" />
          <AvatarFallback>BA</AvatarFallback>
        </Avatar>
        <div className="text-white">
          <h4 className="font-medium">vishal5120</h4>
        </div>
      </div>
    </Link>
  );
}
