"use client";
import Image from "next/image";

interface CardBdsmProps {
  img: string;
  name: string;
  profession: string;
}

export default function CardBdsm({ img, name, profession }: CardBdsmProps) {
  return (
    <>
      <div className="">
        
        <Image
          src={img}
          alt="img"
          width={1027}
          height={516}
          className=""
        />
        <div className="grid grid-cols-2">

          <div className="col-start-1">
            <Image
              src={`./img/slash.svg`}
              alt="slash"
              width={18}
              height={64}
              className=""
            />
          </div>

          <div>
            <p className=''>{name}</p>
            <p className=''>{profession}</p>
          </div>

        </div>
      </div>
    </>
  );
}
