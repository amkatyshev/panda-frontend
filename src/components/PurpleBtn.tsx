"use client";


export default function PurpleBtn({ name }: { name: string }) {
  return (
    <button
      className="bg-purple rounded-full hover:bg-purple_dark shadow-2xl shadow-purple
    	h-15 xl:h-29
	    w-75 md:w-59 lg:w-60 xl:w-107.5"
    >
      <p className="font-archivo tracking-wider font-black text-xl text-white xl:text-3xl">
        {name}
      </p>
    </button>
  );
}
