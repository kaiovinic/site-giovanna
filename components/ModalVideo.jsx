import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { FaRegPlayCircle } from "react-icons/fa";
import Image from "next/image";

const ModalVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <Dialog>
      <DialogTrigger onClick={handlePlay} asChild>
        <div className="flex items-center gap-4 cursor-pointer">
          <button className="relative w-[58px] h-[58px] bg-white rounded-full flex items-center justify-center shadow-2xl shadow-accent">
            <FaRegPlayCircle className="text-3xl text-accent" />
          </button>
          <span className="text-lg font-primary">Assistir o Vídeo</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=Er5a7snyQKM"}
          width="100%"
          height="100%"
          playing={isPlaying}
          controls
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalVideo;
