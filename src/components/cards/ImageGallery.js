import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

import Image4 from "images/activities/IMG_2091.JPG";
import Image5 from "images/activities/IMG_2199.JPG";
import Image6 from "images/activities/IMG_2205.JPG";
import Image7 from "images/activities/IMG_2170.JPG";
import Image8 from "images/activities/IMG_2141.JPG";
import Image9 from "images/activities/IMG_2237.JPG";
import Image10 from "images/activities/IMG_2139.JPG";
import Image11 from "images/activities/IMG_2302.JPG";
import Image12 from "images/activities/IMG_2138.JPG";
import Image13 from "images/activities/IMG_2136.JPG";
import Image14 from "images/activities/IMG_2154.JPG";
import Image15 from "images/activities/IMG_2137.JPG";
import Image16 from "images/activities/IMG_2176.JPG";
import Image17 from "images/activities/IMG_2264.JPG";
import Image18 from "images/activities/IMG_2202.JPG";
import Image19 from "images/activities/IMG_2195.JPG";
import Image20 from "images/activities/IMG_2209.JPG";
import Image21 from "images/activities/IMG_2231.JPG";
import Image22 from "images/activities/IMG_2273.JPG";
import Image23 from "images/activities/IMG_2300.JPG";
import Image24 from "images/activities/IMG_2326.JPG";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row mb-10`;
const Header = tw(SectionHeading)``;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({ heading = "More Images", tabs = {} }) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
        </HeaderRow>
        <>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  }\n\n.header {\n  text-align: center;\n  padding: 32px;\n}\n\n.row {\n  display: -ms-flexbox; /* IE10 */\n  display: flex;\n  -ms-flex-wrap: wrap; /* IE10 */\n  flex-wrap: wrap;\n  padding: 0 4px;\n}\n\n/* Create four equal columns that sits next to each other */\n.column {\n  -ms-flex: 25%; /* IE10 */\n  flex: 25%;\n  max-width: 25%;\n  padding: 0 4px;\n}\n\n.column img {\n border-radius: 3px; \n margin-top: 8px;\n  vertical-align: middle;\n  width: 100%;\n}\n\n/* Responsive layout - makes a two column-layout instead of four columns */\n@media screen and (max-width: 800px) {\n  .column {\n    -ms-flex: 50%;\n    flex: 50%;\n    max-width: 50%;\n  }\n}\n\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .column {\n    -ms-flex: 100%;\n    flex: 100%;\n    max-width: 100%;\n  }\n}\n",
            }}
          />
          <div className="row">
            <div className="column">
              <img src={Image4} style={{ width: "100%" }} />
              <img src={Image5} style={{ width: "100%" }} />
              <img src={Image6} style={{ width: "100%" }} />
              <img src={Image7} style={{ width: "100%" }} />
              <img src={Image8} style={{ width: "100%" }} />
            </div>
            <div className="column">
              <img src={Image11} style={{ width: "100%" }} />
              <img src={Image12} style={{ width: "100%" }} />
              <img src={Image20} style={{ width: "100%" }} />
              <img src={Image14} style={{ width: "100%" }} />
              <img src={Image15} style={{ width: "100%" }} />
            </div>
            <div className="column">
              <img src={Image18} style={{ width: "100%" }} />
              <img src={Image19} style={{ width: "100%" }} />
              <img src={Image24} style={{ width: "100%" }} />
              <img src={Image21} style={{ width: "100%" }} />
              <img src={Image22} style={{ width: "100%" }} />
            </div>
            <div className="column">
              <img src={Image16} style={{ width: "100%" }} />
              <img src={Image17} style={{ width: "100%" }} />
              <img src={Image9} style={{ width: "100%" }} />
              <img src={Image10} style={{ width: "100%" }} />
              <img src={Image23} style={{ width: "100%" }} />
            </div>
          </div>
        </>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
