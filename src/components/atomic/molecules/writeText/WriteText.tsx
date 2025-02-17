import { RoundButton } from "../../atoms";
import { IWriteTextProps } from "./WriteText.interface";

import classes from "./WriteText.module.scss";

import IconMic from "@/public/assets/icons/ic-mic.svg";
import IconSmile from "@/public/assets/icons/ic-smile.svg";
import IconAttach from "@/public/assets/icons/ic-attach.svg";
import IconSend from "@/public/assets/icons/ic-send.svg";

const WriteText = ({
  val,
  onValChanged,
  onSend,
  className,
}: IWriteTextProps) => {
  return (
    <div className={`w-full flex items-center gap-2 ${className ?? ""}`}>
      <div className="w-full border border-[#E0E0E0] rounded-xl px-2 py-3 flex items-center gap-1 shadow-md bg-white">
        <IconMic className={classes["icon"]} />
        <input
          value={val}
          onChange={(e) => onValChanged(e.target.value)}
          placeholder="اینجا بنویسید ..."
          className="outline-none flex-1"
        />
        <IconSmile className={classes["icon"]} />
        <IconAttach className={classes["icon"]} />
      </div>
      <RoundButton active={!!val} icon={<IconSend />} onClick={onSend} />
    </div>
  );
};

export default WriteText;
