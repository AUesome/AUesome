import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Banner from "../images/blog/11.png";
import Neurodiversity from "../images/blog/11_1.jpeg";
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
            <Heading>
              Eyes Can Offer More Insight on Diagnosis in Children
            </Heading>
            <p>
              April 2022 • written by <strong>Saisri Tangirala</strong> • edited
              by <strong>Anshul Gupta</strong>
            </p>
          </HeadingRow>
          <Image src={Banner} />
          <Text>
            <h1>Eyes and Diagnosis</h1>
            <p>
              Neurodiverse individuals have unique approaches to their
              environment, with the variations being situated on a spectrum.
              Because of this, it is important to determine the correct
              diagnosis so that a person can address their needs more
              comfortably. Autism and attention deficit hyperactivity disorder
              (ADHD), especially, have overlapping traits and need to be looked
              at closely to help people understand themselves.
            </p>
            <p>
              In a recent study conducted by researchers from Flinders
              University and the University of South Australia, it was found
              that signals detected in the retina of the eye could identify an
              individual either on the autism spectrum or if that person was
              experiencing ADHD. Researchers used a diagnostic test called the
              electroretinogram (ERG) which measures the retinal activity in
              response to light. When presented with a light stimulus, children
              with ADHD showed more electrical activity in the retina while
              children on the autism spectrum showed less electrical activity in
              the retina. These differences in electrical activity can pinpoint
              the specific nerves and signals which distinguish autism and ADHD,
              as the way the brain is structured can be determined by examining
              the eye.
            </p>
            <Image src={Neurodiversity} style={{}} />
            <p>
              Exploring different signals in response to light will pave the way
              for more discoveries in neurodiversity. This preliminary study of
              looking at electrical activity in the eyes hints at more
              innovative methods of offering insight on neurodevelopmental
              conditions. Such studies can extend beyond autism and ADHD to
              cover the neurodiversity community.
            </p>
            <p>
              Cognitive psychologist Fernando Marmolejo-Ramos from the
              University of South Australia says, "It is truly a case of
              watching this space; as it happens, the eyes could reveal all."
            </p>
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
