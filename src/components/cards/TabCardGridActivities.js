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
import SpinnerToy from "images/activities/spinner toy.jpg";
import TextureTray from "images/activities/texture tray.jpg";
import SensoryBrush from "images/activities/sensory brush.jpg";
import StoryFlashCards from "images/activities/story flash cards.jpg";
import BeanBag from "images/activities/bean bag.jpg";
import Threading from "images/activities/threading.jpg";
import FidgetToday from "images/activities/fidget toy.jpg";
import ClothespinMatching from "images/activities/clothespin matching.jpg";
import Clothespin from "images/activities/clothespin.JPG";
import ChainLinks from "images/activities/chainlinks.JPG";
import Spinner from "images/activities/spinner.JPG";
import PushBubble from "images/activities/bubble.JPG";
import Shapes from "images/activities/shapes.JPG";
import Flashcards from "images/activities/flashcards.jpeg";
import ZoobBlocks from "images/activities/zoob.jpeg";
import MatchMe from "images/activities/matchme.jpeg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Catalog of Activities",
  tabs = {
    All: [
      {
        imageSrc: Clothespin,
        title: "Clothespins",
        content:
          "Match clothespin onto board according to color or pull clothes pins off and put into a finished container!",
        price: "",
        rating: "Fine Motor Skills",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc: ChainLinks,
        title: "Chain Links",
        content:
          "Practice eye-hand coordination and fine motor control through our chain link activity!",
        price: "",
        rating: "Motor Skills",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc: Spinner,
        title: "Spinner",
        content:
          "Spin the top and catch it when you hear the word 'catch'! Helps with communication and impulse control.",
        price: "",
        rating: "Attention Skills",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc: PushBubble,
        title: "Push Bubble",
        content:
          "Sensory toy with pushable 'bubbles' on both sides. Helps with stress & anxiety relief and boosting retention.",
        price: "",
        rating: "Sensory Skills",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc: Shapes,
        title: "Shapes",
        content:
          "Match wooden shapes together to create structures and figures! Match them by size, shape, and color",
        price: "",
        rating: "Matching & Motor Skills",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc: Flashcards,
        title: "Emotion Flashcards",
        content:
          "Sort and match pictures of people based on the their emotion. Great for cognitive skills and imitation.",
        price: "",
        rating: "Receptive Communication",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc: ZoobBlocks,
        title: "Zoob Blocks",
        content:
          "Small snappable pieces that can be jointed together to build various shapes or structures.",
        price: "",
        rating: "Motor Skills",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc: MatchMe,
        title: "Match Me",
        content:
          "Choose pictures that are described from an array of different choices. Useful for learning common items.",
        price: "",
        rating: "Behavioral Skills",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc: SpinnerToy,
        title: "Spinner Toy",
        content:
          "Small soccer-ball spinner to relate toys to real-life items and practice spinning and maintaining balls!",
        price: "",
        rating: "Sensory Skills",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc: TextureTray,
        title: "Texture Tray",
        content:
          "This contains a tray of various textures to help identify and feel different types of materials.",
        price: "$2.99",
        rating: "Sensory Skills",
        reviews: "32",
        url: "#",
      },
      {
        imageSrc: StoryFlashCards,
        title: "Story Flashcards",
        content:
          "Form a short story with various flashcards with different pictures such as animals, people, & scenarios.",
        price: "$8.99",
        rating: "Communication Skills",
        reviews: "12",
        url: "#",
      },
      {
        imageSrc: SensoryBrush,
        title: "Sensory Brush",
        content:
          "Helps desensitize Sensory Processing Disorder, enhancing self-regulation and decreasing anxiety!",
        price: "$7.99",
        rating: "Sensory Skills",
        reviews: "89",
        url: "#",
      },
      {
        imageSrc: BeanBag,
        title: "Bean Bag",
        content:
          "Great practice for tossing and catching items using hand-eye coordination and balance.",
        price: "$7.99",
        rating: "Cognitive Skills",
        reviews: "19",
        url: "#",
      },
      {
        imageSrc: Threading,
        title: "Threading",
        content:
          "Lace string through holes! Helps with real-life skills such as accurately lacing shoes and threading clothes.",
        // price: "",
        rating: "Motor Skills",
        // reviews: "61",
        // url: "#",
      },
      {
        imageSrc: FidgetToday,
        title: "Fidget Toy",
        content:
          "Rubber fidget toy with small threads to bend and play with! Diverse amount of stretch and texture levels.",
        price: "$3.99",
        rating: "Sensory Skills",
        reviews: "95",
        url: "#",
      },
      {
        imageSrc: ClothespinMatching,
        title: "Clothespin Matching",
        content:
          "Match clothespin onto board according to color or pull clothes pins off and put into a finished container!",
        price: "$3.99",
        rating: "Motor Skills",
        reviews: "26",
        url: "#",
      },
    ],
    // Main: getRandomCards(),
    // Soup: getRandomCards(),
    // Desserts: getRandomCards(),
  },
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <PrimaryButtonBase as="a" href="/signup">
            Sign Up for a Kit Here!
          </PrimaryButtonBase>

          {/* <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
          </TabsControl> */}
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  href="/signup"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>
                        {/* <StarIcon /> */}
                        {card.rating}
                      </CardRating>
                      {/* <CardReview>({card.reviews})</CardReview> */}
                    </CardRatingContainer>
                    {/* <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto",
                        },
                        rest: {
                          opacity: 0,
                          height: 0,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton as="a" href="/signup">
                        Sign Up
                      </CardButton>
                    </CardHoverOverlay> */}
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    {/* <CardPrice>{card.price}</CardPrice> */}
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
