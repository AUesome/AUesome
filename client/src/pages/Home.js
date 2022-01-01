import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Features3 from "components/features/VerticalWithAlternateImageAndText.js";
import MainFeature3 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import Testimonial2 from "components/testimonials/SimplePrimaryBackground.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Hero />
      <MainFeature />
      <Testimonial2 />
      <MainFeature3 />
      <Features3 />
      <Footer />
    </AnimationRevealPage>
  );
};
