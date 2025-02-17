import { IStatusBadgeProps } from "./StatusBadge.interface";

const StatusBadge = ({ status, className }: IStatusBadgeProps) => {
  return (
    <div
      className={`shadow-sm rounded-full border-2 border-white w-[10px] h-[10px] ${
        status === "available" ? "bg-[#3CD143]" : "bg-red-500"
      } ${className ?? ""}`}
    />
  );
};

export default StatusBadge;
