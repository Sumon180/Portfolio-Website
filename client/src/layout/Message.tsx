import { useState } from "react";
import { RiMessageFill } from "react-icons/ri";
import { BiDotsHorizontal } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Message = () => {
  const [first, setfirst] = useState(false);

  const message = () => {
    setfirst(!first);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div
        onClick={message}
        className="fixed right-10 bottom-10 flex items-center justify-center w-10 h-10 bg-[#E8A327] z-50 rounded cursor-pointer"
      >
        <RiMessageFill className="messageIcon w-8 h-8" />
      </div>
      <div
        className={`fixed right-10 bottom-24 z-50 rounded bg-[#B5F1F3] w-96 h-[25rem] ${
          first ? "block" : "hidden"
        }`}
      >
        <div className="m-5">
          <div className="flex items-center justify-between">
            <img
              src="s-logo.png"
              alt="logo"
              className="w-14 h-14
            "
            />
            <div className="flex items-center gap-5">
              <BiDotsHorizontal className=" cursor-pointer w-5 h-5" />
              <RxCross2
                onClick={message}
                className=" cursor-pointer  w-5 h-5"
              />
            </div>
          </div>
          <div className="mt-10">
            <h2 className=" text-xl">Chat with Developer Assistant</h2>
            <p className="mt-5">Hi! How can we help you?</p>
          </div>

          <button className="py-2 mt-24 w-full font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded outline-none">
            Start Chat
          </button>
        </div>
      </div>
    </>
  );
};

export default Message;
