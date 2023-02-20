import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="hidden bg-[#68657B] px-16 py-4 text-[#D9D8CF] lg:flex 2xl:absolute 2xl:bottom-0 2xl:w-full 2xl:py-6">
      <div className="flex w-1/4 items-center justify-start">
        <h1 className="text-4xl font-extrabold ">Curve</h1>
      </div>

      <div className="flex w-3/4">
        <div className="flex w-full">
          <div className="w-1/3 justify-start">
            <h4 className="mb-4 text-center text-xl font-bold underline">
              Community
            </h4>

            <div className="flex h-24 items-center justify-around">
              <div className="">
                <p>Twitter</p>
                <p>Telegram</p>
                <p>Discord</p>
              </div>

              <div className="">
                <p>YouTube</p>
                <p>Dune Analytics</p>
                <p>Llama Airforce</p>
              </div>
            </div>
          </div>

          <div className="h-24 w-2/3 justify-end">
            <h4 className="mb-4 text-center text-xl font-bold underline">
              Resources
            </h4>

            <div className="flex justify-around">
              <div className="">
                <p>Whitepaper</p>
                <p>Audits</p>
                <p>Events</p>
                <p>Contracts</p>
              </div>

              <div className="">
                <p>Bug Bounty</p>
                <p>FAQ</p>
                <p>Integrations</p>
                <p>Donate</p>
              </div>

              <div className="">
                <p>Developer Docs</p>
                <p>News</p>
                <p>Resources</p>
                <p>Github</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
