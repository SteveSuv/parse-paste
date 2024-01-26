import { useState } from "react";
import { parsePaste } from ".";

export const App = () => {
  const [clipboardMap, setClipboardMap] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <textarea
        placeholder="paste anything here"
        rows={3}
        onPaste={(e) => {
          const result = parsePaste(e);
          setClipboardMap(JSON.stringify(result, null, 2));
          console.log(222, result.imageList[0].file);
        }}
      />
      <textarea readOnly rows={20} value={clipboardMap} />
    </div>
  );
};
