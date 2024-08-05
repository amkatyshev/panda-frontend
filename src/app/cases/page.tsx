import React, { Fragment } from "react";

import Header from "@/components/Header";
import Cards from "@/components/cases/Cards";
import GoldBtn from '@/components/GoldBtn';

export default function Cases() {
  return (
    <>
      <Header color={true} />
      <div className="flex justify-center mx-2.5 md:mx-6 lg:mx-22.5 xl:mx-50">
        <div className="container mt-8 md:mt-7.5 lg:mt-22.5 xl:mt-45.25">
          <h1 className="font-archivo text-5xxl font-black md:text-5xxxl xl:text-8xxl mr-1.5 ml-1.5">
            CASES
          </h1>
          <div className="sm:grid sm:grid-cols-2 md:flex md:flex-wrap mt-4 md:mt-5 lg:mt-6 xl:mt-9 mr-1.5 ml-1.5">
            <GoldBtn name_app="Mobile app" />
            <GoldBtn name_app="Mobile app" />
            <GoldBtn name_app="Mobile app" />
            <GoldBtn name_app="Mobile app" />
            <GoldBtn name_app="Mobile app" />
            <GoldBtn name_app="Mobile app" />
          </div>
          <div
            className="grid md:grid-cols-2 gap-y-9 md:gap-y-13 lg:gap-y-15
            mt-9 md:mt-10 lg:mt-9 xl:mt-15 mb-21 "
          >
            <Cards
              name_btn="Mobile appMobile appMobile appMobile appMobile "
              name="konfetki-baranochki"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu congue metus. Donec quis dui magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vulputate vehicula dolor, id tristique orci interdum eu."
            />
            <Cards
              name_btn="Mobile app"
              name="УЦ Познание"
              description="Lorem ipsum dolor sit amet, conse ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit.ctetur adipiscing elit. Duis eu congue metus. Donec quis dui magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vulputate vehicula dolor, id tristique orci interdum eu."
            />
            <Cards
              name_btn="Mobile app "
              name="konfetki-baranochki"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu congue metus. Donec quis dui magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vulputate vehicula dolor, id tristique orci interdum eu."
            />
            <Cards
              name_btn="Mobile app"
              name="УЦ Познание"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu congue metus. Donec quis dui magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vulputate vehicula dolor, id tristique orci interdum eu."
            />
            <Cards
              name_btn="Mobile app "
              name="konfetki-baranochki"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu congue metus. Donec quis dui magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vulputate vehicula dolor, id tristique orci interdum eu."
            />
            <Cards
              name_btn="Mobile app"
              name="УЦ Познание"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu congue metus. Donec quis dui magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vulputate vehicula dolor, id tristique orci interdum eu."
            />
          </div>
        </div>
      </div>
    </>
  );
}
