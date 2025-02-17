import { IWriteTextAdminProps } from "./WriteTextAdmin.interface";

import classes from "./WriteTextAdmin.module.scss";

import IconBookmark from "@/public/assets/icons/ic-bookmark.svg";
import IconSend from "@/public/assets/icons/ic-send.svg";

const WriteText = ({
  val,
  onValChanged,
  onSend,
  className,
}: IWriteTextAdminProps) => {
  return (
    <div
      className={`py-2 sm:py-0 sm:h-14 bg-white px-2 w-full flex flex-col sm:flex-row items-center gap-2 bg-[##F5F5F5] border border-[#BBBBBB] rounded-xl ${
        className ?? ""
      }`}
    >
      <div className="w-full h-full flex items-stretch gap-2 ">
        <IconBookmark className={`${classes["icon"]} self-center`} />
        <div className="hidden md:block min-h-full w-[1px] bg-[#BBBBBB]" />
        <input
          value={val}
          onChange={(e) => onValChanged(e.target.value)}
          placeholder="اینجا بنویسید ..."
          className="outline-none flex-1"
        />
      </div>
      <button
        className={`rounded-full shadow-md flex items-center justify-center flex-nowrap p-2 gap-2 ${
          !!val ? "bg-[#791469]" : "bg-[#E0E0E0]"
        } ${className ?? ""}`}
        onClick={onSend}
      >
        <span className="font-bold text-white text-[13px] text-nowrap">
          ارسال پیام
        </span>
        <IconSend />
      </button>
    </div>
  );
};

export default WriteText;
