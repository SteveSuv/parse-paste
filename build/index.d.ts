import React from "react";

declare const parsePaste: (e: React.ClipboardEvent) => {
  text: string;
  html: string;
  imageList: {
    type: string;
    kind: string;
    file: File | null;
  }[];
  videoList: {
    type: string;
    kind: string;
    file: File | null;
  }[];
  audioList: {
    type: string;
    kind: string;
    file: File | null;
  }[];
};

export { parsePaste };
