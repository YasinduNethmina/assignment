import React, { FC, ReactElement } from "react";

interface Props {
  title: string;
  icon?: ReactElement;
  func?: any;
}

const SideBarButton: FC<Props> = ({ title, icon, func }) => {
  return (
    <div>
      <button
        onClick={func}
        className="my-4 flex w-full items-center pl-4 text-left text-xl font-bold transition-all hover:bg-[#C6C2E7] hover:text-purple-600 dark:text-[#9A9E9E] hover:dark:bg-[#1B2028] hover:dark:text-white"
      >
        <p>{title}</p>
        {icon}
      </button>
    </div>
  );
};

export default SideBarButton;
