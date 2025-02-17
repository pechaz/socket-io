import { IAdminSidebarProps } from "./AdminSidebar.interface";

const AdminSidebar = ({ ids, onClick }: IAdminSidebarProps) => {
  return (
    <div className="md:min-w-[236px] max-w-[236px] h-full bg-white flex flex-col">
      <div className="p-4">
        <span className="text-[20px] text-black font-normal">لیست کاربران</span>
      </div>
      {ids.map((id) => (
        <div
          className="w-full border border-[#DBDBDB] p-2 select-none  cursor-pointer"
          key={id}
          onClick={() => onClick(id)}
        >
          <span className="text-[14px] text-[#6A6A6A] font-medium">کاربر:</span>
          <span className="text-[15px] text-black font-medium">{id}</span>
        </div>
      ))}
    </div>
  );
};

export default AdminSidebar;
