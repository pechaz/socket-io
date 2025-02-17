import { IRoundButtonProps } from "./RoundButton.interface";

const RoundButton = ({
  onClick,
  icon,
  className,
  active = true,
}: IRoundButtonProps) => {
  return (
    <button
      className={`rounded-full shadow-md min-w-[42px] h-[42px] flex items-center justify-center ${
        active ? "bg-[#5B4DFF]" : "bg-[#E0E0E0]"
      } ${className ?? ""}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default RoundButton;
