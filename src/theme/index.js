import {
    cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
  } from 'material-ui/styles/colors';
  import { fade } from 'material-ui/utils/colorManipulator';
  import spacing from 'material-ui/styles/spacing';
  import config from '../config';
  
const { style } = config;

  export default {
      spacing: spacing,
      fontFamily: 'helvetica, arial, sans-serif',
      palette: {
        primary1Color: style.primary1Color,
        primary2Color: style.primary2Color,
        primary3Color: style.primary3Color,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: style.canvasColor,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
      },
  };