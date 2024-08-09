import React, { Fragment } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import DigitalGroup from "@/components/team/DigitalGroup";
import Photos from "@/components/team/Photos";
import CardBdsm from "@/components/team/CardBdsm";
import Business from "@/components/team/Business";
import TeamCards from "@/components/team/TeamCards";




export default function Team() {

  return (
    <>
      <Header color={false} />
      <div data-scroll-container>
        
      </div>
      <div>
        <h1
          className="font-extrabold sm:text-7xl md:text-8xxl lg:text-35xl xl:text-73xl 
        flex justify-center sm:mt-19.5 md:mt-25 lg:mt-35 xl:mt-82"
        >
          PANDA
        </h1>

        <div className="sm:mt- md:mt-55 relative sm:h-118 md:h-124 lg:h-149 xl:h-254">
          <div className="w-full rotate-6 xl:rotate-9 ">
            <DigitalGroup />
          </div>
          <div className="absolute w-full -rotate-9 xl:-rotate-9 sm:top-16 lg:top-4 xl:top-30">
            <DigitalGroup />
          </div>
          <div className="absolute w-full rotate-7 sm:top-47.5 lg:top-55 xl:top-109">
            <DigitalGroup />
          </div>
        </div>

        <div className="flex justify-center mx-2.5 md:mx-6 lg:mx-22.5 xl:mx-50 sm:h-30 md:h-55 lg:h-76 xl:h-135">
          <div className="container ">
            <Photos />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex justify-center mx-2.5 md:mx-6 lg:mx-25">
          <div className="container content-end ">
            <div className="sm:flex sm:flex-col md:grid md:grid-cols-2 md:gap-x-4 sm:mt-27 md:mt-50 lg:mt-73.5 xl:mt-118 font-inter text-base xl:text-3xl">
              <div className=" sm:mb-8 md:mb-0">
                <p>STARTING</p>
                <p>FROM SCRATCH</p>
              </div>

              <div>
                <p className="mb-7">
                  In 2008, Marc and Jason Debiak had a realization — “everything
                  around us is ugly.” Designs were thrown together haphazardly,
                  brands were barely scratching the surface of what was
                  possible, and, at the end of the day, the world just needed to
                  look better.
                </p>

                <p>
                  As luck would have it, they were the pair positioned to fix
                  it. As punk rock music professionals, they’d spent careers
                  building bands with rockstar promise but shoestring budgets,
                  leading to a DIY, nothing-is-impossible mentality that focused
                  on bringing out what made bands different.
                </p>
              </div>
            </div>

            <Image
              src={`./img/team/dash_xl.svg`}
              alt="dash_xl"
              width={1720}
              height={3}
              className="hidden xl:block w-screen xl:my-34"
            />
            <Image
              src={`./img/team/dash_md.svg`}
              alt="dash_md"
              width={300}
              height={5}
              className="sm:hidden md:block xl:hidden w-screen md:my-16 lg:my-25"
            />
            <Image
              src={`./img/team/dash_sm.svg`}
              alt="dash_sm"
              width={300}
              height={5}
              className="md:hidden w-screen sm:my-13 "
            />
            <div className="sm:flex sm:flex-col md:grid md:grid-cols-2 md:gap-x-4 font-inter text-base xl:text-3xl">
              <Image
                src={`./img/team/HasChanged.svg`}
                alt="HasChanged"
                width={850}
                height={600}
                className="sm:hidden md:block"
              />
              <div>
                <div className="grid justify-items-end uppercase font-extrabold sm:mb-5 xl:mb-13 sm:text-5xl lg:text-7xl xl:text-38xl ">
                  <p>has</p>
                  <p>changed</p>
                </div>

                <p className="sm:mb-5 lg:mb-6 lg:mb-10 font-normal">
                  In 2008, Marc and Jason Debiak had a realization — “everything
                  around us is ugly.” Designs were thrown together haphazardly,
                  brands were barely scratching the surface of what was
                  possible, and, at the end of the day, the world just needed to
                  look better. In 2008, Marc and Jason Debiak had a realization
                  — “everything around us is ugly.” Designs were thrown together
                  haphazardly, brands were barely scratching the surface of what
                  was possible, and, at the end of the day, the world just
                  needed to look better.
                </p>

                <p>
                  As luck would have it, they were the pair positioned to fix
                  it. As punk rock music professionals, they’d spent careers
                  building bands with rockstar promise but shoestring budgets,
                  leading to a DIY, nothing-is-impossible mentality that focused
                  on bringing out what made bands different.
                </p>

                <Image
                  src={`./img/team/HasChanged.svg`}
                  alt="HasChanged"
                  width={850}
                  height={600}
                  className="sm:block md:hidden sm:mt-10"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src={`./img/team/roboto is a_sm.svg`}
            alt="roboto is a_sm"
            width={685}
            height={432}
            className="sm:object-cover md:oject-contain sm:block sm:w-170 sm:h-107.5 sm:w-180 sm:h-107.5 lg:hidden sm:mt-13 sm:mt-16 "
          />
        </div>
        <div className="flex justify-center mx-2.5 md:mx-6 lg:mx-25">
          <div className="container grid justify-items-stretch ">
            <Image
              src={`./img/team/roboto is a_lg.svg`}
              alt="roboto is a_lg"
              width={1027}
              height={516}
              className="sm:hidden lg:block w-screen lg:mt-25 xl:mt-34 justify-self-center"
            />

            <Image
              src={`./img/team/dash_xl.svg`}
              alt="dash_xl"
              width={1720}
              height={3}
              className="hidden xl:block w-screen xl:my-34"
            />

            <Image
              src={`./img/team/dash_md.svg`}
              alt="dash_md"
              width={300}
              height={5}
              className="sm:hidden md:block xl:hidden w-screen md:my-16 lg:my-25 "
            />
            <Image
              src={`./img/team/dash_sm.svg`}
              alt="dash_sm"
              width={300}
              height={5}
              className="md:hidden w-screen sm:my-13 "
            />
            <div className="flex flex-col md:flex-row-reverse md:justify-center sm:mb-8 md:mb-0">
              <div className="md:w-88.5 lg:w-124 xl:w-212 sm:mb-8 md:ml-17 lg:ml-22 xl:ml-52">
                <p className="uppercase font-extrabold text-5xl lg:text-7xl xl:text-9xl xl:grid xl:justify-items-end mb-5 lg:mb-6 xl:mb-14">
                  founders
                </p>
                <p className="text-base xl:text-3xl ">
                  In 2008, Marc and Jason Debiak had a realization — “everything
                  around us is ugly.” Designs were thrown together haphazardly,
                  brands were barely scratching the surface of what was
                  possible, and, at the end of the day, the world just needed to
                  look better. In 2008, Marc and Jason Debiak had a realization
                  — “everything around us is ugly.” Designs were thrown together
                  haphazardly, brands were barely scratching the surface of what
                  was possible, and, at the end of the day, the world just
                  needed to look better.
                </p>
              </div>

              <CardBdsm
                img="./img/team/vladimir.svg"
                name="Vladimir Maximovskih"
                profession="Smm"
              />
            </div>

            <div className="md:flex md:justify-end md:mt-45.25 lg:mt-35 xl:mt-14 md:h-98 xl:h-200 md:relative md:mb-20 lg:mb-67">
              <div className="sm:mb-8 md:mb-0 md:mr-17 lg:mr-22 xl:mr-52 md:absolute md:inset-0 md:m-auto md:left-15 md:-top-10 lg:left-15 lg:top-0 xl:left-32">
                <CardBdsm
                  img="./img/team/vladimir.svg"
                  name="Vladimir Maximovskih"
                  profession="Smm"
                />
              </div>
              <div className="sm:mb-8 md:mb-0 md:absolute md:-top-55 lg:-top-82">
                <CardBdsm
                  img="./img/team/dima_cards.svg"
                  name="Vladimir Maximovskih"
                  profession="Smm"
                />
              </div>
              <div className="hidden lg:block absolute inset-0 m-auto lg:-top-15 lg:left-98 xl:-top-32 xl:left-149 ">
                <Business />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black h-135 md:h-144 lg:h-180 xl:h-254 w-screen pt-10 pl-2.5">
          <p className="text-white uppercase font-archivo font-extrabold text-5xl lg:text-7xl xl:text-8xxl ">
            team
          </p>
          <div className="flex flex-col container">
            <TeamCards
              img="./img/team/diana.svg"
              name="Diana Kiseleva"
              profession="UI/UX designer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
