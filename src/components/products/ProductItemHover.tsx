import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function ProductItemHover() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="text-gray-400">
          <Info />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <p className="text-sm">
              For EU and UK customers, VAT is included. For US and International
              customers, taxes are calculated at checkout.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
