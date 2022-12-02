import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Banner from "../images/blog/14.png";
import Neurodiversity from "../images/blog/14_2.png";
import { PrimaryButton } from "components/misc/Buttons";
import { Link } from "react-router-dom";
const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const SectionHeading = tw.h2`text-4xl sm:text-4xl font-black tracking-wide text-center`;
const HeadingRow = tw.div`text-center mb-8`;
const Heading = tw(SectionHeading)`text-gray-900 mb-4 text-center`;
const ImgWrap = styled.div`my-10`;
const Image = styled.img`w-full h-auto`;
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
            <Heading>The Effectiveness of Expressive Music Therapy</Heading>
            <p>
              September 2022 • written by <strong>Saisri Tangirala</strong> •
              edited by <strong>Anshul Gupta</strong>
            </p>
          </HeadingRow>
          <Image src={Banner} />
          <Text>
            <h1>Music Therapy</h1>
            <p>
              For many, music has the ability to calm and induce positive
              emotions. Beyond enjoyment, music can also help as a therapeutic
              treatment. Music therapy is one of many therapies designed to
              encourage children on the spectrum to be comfortable in their
              surroundings. Singing, playing instruments, and even dancing can
              help further develop integral communicative and expressive skills.
            </p>
            <p>
              Common practices in music therapy may include singing songs,
              listening to music, learning to play an instrument along with
              composing music. These methods allow those on the spectrum to
              socially interact through playing or listening to music. Moreover,
              many people can benefit from having the opportunity to work on
              motor skills by being more aware of body coordination – all while
              reducing anxiety.
            </p>

            <p>
              While most can benefit from music, music therapy takes that
              enjoyment a step further to incorporate beneficial practices with
              the help of treatments. Like most other therapists, music
              therapists are specialized licensed professionals and may create
              personalized plans or conduct group sessions.
            </p>
            <ImgWrap>
              <Image src={Neurodiversity} />
            </ImgWrap>
            <p>
              These plans can integrate behavioral, sensory integration, and
              creative approaches with music therapy. For example, therapists
              and parents can work with children to observe their behavior when
              playing different types of music, while at the same time
              experimenting with what type of music children prefer.
            </p>
            <p>
              A study conducted in 2018 determined that eight to twelve weeks of
              music intervention had the potential to improve communication
              skills due to bettering the intrinsic brain connectivity in
              school-age children on the spectrum. The creative methods that one
              can apply to therapy are endless, with each one providing a
              personalized intervention aimed to further skills.
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
