"use client";
import Image from "next/image";

export default function Scroll() {
  return (
    <div className="relative select-none">
      <Image
        src={`./img/main/Arrow_scroll.svg`}
        alt="arrow"
        width={8}
        height={34}
        className="absolute inset-0 m-auto"
      />

      <Image
        src={`./img/main/scroll.svg`}
        alt="scroll"
        width={89}
        height={89}
        className="animate-rotation"
      />
    </div>
  );
}
