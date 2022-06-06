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
import feature3 from "images/features/3.png";
import Blog from "components/blogs/PopularAndRecentBlogPosts";
import Mission from "components/testimonials/TwoColumnWithImageAndRating";
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
      <Hero />
      <MainFeature />
      <div style={{ paddingTop: "6rem" }}>
        <Testimonial testimonials={testimonials.testimonials1} />
      </div>
      <Testimonial
        testimonials={testimonials.testimonials2}
        heading=""
        subheading=""
      />
      <div style={{ paddingBottom: "6rem" }}>
        <Testimonial
          testimonials={testimonials.testimonials3}
          heading=""
          subheading=""
        />
      </div>
      <MainFeature1
        subheading={<Subheading>Therapy Kit</Subheading>}
        heading="Custom at-home therapy kits"
        description="Customizable at-home therapy kits that help children with special needs improve communication, sensory, and motor skills with various activities. To help us fund our kits, be sure to support us on GoFundMe! Order an AUesome kit by signing up below."
        buttonRounded={false}
        primaryButtonText="Sign Up!"
        imageSrc={feature1}
      />
      <MainFeature1
        subheading={<Subheading>Digital Integration</Subheading>}
        heading="Walk-through guidance videos"
        description="Use our detailed, interactive instructional videos to help you with each therapy activities to make at-home therapy as enjoyable, creative, and effective as possible. Our instructional videos will give you ideas for activities to do with the items in our kit."
        buttonRounded={false}
        primaryButtonText="Dashboard"
        imageSrc={feature2}
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>Accompanying App</Subheading>}
        heading="AUesome mobile digital application"
        description="Coming soon! Our app includes a preliminary diagnosis and survey, games that provide cognitive training for your child, and instructional videos to help guide you while you work on activities in the kit. Support our app's development on our GoFundMe page!"
        buttonRounded={false}
        primaryButtonText="GoFundMe"
        imageSrc={feature3}
      />
      <Mission />
      <Blog />
      <Footer />
    </AnimationRevealPage>
  );
};
