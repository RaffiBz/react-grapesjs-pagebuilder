import React from "react";

export default function TextArea({
  rows,
  placeholder,
  className,
  textId,
  dimensions,
}) {
  return (
    <div className={dimensions}>
      <textarea
        typeof="text"
        rows={rows}
        className={className}
        placeholder={placeholder}
        id={textId}
      />
    </div>
  );
}
