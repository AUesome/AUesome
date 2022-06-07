import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import MainFeature1 from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
import Sree from "images/profiles/Sree.png";
import About from "components/testimonials/TwoColumnWithImageAndProfilePictureReview";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import Mission from "components/features/DashedBorderSixFeatures";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import Advocacy from "components/cards/PortfolioTwoCardsWithImage";
import Activities from "components/cards/ThreeColSlider";
import MoreActivities from "components/cards/TabCardGridActivities";
import Clothespin from "images/activities/clothespin.JPG";
import ChainLinks from "images/activities/chainlinks.JPG";
import Spinner from "images/activities/spinner.JPG";
import PushBubble from "images/activities/bubble.JPG";
import Shapes from "images/activities/shapes.JPG";
import Flashcards from "images/activities/flashcards.jpeg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const Gap = tw.div`pt-16 lg:pt-20 pb-8 lg:pb-12`;
const Gap2 = tw.div`pb-8 lg:pb-12`;
const Gap3 = tw.div`pb-16 lg:pb-20`;

const cards = {
  card1: [
    {
      imageSrc: Clothespin,
      title: "Clothespins",
      description:
        "Match clothespin onto board according to color or pull clothes pins off and put into a finished container!",
      locationText: "Fine motor skills & Cognitive Skills",
      pricingText: "USD 39/Day",
      rating: "4.8",
    },
    {
      imageSrc: ChainLinks,
      title: "Chain Links",
      description:
        "Practice eye-hand coordination and fine motor control through our chain link activity!",
      locationText: "Ibiza, Spain",
      pricingText: "USD 50/Day",
      rating: 4.9,
    },
    {
      imageSrc: Spinner,
      title: "Spinner",
      description: "Spin the top and catch it when you hear the word 'catch'!",
      locationText: "Palo Alto, CA",
      pricingText: "USD 19/Day",
      rating: "5.0",
    },
  ],
  card2: [
    {
      imageSrc: PushBubble,
      title: "Push Bubble",
      description: "Sensory toy with pushable 'bubbles' on both sides.",
      locationText: "Rome, Italy",
      pricingText: "USD 39/Day",
      rating: "4.8",
    },
    {
      imageSrc: Shapes,
      title: "Shapes",
      description:
        "Match wooden shapes together to create structures and figures! Match them by size, shape, and color to practice multiple skills.",
      locationText: "Ibiza, Spain",
      pricingText: "USD 50/Day",
      rating: 4.9,
    },
    {
      imageSrc: Flashcards,
      title: "Flashcards",
      description:
        "Sort pictures of children by their emotional experssion. Receptive Communication, Great for cognitive Skills and imitation.",
      locationText: "Communication and Social Skills",
      pricingText: "USD 19/Day",
      rating: "5.0",
    },
  ],
};

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <MoreActivities/>
      {/* <Gap>
        <Activities cards={cards.card1} />
      </Gap>
      <Activities cards={cards.card2} heading="" />
      <Gap2 />
      <Gap3 /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
