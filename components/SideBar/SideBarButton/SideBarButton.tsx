import React, { FC, ReactElement } from "react";

interface Props {
  title: string;
  icon?: ReactElement;
}

const SideBarButton: FC<Props> = ({ title, icon }) => {
  return (
    <div>
      <button className="my-4 flex w-full items-center pl-4 text-xl font-bold transition-all hover:bg-[#C6C2E7] hover:text-purple-600">
        <p>{title}</p>
        {icon}
      </button>
    </div>
  );
};

export default SideBarButton;
