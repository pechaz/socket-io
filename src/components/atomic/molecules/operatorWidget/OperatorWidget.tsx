import { StatusBadge } from "../../atoms";
import { IOperatorWidgetProps } from "./OperatorWidget.interface";

const OperatorWidget = ({
  lastName,
  name,
  status,
  showStatus = true,
  size = "medium",
}: IOperatorWidgetProps) => {
  return (
    <div
      className={`${
        size === "medium" ? "min-w-9 w-9 h-9" : "min-w-7 w-7 h-7"
      } border-[1.5px] border-white rounded-full bg-[#C8B6FA] flex items-center justify-center relative`}
    >
      <span className="font-[500] text-[#2F1673]">{`${name.charAt(
        0
      )}${lastName.charAt(0)}`}</span>
      {showStatus && (
        <StatusBadge className="absolute top-0 right-0" status={status} />
      )}
    </div>
  );
};

export default OperatorWidget;
