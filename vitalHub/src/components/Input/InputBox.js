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
  onChange,
  editable = true,
  value,
}) => {
  const [text, setText] = useState("");
  return (
    <FieldContent>
      <InputLabel>{labelText}</InputLabel>
      <InputLightEditable
        value={value}
        onChangeText={(e) => onChange(e)}
        empty={text == "" ? true : false}
        multiline={lineCount > 1 ? true : false}
        size={height}
        placeholder={placeholder}
        maxLength={maxLength}
        numberOfLines={lineCount}
        editable={editable}
      />
    </FieldContent>
  );
};
