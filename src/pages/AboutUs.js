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
const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <About />
      <Mission />
      {/* <div style={{ paddingTop: "3rem" }}>
        <TeamCardGrid
          heading="Board of Advisors"
          subheading=""
          description="Our advisors help us drive decisions with their industry experience and knowledge"
          cards={[
            {
              imageSrc:
                "https://media.wired.com/photos/5ed67e71b818b223fd84195f/1:1/w_1600,h_1600,c_limit/Blackout-hashtag-activism.jpg",
              name: "Bridgette Leslie",
            },
            {
              imageSrc: Sree,
              name: "Dr. Sreeram M",
              biography:
                "Sree is a physician transcending in the worlds of healthcare, business, and technology through leveraging technology to make healthcare accessible and affordable to all. He is an evangelist for customer-focus and mission-driven teams.",
            },
            {
              imageSrc:
                "https://media.wired.com/photos/5ed67e71b818b223fd84195f/1:1/w_1600,h_1600,c_limit/Blackout-hashtag-activism.jpg",
              name: "",
            },
          ]}
        />
      </div> */}
      <div style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>
        <TeamCardGrid />
      </div>
      <Footer />

      {/* <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
        ]}
        linkText=""
      /> */}
    </AnimationRevealPage>
  );
};
