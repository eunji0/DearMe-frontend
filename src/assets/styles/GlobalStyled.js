import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import RobotoWoff from "../../assets/fonts/Roboto.woff";
import RobotoWoff2 from "../../assets/fonts/Roboto.woff2";
import RobotoTtf from "../../assets/fonts/Roboto.ttf";

export default createGlobalStyle`
  ${reset}
    * {
      box-sizing : border-box;
    }
    body {
      font-family: "Roboto";
      src: url(${RobotoWoff}) format("woff"),
          url(${RobotoWoff2}) format("woff2"),
          url(${RobotoTtf}) format("truetype");
    }
`;
