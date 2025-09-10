import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] mt-16 sm:mt-24 md:mt-20 lg:mt-0 pt-5 text-center text-white">
      {/* First line */}
      <div className="text-[12vw] sm:text-[10vw] lg:text-[9.5vw] flex justify-center items-center uppercase leading-[10vw] sm:leading-[8vw] lg:leading-[6vw]">
        L'étincelle
      </div>

      {/* Second line with video oval */}
      <div className="text-[11vw] sm:text-[9vw] lg:text-[9.5vw] flex justify-center items-start uppercase leading-[10vw] sm:leading-[10vw] lg:leading-[8vw] mt-6 sm:mt-8 lg:mt-4">
        qui
        <div className="h-[12vw] w-[28vw] sm:h-[9vw] sm:w-[22vw] lg:h-[7vw] lg:w-[18vw] rounded-full overflow-hidden mx-2 sm:mx-4 flex items-center justify-center">
          <video
            className="w-full h-full object-cover rounded-full"
            autoPlay
            loop
            muted
            playsInline
            src="src/assets/video.mp4"
          ></video>
        </div>
        génère
      </div>

      {/* Third line */}
      <div className="text-[12vw] sm:text-[10vw] lg:text-[9.5vw] flex justify-center items-center uppercase leading-[12vw] sm:leading-[10vw] lg:leading-[8vw] mt-6 sm:mt-8 lg:mt-4">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
