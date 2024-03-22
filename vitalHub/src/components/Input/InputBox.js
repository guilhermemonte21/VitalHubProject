import { InputLightEditable } from "./Style";
import { FieldContent } from "../Container/Style";
import { InputLabel } from "../Label/Style";
import { useState } from "react";

export const InputBox = ({
  lineCount = 1,
  labelText,
  placeholder,
  maxLength,
  height,
}) => {
  const [text, setText] = useState("");
  return (
    <FieldContent>
      <InputLabel>{labelText}</InputLabel>
      <InputLightEditable
        onChange={(e) => setText(e)}
        empty={text == "" ? true : false}
        multiline={lineCount > 1 ? true : false}
        size={height}
        placeholder={placeholder}
        maxLength={maxLength}
        numberOfLines={lineCount}
      />
    </FieldContent>
  );
};

