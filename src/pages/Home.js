import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton";
import Footer from "components/footers/SimpleFiveColumn";
import feature1 from "images/features/1.png";
import feature2 from "images/features/2.png";
import feature3 from "images/3.png";
import Blog from "components/blogs/PopularAndRecentBlogPosts";
import Advocacy from "components/cards/PortfolioTwoCardsWithImage";
import Stats from "components/features/ThreeColCenteredStatsPrimaryBackground";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Hero />
      <MainFeature />
      <Advocacy />
      {/* <Stats /> */}

      <MainFeature1
        subheading={<Subheading>Therapy Kit</Subheading>}
        heading="Customized at-home therapy kits"
        description="Customizable at-home therapy kits that help children with special needs improve communication, sensory, and motor skills with various activities. To help us fund our kits, be sure to support us on GoFundMe! Order an AUesome kit by signing up below."
        buttonRounded={false}
        primaryButtonText="Sign Up!"
        primaryButtonUrl="/signup"
        imageSrc={feature1}
      />
      <MainFeature1
        subheading={<Subheading>Digital Integration</Subheading>}
        heading="Walk-through guidance videos"
        description="Use our detailed, interactive instructional videos to help you with each therapy activities to make at-home therapy as enjoyable, creative, and effective as possible. Our instructional videos will give you ideas for activities to do with the items in our kit."
        buttonRounded={false}
        primaryButtonText="Dashboard"
        imageSrc={feature2}
        primaryButtonUrl="https://dashboard.auesome.co"
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>Digital App</Subheading>}
        heading="AUesome mobile application"
        description="Coming soon! Our app includes a preliminary diagnosis and survey, games that provide cognitive training for your child, and instructional videos to help guide you while you work on activities in the kit. Support our app's development on our GoFundMe page!"
        buttonRounded={false}
        primaryButtonText="GoFundMe"
        primaryButtonUrl="https://www.gofundme.com/f/auesome-athome-therapy-for-children-with-autism"
        imageSrc={feature3}
      />
      <Blog />
      <Footer />
    </AnimationRevealPage>
  );
};
