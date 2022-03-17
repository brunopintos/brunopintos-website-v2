import Color from "./color";

const smallFont = 14;
const mediumFont = 16;
const largeFont = 18;

const typography = {
  fonts: {
    smallFont,
    mediumFont,
    largeFont,
  },
  styles: {
    modalTitle: {
      color: Color.white,
      marginBottom: 20,
      fontFamily: "'BenchNine', sans-serif",
      fontSize: 56,
    },
    modalParagraph: {
      color: Color.white,
      fontSize: 18,
    },
  },
};

export default typography;
