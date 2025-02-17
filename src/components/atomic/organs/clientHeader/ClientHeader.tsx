import { OperatorWidget } from "../../molecules";

const ClientHeader = () => {
  return (
    <div className="w-full bg-[#5B4DFF] p-4 flex gap-4 items-center">
      <OperatorWidget name="Javad" lastName="Dehghan" status="available" />
      <div className="flex flex-col gap-1">
        <span className="font-medium text-[14px] text-white">
          پشتیبانی آنلاین
        </span>
        <span className="font-medium text-[12px] text-white">
          پاسخگوی سوالات شما هستیم
        </span>
      </div>
    </div>
  );
};

export default ClientHeader;
