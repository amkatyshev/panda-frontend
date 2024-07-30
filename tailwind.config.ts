import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1200px",
      xl: "1920px",
    },

    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gold: "#F4CC14",
      gold_dark: "#D3AE00",
      pink: "#FF6AFF",
      purple: "#6C36F9",
      purple_dark: "#46249E",
      red: "#F75129",
      red_dark: "#CE2E07",
      gray: "#808080",
      gray_light: "#D3D3D3",
      gray_lightest: "#F5F5F5",
    },

    fontFamily: {
      inter: ["var(--font-inter)"],
      glory: ["var(--font-glory)"],
      archivo: ["var(--font-archivo)"],
    },

    extend: {
      lineHeight: {
        "14": "3.5rem",
      },

      fontSize: {
        "4xxl": "2.5rem" /*40px*/,
        "5xxl": "3.25rem" /*52px*/,
        "5xxll": "3.5rem" /*56px*/,
        "5xxxl": "4rem" /*64px*/,
        "8xxl": "7.5rem" /*120px*/,
      },

      spacing: {
        "4.5": "1.125rem" /*18px*/,
        "5.5": "1.375rem" /*22px*/,
        "7.5": "1.875rem" /*30px*/,
        "8.5": "2.125rem" /*34px*/,
        "9.5": "2.325rem" /*38px*/,
        "10.5": "2.625rem" /*42px*/,
        "11.5": "2.875rem" /*46px*/,
        "13": "3.25rem" /*52px*/,
        "15": "3.75rem" /*60px*/,
        "15.5": "3.875rem" /*62px*/,
        "17": "4.25rem" /*68px*/,
        "17.5": "4.375rem" /*70px*/,
        "18": "4.5rem" /*72px*/,
        "18.5": "4.625rem" /*74px*/,
        "19": "4.75rem" /*76px*/,
        "19.5": "4.875rem" /*80px*/,
        "21": "5.25rem" /*84px*/,
        "22": "5.5rem" /*88px*/,
        "22.5": "5.625rem" /*90px*/,
        "23.75": "5.9375rem" /*95px*/,
        "25": "6.25rem" /*100*/,
        "25.5": "6.375rem" /*102*/,
        "27": "6.75rem" /*108px*/,
        "29": "7.25rem" /*116px*/,
        "30": "7.5rem" /*120px*/,
        "34": "8.5rem" /*132px*/,
        "35": "8.75rem" /*140px*/,
        "37.5": "9.375rem" /*150px*/,
        "38.25": "9.5625rem" /*153px*/,
        "39": "9.75rem" /*156px*/,
        "41": "10.25rem" /*164px*/,
        "43.75": "10.9375rem" /*17px*/,
        "45.25": "11.3125rem" /*181px*/,
        "47.5": "11.875rem" /*190px*/,
        "50": "12.5rem" /*200px*/,
        "55": "13.75rem" /*220px*/,
        "59": "14.75rem" /*236px*/,
        "64": "16rem" /*256px*/,
        "67": "16.75rem" /*268px*/,
        "71": "17.75rem" /*284px*/,
        "75": "18.75rem" /*300px*/,
        "76": "19rem" /*304px*/,
        "79": "19.75rem" /*316px*/,
        "83": "20.75rem" /*332px*/,
        "88.5": "22.125rem" /*354px*/,
        "91.25": "22.8125rem" /*365px*/,
        "98": "24.5rem" /*392px*/,
        "107.5": "26.875rem" /*430px*/,
        "112": "28rem" /*448px*/,
        "118": "29.5rem" /*472px*/,
        "124": "31rem" /*496px*/,
        "135": "33.75rem" /*540px*/,
        "149": "37.25rem" /*596px*/,
        "162": "40.5rem" /*648px*/,
        "170": "42.5rem" /*686px*/,
        "172.5": "43.125rem" /*690px*/,
        "174": "43.5rem" /*696px*/,
        "177": "44.25rem" /*708px*/,
        "180": "45rem" /*720px*/,
        "188": "47rem" /*750px*/,
        "196": "49rem" /*784px*/,
        "200": "50rem" /*800px*/,
        "250": "62.5rem" /*1000px*/,
        "254": "63.5rem" /*1016px*/,
        "290": "72.5rem" /*1160px*/,
        "332": "83rem" /*1328px*/,
        "380": "95rem" /*1520px*/,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 24.9s linear infinite",
        rotation: "rotation 9s linear infinite",
        fill: "fill 1s linear infinite",

        progress_sm: "progress 2s linear",
        progress_md: "progress 2s linear",
        progress_lg: "progress 2s linear",
        progress_xl: "progress 2s linear",

        pers1_sm: "pers1_sm 2.2s linear",
        pers2_sm: "pers2_sm 3.1s linear",
        pers3_sm: "pers3_sm 2s linear",

        pers1_md: "pers1_md 2.2s linear",
        pers2_md: "pers2_md 2s linear",
        pers3_md: "pers3_md 2.2s linear",

        pers1_lg: "pers1_lg 2s linear",
        pers2_lg: "pers2_lg 2s linear",
        pers3_lg: "pers3_lg 3.3s linear",

        pers1_xl: "pers1_xl 2.2s linear",
        pers2_xl: "pers2_xl 2s linear",
        pers3_xl: "pers3_xl 3.1s linear",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        rotation: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fill: {
          "0%": { transform: "scale-0" },
          "100%": { transform: "scale-100" },
        },

        pers1_sm: {
          "0%": {
            transform: "translateX(20%) translateY(-100%) rotate(0deg)",
          },
          "100%": {
            transform: "translateX(-150%) translateY(900%) rotate(-180deg) ",
          },
        },

        pers2_sm: {
          "0%": {
            transform: "translateX(-100%) translateY(-200%) rotate(0deg)",
          },
          "100%": {
            transform: "translateX(100%) translateY(700%) rotate(180deg) ",
          },
        },

        pers3_sm: {
          "0%": {
            transform: "translateX(0%) translateY(200%) rotate(-20deg)",
          },
          "100%": {
            transform: "translateX(150%) translateY(-400%)  rotate(-200deg)",
          },
        },

        pers1_md: {
          "0%": {
            transform: "translateX(70%) translateY(10%) rotate(0deg)",
          },
          "100%": {
            transform: "translateX(-100%) translateY(700%) rotate(-170deg) ",
          },
        },

        pers2_md: {
          "0%": {
            transform: "translateX(-50%) translateY(-100%) rotate(0deg)",
          },
          "100%": {
            transform: "translateX(300%) translateY(300%) rotate(170deg) ",
          },
        },

        pers3_md: {
          "0%": {
            transform: "translateX(-50%) translateY(300%) rotate(-20deg)",
          },
          "100%": {
            transform: "translateX(250%) translateY(-400%)  rotate(-200deg)",
          },
        },

        pers1_lg: {
          "0%": {
            transform: "translateX(70%) translateY(0%) rotate(0deg)",
          },
          "100%": {
            transform: "translateX(-200%) translateY(400%) rotate(-120deg) ",
          },
        },

        pers2_lg: {
          "0%": {
            transform: "translateX(-20%) translateY(-120%) rotate(0deg)",
          },
          "100%": {
            transform: "translateX(300%) translateY(200%) rotate(120deg) ",
          },
        },

        pers3_lg: {
          "0%": {
            transform: "translateX(-300%) translateY(200%) rotate(-20deg)",
          },
          "100%": {
            transform: "translateX(700%) translateY(-400%)  rotate(-170deg)",
          },
        },

        pers1_xl: {
          "0%": {
            transform: "translateX(70%) translateY(10%) rotate(0deg)",
          },
          "100%": {
            transform: "translateX(-300%) translateY(700%) rotate(-120deg) ",
          },
        },

        pers2_xl: {
          "0%": {
            transform: "translateX(-50%) translateY(-100%) rotate(0deg)",
          },
          "100%": {
            transform: "translateX(400%) translateY(300%) rotate(120deg) ",
          },
        },

        pers3_xl: {
          "0%": {
            transform: "translateX(-150%) translateY(120%) rotate(-20deg)",
          },
          "100%": {
            transform: "translateX(700%) translateY(-400%)  rotate(-170deg)",
          },
        },

        progress: {
          "0%": {
            clipPath:
              "polygon(50% 50%, 50% -21%, 50% -21%, 50% -21%, 50% -21%, 50% -21%); ",
          },
          "25%": {
            clipPath:
              "polygon(50% 50%, 50% -21%, 121% 50%, 121% 50%, 121% 50%, 121% 50%); ",
          },
          "50%": {
            clipPath:
              "polygon(50% 50%, 50% -21%, 121% 50%, 50% 121%, 50% 121%, 50% 121%); ",
          },
          "75%": {
            clipPath:
              "polygon(50% 50%, 50% -21%, 121% 50%, 50% 121%, -21% 50%, -21% 50%); ",
          },
          "100%": {
            clipPath:
              "polygon(50% 50%, 50% -21%, 121% 50%, 50% 121%, -21% 50%, 50% -21%); ",
          },
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-clip-path"),
    require("tailwindcss-animate"),
    require("tailwindcss-animated"),
  ],
};

export default config;
