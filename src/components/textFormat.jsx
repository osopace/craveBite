import { useState } from "react";

export default function ExpandableText({ text, maxChars = 50 }) {
  const [hovered, setHovered] = useState(false);

  const isLong = text.length > maxChars;
  const displayText =
    !hovered && isLong ? text.slice(0, maxChars) + "..." : text;

  return (
    <span
      className="relative cursor-pointer transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "inline-block", maxWidth: hovered ? "100%" : "20ch" }}
    >
      {displayText}
    </span>
  );
}
