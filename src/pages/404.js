import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import Footer from "components/footers/SimpleFiveColumn";
import Kids from "components/misc/Kids.js";

import Testimonial from "components/testimonials/ThreeColumnWithProfileImage";
const testimonials = {
  testimonials1: [
    {
      quote:
        "As a family be believe your kits are a great variety and were both educational and fun. I feel that these are so helpful for my son. They helped him stay engaged and was excited to play with the fun objects and create new things with the chains and shapes.",
      customerName: "Angela Gallegos",
    },
    {
      quote:
        "Autism spectrum is a puzzle!! Every piece is very important to complete the puzzle.   Love all your pieces separately  which with some guidance can form an incredibly beautiful picture in the form of Ausome 😀",
      customerName: "Balakrupa Mukund",
    },
    {
      quote:
        "It was very thought out and did well focusing on all the things cognitively and occupationally. My daughter really enjoys matching, and puzzle-like things so the threading was fun. She likes hands-on and brain-stimulating games and toys.",
      customerName: "Leah H.",
    },
  ],
  testimonials2: [
    {
      quote:
        "My daughter liked the spinner and blocks best because they were fun. I thought the flashcards were great for an autistic student and his/her ability to learn how to identify feelings.",
      customerName: "Mrs. Sarah Williams",
    },
    {
      quote:
        "It's a great sensory box that my son enjoyed getting and continues to play with",
      customerName: "Rebecca Kay",
    },
    {
      quote:
        "We loved it! My son was especially excited about the push bubble!!",
      customerName: "Katy Vanderkamp",
    },
  ],
  testimonials3: [
    {
      quote: "My son loves his kit and that makes me happy and satisfied.",
      customerName: "E.K.",
    },
    {
      quote:
        "My daughter really enjoys matching, and puzzle like things so the threading was fun. She likes hands on and brain stimulating games [and] toys.",
      customerName: "Lea",
    },
    {
      quote: "A good way to start, especially in this hard time.",
      customerName: "Bo",
    },
  ],
};
const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <div
        style={{
          position: "absolute",
          width: "100w",
          height: "",
          top: "300px",
          left: "43%",
          transform: "translate(50%,50%)",
        }}
      >
        Page Not Found
      </div>
    </AnimationRevealPage>
  );
};
