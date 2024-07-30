import Image from "next/image";

export default function SeeAll() {
  return (
    <div className="xl-9 mt-5 lg:mt-4 xl:mt-9">
      <button
        className=" rounded-full bg-black w-75 h-17 xl:h-21 hover:bg-gray
		  md:w-88.5 lg:w-75 xl:w-91.25
      " /*mb-12 md:mb-64 ld:mb-19 xl:mb-83 увеличить расстояние под клавишей??? */
      >
        <span className="text-white font-archivo tracking-wider text-3xl xl:text-5xl font-extrabold">
          See all
        </span>
      </button>
    </div>
  );
}
