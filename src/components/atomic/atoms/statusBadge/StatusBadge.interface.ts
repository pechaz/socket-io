export type STATUS_BADGE_TYPE = "available" | "away";

export interface IStatusBadgeProps {
  status: STATUS_BADGE_TYPE;
  className?: string;
}
