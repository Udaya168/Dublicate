import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Crown } from "lucide-react";

interface PremiumModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  feature?: string;
}

export function PremiumModal({ open, onOpenChange, feature }: PremiumModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm text-center">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2">
            <Crown className="h-5 w-5 text-yellow-400" />
            Premium Feature
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm text-neutral-400">
          {feature
            ? `"${feature}" is available on the Premium plan.`
            : "Upgrade to Premium to unlock this feature."}
        </p>
        <div className="flex flex-col gap-2 pt-2">
          <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
            Upgrade to Premium
          </Button>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Maybe later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PremiumModal;
