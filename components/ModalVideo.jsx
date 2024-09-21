import React from "react";

import ReactPlayer from "react-player";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import Image from "next/image";

const ModalVideo = () => {
  return (
    <Dialog>
      <DialogTrigger>Assistar o Vídeo</DialogTrigger>
      <DialogContent>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PQrGo"
          width="100%"
          height="100%"
          muted
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalVideo;
