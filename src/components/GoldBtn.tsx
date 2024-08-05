"use client";


export default function GoldBtn({name_app}:{name_app:string}) {
  return (
    <button
      className="border-2 border-gold rounded-lg text-base font-medium h-10 mb-3 mr-3
      hover:border-gold_dark hover:backdrop-grayscale-50 hover:text-gold_dark hover:brightness-90 hover:bg-gold_dark hover:bg-opacity-10
       xl:h-12 xl:text-2xl"
    >
      <p className="mx-3">{name_app}</p>
    </button>
  );
}
