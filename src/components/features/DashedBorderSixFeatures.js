import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
// import { ReactComponent as Heart } from "./heart.svg";
// import { ReactComponent as Heart } from "feather-icons/dist/icons/briefcase.svg";
import Heart from "../../images/heart.svg";
import Warning from "../../images/alert-circle.svg";
import Sun from "../../images/sun.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`max-w-screen-xl mx-auto pt-8 pb-16`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg my-1`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: Heart,
      title: "Mission",
      description:
        "AUesome's mission is to make therapy accessible and affordable. Our kits, instructional videos, and app simplify the at-home therapy process for parents of children with special needs. We hope to eliminate the physical and financial barriers to receiving therapy.",
    },
    {
      imageSrc: Warning,
      title: "The Problem",
      description:
        "Despite 1 in 44 children having autism spectrum disorder in the US, 50% of those with severe ASD only have access to school-based treatment and 17% have no access to any treatment whatsoever, with these numbers growing drastically. (CDC)",
    },
    {
      imageSrc: Sun,
      title: "Inspiration",
      description:
        "From our experiences working with individuals with special needs in the neurodiverse community and receiving therapy, we recognized the inaccessibility, lack of continuation, and low parental involvement for autism therapy services.",
    },
    // { imageSrc: ReliableIconImage, title: "Product Outreach" },
    // { imageSrc: FastIconImage, title: "PR Campaign" },
    // { imageSrc: SimpleIconImage, title: "Product Expansion" }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        {/* <Heading>
          Our Professional <span tw="text-primary-500">Services</span>
        </Heading> */}
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description ||
                    "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
