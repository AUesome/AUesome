import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Activities from "components/cards/TabCardGridActivities";
import Galley from "components/cards/ImageGallery";
const Subheading = tw.span`uppercase tracking-wider text-sm`;
const Gap = tw.div`pt-16 lg:pt-20 pb-8 lg:pb-12`;
const Gap2 = tw.div`pb-8 lg:pb-12`;
const Gap3 = tw.div`pb-16 lg:pb-20`;

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <Activities />
      <Galley />
      <Footer />
    </AnimationRevealPage>
  );
};
