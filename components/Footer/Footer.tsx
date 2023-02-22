import { FC } from "react";

type Props = {};

const Footer: FC = (props: Props) => {
  return (
    <div className="absolute bottom-0 z-40 w-full bg-[#68657B] px-16 py-2 text-[#D9D8CF] dark:border-t-2 dark:border-[#9A9E9E] dark:bg-[#31353F] sm:flex">
      <div className="hidden cursor-pointer items-center justify-start md:flex md:w-1/4">
        <h1 className="text-4xl font-extrabold ">Curve</h1>
      </div>

      <div className="flex w-full md:w-3/4">
        <div className="flex w-full">
          <div className="w-1/2 justify-start md:w-1/3">
            <h4 className="mb-4 text-center text-xl font-bold underline">
              Community
            </h4>

            <div className="flex h-24 items-center justify-around">
              <div className="">
                <p>Twitter</p>
                <p>Telegram</p>
                <p>Discord</p>
              </div>

              <div className="hidden md:block">
                <p>YouTube</p>
                <p>Dune Analytics</p>
                <p>Llama Airforce</p>
              </div>
            </div>
          </div>

          <div className="h-full w-1 dark:bg-[#9A9E9E]"></div>

          <div className="h-24 w-1/2 justify-end md:w-2/3">
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

              <div className="hidden md:block">
                <p>Bug Bounty</p>
                <p>FAQ</p>
                <p>Integrations</p>
                <p>Donate</p>
              </div>

              <div className="hidden md:block">
                <p>Developer Docs</p>
                <p>News</p>
                <p>Resources</p>
                <p>Github</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden w-full items-center justify-center text-center">
        <h1 className="text-4xl font-extrabold">Curve</h1>
      </div>
    </div>
  );
};

export default Footer;
