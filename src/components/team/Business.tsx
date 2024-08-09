"use client";
import Image from "next/image";

export default function Business() {
  return (
    <div className="relative select-none">
      <Image
        src={`./img/team/business.svg`}
        alt="scroll"
        width={157}
        height={157}
        className="animate-rotation_team xl:w-83"
      />
    </div>
  );
}
