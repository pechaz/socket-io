import { ReactNode } from "react";

export type STATUS_BADGE_TYPE = "available" | "away";

export interface IRoundButtonProps {
  className?: string;
  icon?: ReactNode;
  active?: boolean;
  onClick: () => void;
}
