"use client";
import Image from "next/image";

export default function Bdsm() {
  return (
    <div className="select-none">
      <Image
        src={"../../../public/img/main/bdsm_braslet_sm_png.png"}
        alt="bdsm_braslet_sm_png"
        className="sm:block md:hidden size-auto"
      />
      <Image
        src={`./img/main/bdsm_braslet_md.svg`}
        alt="bdsm_braslet"
        width={696}
        height={409}
        className="hidden md:block lg:hidden size-auto"
      />
      <Image
        src={`./img/main/bdsm_braslet_lg.svg`}
        alt="bdsm_braslet"
        width={696}
        height={407}
        className="hidden lg:block xl:hidden size-auto"
      />
      <Image
        src={`./img/main/bdsm_braslet_xl.svg`}
        alt="bdsm_braslet"
        width={715}
        height={298}
        className=" hidden xl:block size-auto"
      />
    </div>
  );
}
