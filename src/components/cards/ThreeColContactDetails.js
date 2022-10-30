import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-8`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-0 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/4 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-2 tracking-wide font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-0 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({
  cards = null,
  heading = "Chapters",
  subheading = "Locations",
  description = "Check out existing AUesome Chapters, spanning the nation and globe while advocating for neurodiversity and change.",
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) title - the title of the card
   *  2) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      title: "Zaporizhzhia, Ukraine",
      description: "Fedor G.",
    },
    {
      title: "Fremont, CA",
      description: "Anya S.",
    },
    {
      title: "Taipei, Taiwan",
      description: "Richard C.",
    },
    {
      title: "Alpharetta, GA",
      description: "Saisri T.",
    },
    {
      title: "Irvine, CA",
      description: "Katherine H.",
    },
    {
      title: "Busan, South Korea",
      description: "Youri L.",
    },
    {
      title: "Los Altos, CA",
      description: "Isha M.",
    },
    {
      title: "Hsinchu, Taiwan",
      description: "Lulu C.",
    },
    {
      title: "Evergreen, CA",
      description: "Jonathan D.",
    },
    {
      title: "Halton, Canada",
      description: "Lauren P.",
    },
    {
      title: "Wadsworth, IL",
      description: "Shria H.",
    },
    {
      title: "Los Angeles, CA",
      description: "Andrew K.",
    },
    {
      title: "Campbell, CA",
      description: "Annie B.",
    },
    {
      title: "Overland Park, KS",
      description: "Kavya P.",
    },
    {
      title: "Foster City, CA",
      description: "Anya G.",
    },
    {
      title: "Cleveland, OH",
      description: "Naisha C.",
    },
    {
      title: "Los Gatos, CA",
      description: "Anjani N.",
    },
    {
      title: "Palo Alto, CA",
      description: "Isabella H.",
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description ||
                    "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
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
