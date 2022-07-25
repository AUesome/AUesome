import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Banner from "../images/blog/12.png";
import Neurodiversity from "../images/blog/12_1.png";
import { PrimaryButton } from "components/misc/Buttons";
import { Link } from "react-router-dom";
const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const SectionHeading = tw.h2`text-4xl sm:text-4xl font-black tracking-wide text-center`;
const HeadingRow = tw.div`text-center mb-8`;
const Heading = tw(SectionHeading)`text-gray-900 mb-4 text-center`;
const Image = styled.img``;
const Text = styled.div`
  ${tw`text-lg  text-gray-800 mt-16`}
  p {
    ${tw`my-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>Advocating for Change: About AUesome Chapters</Heading>
            <p>
              July 2022 • written by <strong>Saisri Tangirala</strong> • edited
              by <strong>Anshul Gupta</strong>
            </p>
          </HeadingRow>
          <Image src={Banner} />
          <Text>
            <h1>Advocacy and Leadership</h1>
            <p>
              "Neurodiversity describes the idea that people experience and
              interact with the world around them in many different ways; there
              is no one 'right' way of thinking, learning, and behaving, and
              differences are not viewed as deficits" (Harvard Health). Raising
              awareness about autism, ADHD, and more is important to voice those
              needs and allow others to overcome the barriers in receiving
              therapy. Part of raising awareness rests in leading the community
              to advocate for neurodiversity.
            </p>
            <p>
              AUesome’s mission is to find optimal methods of at-home therapy to
              include all in making therapy more accessible and affordable.
              Establishing chapters throughout the globe serves this mission to
              spread the word about the autism spectrum. A chapter leader may do
              more than simply advocate for change and promote neurodiversity
              when they head an organization. Chapter leaders may help to grow
              the community by gathering like-minded people and teaching their
              colleagues, especially those in the neurodiverse community.
              Advocacy enthusiasts may gather the community to discuss the many
              aspects of the autism spectrum.
            </p>
            <Image src={Neurodiversity} />

            <p>
              Leading an AUesome chapter can aim to both educate and expand upon
              the field of neurodiversity. Chapter leaders can conduct
              discussions about autism and neurodiversity and generate content
              that explores further into features of neurodiversity other than
              the diagnosis. Those who are enthusiastic about making a
              difference in the world can move beyond their chapters and pursue
              their interests.
            </p>
            <p>
              Signing up as a chapter lead grants you resources to advocate for
              your community. Chapters are a <strong>self-paced</strong> journey
              for you to advocate for change and make an impact in your
              community. Learn more at{" "}
              <Link style={{ color: "blue" }} to="/chapters">
                auesome.co/chapters
              </Link>
              .
            </p>
            {/* <p>
              John Elder Robinson, author of{" "}
              <i>
                Be Different: Adventures of a Free-Range Aspergian with
                Practical Advice for Aspergians, Misfits, Families & Teachers
              </i>
              , has said “It does not matter what sixty-six percent of people do
              in any particular situation. All that matters is what you do.”
            </p> */}
          </Text>
          <ButtonContainer>
            <LoadMoreButton as="a" href="/blog">
              View All Blogs
            </LoadMoreButton>
          </ButtonContainer>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
