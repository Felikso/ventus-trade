
const laptop = {
  borderRadius: "992px",
  small: {
    width: "80vw",
    height: "60vw",
    keyboard: "85vw"
  },
  big: {
    width: "500px",
    height: "400px",
    keyboard: "560px"
  },

}


const defColors = {
    white: "#fff",
    lightWhite: "#d4d4d01f",
    black: "#000",
    blue: "#0008FF",
    glassBg: "linear-gradient(164deg, rgba(0,145,209,0.5970763305322129) 0%, rgba(0,255,214,1) 100%)",
    heroBg: "linear-gradient(164deg, rgba(0,0,0,1) 0%, rgba(0,145,209,1) 100%)",
    sectionsBg: "linear-gradient(164deg, rgba(0,0,0,1) 0%, rgba(0,7,110,1) 100%)",
    blueDark: "",
    blueDark: "",
    /* Menu mobile */
    burgerOpen: "silver",
    burgerClose: "#0008FF",

    footerBg: "black",
    scrollBtn: "#0008FF",
    scrollBtnHover: "#fff"

}

const device = {
    s: "576px", /* < smartphones */
    m: "768px", /* < tablets */
    l: "992px", /* < laptops */
    xl: "1200px", /* < desktops */
    xxl: "1400px" /* < huge */
}

const transitions = {
    primary: "all .4s ease-in-out",
}

const fontSize = {
    xs: "8px",
    s: "10px",
    m: "12px",
    l: "14px",
    xl: "18px",
    xxl: "24px",
    footerIcon: "34px",
}

export const darkTheme = {
    body: "#121212",
    surface: "#1D1D1D",
    font: "#D1D1D1",
  
    colors: {
      primary: "black",
      secondary: "white",
      third: "#ff792b",
    },
    defColors,
    device,
    transitions,
    fontSize,
    laptop
  }
  
export const lightTheme = {
    body: "#FFFFFF",
    surface: "#EEF2F5",
    font: "#2A292E",
    colors: {
      primary: "green",
      secondary: "red",
      third: "blue",
    },
    defColors,
    device,
    transitions,
    fontSize,
    laptop
  }
  