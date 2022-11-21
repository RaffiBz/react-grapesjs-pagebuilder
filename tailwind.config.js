function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "1xl": "1440px",
      // => @media (min-width: 1440px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      fontFamily: {
        mainFont: ["Product"],
        secondaryFont: ["Inter"],
      },
      colors: {
        primary: "#43B6FA",
        primaryOpacity: "rgba(67, 182, 250, 0.3)",
        secondary: "#4A7EF6",
        darkBlue: "#1B2767",
        subtitle: "#42505C",
        titleBlack: "#11102A",
        introBg: "#F5F5F5",
        sideBarBackground: "#FDFDFD",
        borderGray: "#E9EDF5",
        grayBlue: "#6E7CA7",
        bgGray: "#E9E9EA",
        bgGraySecondary: "#F9FCFF",
        gridBg: "rgba(244, 247, 252, 0.75)",
        gridSecondBg: "#F9FAFC",
        gridGrayBg: "#F9FAFC",
        gridHoverBg: "#F2F5FA",
        lightGray: "#CECECE",
        lightGrayOpacity: "rgba(206, 206, 206, 0.1)",
        lightGrayBgOpacity: "rgba(206, 206, 206, 0.2)",
        buttonGray: "rgba(206, 206, 206, 0.5)",
        bgGrayopacity: "rgba(206, 206, 206, 0.15)",
        borderGrayOpacity: "rgba(191, 191, 191, 0.5)",
        blackOpacity: "rgba(0, 0, 0, 0.5)",
        hoverGray: "#C4C4C4",
        mediumGray: "#A3A3A3",
        secondaryLightGray: "#BFBFBF",
        activePage: "#171C26",
        grayPagination: "#687182",
        errorRed: "#BE261D",
        modalBg: "rgba(0, 0, 0, 0.15)",
        activeBlue: "#2264E6",
        tableHead: "#464F60",
        dropdwonFocused: "#BAE5FF",
        statusGray: "#F0F1FA",
        statusGrayDark: "#E9EDF5",
        statusBlue: "#4F5AED",
        statusGreen: "#E1FCEF",
        statusGreenDark: "#14804A",
        statusGreenGray: "#5A6376",
        statusOrange: "#FCF2E6",
        statusOrangeDark: "#AA5B00",
        statusRed: "#FAF0F3",
        statusRedDark: "#D12953",
        notificationRedBg: "#FCE8E8",
        notificationGreenBg: "#CCF0CC",
        buttonGreenBg: "#56CC56",
        buttonHover: "#80CBF6",
        thinGray: "#A3AED0",
        lightBlue: "#DFF0FB",
        lightBlueSecondary: "#F0F9FF",
        lightOrange: "#FFF4F4",
        lightGrayBlue: "rgba(67, 182, 250, 0.08);",
        whiteGray: "#FAFAFA",
        lightGreen: "rgba(67, 250, 239, 0.08);",
        bgLightBlue: "#C9E8FC",
        barGraybg: "#F1F1F1",
        pinkOrange: "#F5866A",
        lightGrayBg: "#FBFBFB",
        barOrange: "#FB896B",
        bgBlueOpacity: "rgba(206, 206, 206, 0.2)",
        darkRed: "#F24646",
        redOpacity: "rgba(251, 137, 107, 0.3)",
      },
      fontSize: {
        //11px
        xxs: "0.688rem",
        //12px
        xs: "0.75rem",
        //14px
        sm: "0.875rem",
        //16px
        base: "1rem",
        // 18px
        lg: "1.125rem",
        //20px
        xl: "1.25rem",
        //24px
        "2xl": "1.5rem",
        //32px
        "3xl": "2rem",
        //45px
        "4xl": "2.813rem",
        //64px
        "5xl": "4rem",
        //84px
        "6xl": "5.25rem",
      },
      boxShadow: {
        pageButton: "0px 0px 0px 1px rgba(70, 79, 96, 0.24)",
        infoPopup: "0px 0px 15px rgba(0, 0, 0, 0.1)",
        planCard: "0px 4px 15px rgba(0, 0, 0, 0.08)",
        brandCard: "0px 0px 15px rgba(0, 0, 0, 0.12)",
        smallCard: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        mediumCard: "0px 0px 30px rgba(0, 0, 0, 0.05)",
        profileCard: "0px 4px 30px rgba(0, 0, 0, 0.1)",
        dropDown: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        tierRounded: "0px 1.625px 3.25px rgba(0, 0, 0, 0.15)",
        popupDetail: "0px 0px 16.6379px rgba(0, 0, 0, 0.1)",
        checkbox: [
          "0px 1px 1px rgba(0, 0, 0, 0.1)",
          "0px 0px 0px 1px rgba(70, 79, 96, 0.16)",
          "0px 2px 5px rgba(89, 96, 120, 0.1)",
        ],
        actionsShadow: [
          "0px 0px 0px 1px rgba(152, 161, 179, 0.1)",
          "0px 15px 35px -5px rgba(17, 24, 38, 0.2)",
          "0px 5px 15px rgba(0, 0, 0, 0.08)",
        ],
        searchBoxShadow: [
          "0px 1px 2px rgba(0, 0, 0, 0.06)",
          "0px 0px 0px 1px rgba(104, 113, 130, 0.16)",
        ],
      },
      dropShadow: {
        checkbox: [
          "0 2px 5px rgba(89, 96, 120, 0.1)",
          "0px 0px 0px 1px rgba(70, 79, 96, 0.16)",
        ],
        sideBar: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        cardShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.12)",
        cardShadowSm: "0px 0px 30px 0px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "checked-bg": "url('/public/images/icons/general/checked.svg')",
        "checked-bg-hover":
          "url('/public/images/icons/general/check-hover.svg')",
        "date-bg": "url('/public/images/icons/grid-table/calendar.svg')",
        "dashboard-bg": "url('/public/images/round-stroke-bg.png')",
        "picker-bg": "url('/public/images/icons/general/color-picker.svg')",
      },
    },
    typography: {
      DEFAULT: {
        css: {
          h1: {
            lineHeight: "24px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#404041",
          },
          h2: {
            lineHeight: "24px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#404041",
          },
          h3: {
            lineHeight: "24px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#404041",
          },
          h4: {
            lineHeight: "24px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#404041",
          },
          p: {
            lineHeight: "18px",
            fontSize: "16px",
            color: "#404041",
            fontWeight: "400",
          },
          span: {
            lineHeight: "18px",
            fontSize: "16px",
            color: "#404041",
            fontWeight: "400",
          },
          ol: {
            listStyleType: "english",
            marginLeft: "30px",
            fontWeight: "400",
          },
          ul: {
            listStyleType: "disc",
            marginLeft: "30px",
            fontWeight: "400",
          },
          a: {
            color: "#404041",
            lineHeight: "18px",
            fontSize: "16px",
            fontWeight: "400",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
