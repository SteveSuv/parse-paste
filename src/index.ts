import React from "react";

export const parsePaste = (e: React.ClipboardEvent) => {
  const clipboardData = e.clipboardData || e.nativeEvent.clipboardData;
  const items = clipboardData.items;

  const imageList = [];
  const videoList = [];
  const audioList = [];

  const text = clipboardData.getData("text/plain");
  const html = clipboardData.getData("text/html");

  for (const item of items) {
    const { type, kind } = item;

    if (type.startsWith("image/")) {
      imageList.push({ type, kind, file: item.getAsFile() });
    }

    if (type.startsWith("video/")) {
      videoList.push({ type, kind, file: item.getAsFile() });
    }

    if (type.startsWith("audio/")) {
      audioList.push({ type, kind, file: item.getAsFile() });
    }
  }

  const result = {
    text,
    html,
    imageList,
    videoList,
    audioList,
  };

  return result;
};
