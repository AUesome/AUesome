import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Feature from "components/features/TwoColWithTwoFeaturesAndButtons";
import MainFeature1 from "components/features/OneWideCol";
import FAQ from "components/faqs/SingleCol";
const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <Feature />
      <MainFeature1 />
      <FAQ />
      <Footer />
    </AnimationRevealPage>
  );
};
