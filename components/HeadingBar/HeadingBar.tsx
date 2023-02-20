import React from "react";

type Props = {};

const HeadingBar = (props: Props) => {
  return (
    <div className="flex">
      <div className="flex w-1/2">
        <h4>Total Deposits: $4,782,541,899</h4>
        <h4>Daily Volume: $4,782,541,899</h4>
      </div>

      <div className="w-1/2">
        <button></button>
      </div>
    </div>
  );
};

export default HeadingBar;
