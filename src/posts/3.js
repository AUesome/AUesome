import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Banner from "../images/blog/allResized/3.png";
import Children from "../images/blog/3_1.jpeg";
import Children2 from "../images/blog/3_2.jpeg";
import { PrimaryButton } from "components/misc/Buttons";
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
            <Heading>Improving Visual Motor Skills with Visual Support</Heading>
            <p>
              October 2021 • written by <strong>Saisri Tangirala</strong> •
              edited by <strong>Anshul Gupta</strong>
            </p>
          </HeadingRow>
          <Image src={Banner} />
          <Text>
            <h1>Visual Support</h1>
            <p>
              Out of the four learning styles (visual, auditory, kinesthetic,
              and reading/writing), children on the autism spectrum often find
              themselves to learn best by visuals. By applying visual support,
              children will be able to improve their visual motor skills.
            </p>
            <p>
              Using visual support allows children on the autism spectrum to
              process information by constructing mental images. Children are
              better able to follow directions and identify tasks using visual
              support, which includes images, objects, and/or text. Seeing
              information rather than saying it helps them retain knowledge and
              improve sensory perception. Children can also utilize visual
              support as tools to stay organized and follow their daily routine.
              Visual support is recommended to both parents and healthcare
              professionals to help children enhance their visual thinking
              skills.
            </p>
            <Image src={Children} />
            <p>
              There are a variety of ways for parents to utilize visual support,
              which can either be made at home or accessed on programs and apps.
              For example, parents can take photos or cut out print media to
              arrange visual support appropriate to their child’s needs. Parents
              and children may then use those visual strategies, such as visual
              timetables and token boards, to identify each activity with a
              certain picture and show sequential steps. Using such visual
              strategies will allow for children to improve their visual motor
              skills and thereby coordinate movement, improve perception, and
              develop visual processing skills.
            </p>
            <p>
              For further ideas on improving visual motor skills, AUesome has
              included a few activities that incorporate visual support.
            </p>
            <o1>
              <li>Visual Schedules</li>
              <li>Token Board</li>
              <li>Memory games</li>
              <li>Picture games</li>
              <li>Sensory activities</li>
              <li>Matching shapes</li>
              <li>Puzzles</li>
              <li>Hidden picture games</li>
              <li>Building blocks</li>
            </o1>
            <Image src={Children2} />
            <p>
              A recent study conducted by UC Davis Health at the UC Davis MIND
              Institute has found that an unusual visual inspection of objects
              can predict whether an infant will be identified on the autism
              spectrum. While unusual visual inspection of objects was
              indicative of autism, it was never predictive of it in infants as
              young as nine months. The study finds that such unusual visual
              inspections may indicate autism early in life than the social
              communication symptoms, which are considered the most often. Sally
              Ozonoff, professor in the Department of Psychiatry and Behavioral
              Sciences and the MIND Institute at UC Davis and principal
              investigator of the study, said “Findings from our study suggest
              that unusual visual exploration of objects may be a valuable
              addition to early screening and diagnostic tools for ASD.”{" "}
            </p>{" "}
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
