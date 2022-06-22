import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Banner from "../images/blog/allResized/5.png";
import Children from "../images/blog/5_1.jpeg";
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
              Looking into Social Interactions for Children with Autism
            </Heading>
            <p>
              December 2021 • written by <strong>Saisri Tangirala</strong> •
              edited by <strong>Anshul Gupta</strong>
            </p>
          </HeadingRow>
          <Image src={Banner} />
          <Text>
            <h1>Social Interaction</h1>

            <p>
              Children on the autism spectrum may interact with their
              surroundings in various manners, such as not being as interested
              in certain activities. Therefore, they may have numerous
              approaches to developing social skills and relationships. To help
              children practice different social skills, parents and therapists
              can provide support and make them comfortable with participating
              in the community.
            </p>
            <p>
              People have a greater understanding of one another through social
              interactions. Examples of interactions include communications,
              managing emotions, and working together with others. These
              interactions can occur naturally through frequent contacts and can
              allow people to know how to behave in a variety of settings.
              Children on the autism spectrum, however, may find these
              interactions to be different than expected. These social skills
              might be unfamiliar to persons on the autism spectrum, but they
              can be learned and developed through skill-building methods.
            </p>
            <Image src={Children} />
            <p>
              Just like any other skill, children can learn social skills and
              expand them with practice. This may occur in therapy, which can
              greatly benefit children in encouraging good communication.
              Therapists, as well as parents, will be able to teach children
              many social skills and help them practice in different settings.
              Children will then get to understand and interpret the ideal
              behaviors. Further, talking to children along with teaching them
              may also help break down social interactions into simpler
              components. Working to help improve social skills in children on
              the autism spectrum can allow them to interact comfortably with
              their surroundings.
            </p>
            <p>
              While social interactions can foster better relations between
              people, they can do much more on a deeper level. Underdoing
              interactions allows the brain to develop cognition, which refers
              to the development of a child’s memory, language, and
              problem-solving skills. Cognitive development allows for children
              to comprehend their environment and form relationships. The
              interconnection between social interactions and cognitive
              development thus allows children to stay engaged in the community.
            </p>
            <p>
              Haley Moss, an attorney and an individual on the autism spectrum,
              has voiced a thought common to those on the spectrum: “I might hit
              developmental and societal milestones in a different order than my
              peers, but I am able to accomplish these small victories on my own
              time.”
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
