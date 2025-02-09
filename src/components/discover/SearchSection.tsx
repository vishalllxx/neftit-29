
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

export const SearchSection = ({ onSearch }: SearchSectionProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass p-2 flex gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
        <Input
          placeholder="Search projects and NFTs..."
          className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-white/90"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
