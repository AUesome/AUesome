import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Banner from "../images/blog/allResized/6.png";
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
    ${tw`mt-4 leading-loose`}
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
              The Effects of Creative Therapy for Children with Autism
            </Heading>
            <p>
              January 2022 • written by <strong>Saisri Tangirala</strong> •
              edited by <strong>Anshul Gupta</strong>
            </p>
          </HeadingRow>
          <Image src={Banner} />
          <Text>
            <h1>Creative Therapy</h1>
            <p>
              While speech and occupational therapy are frequently utilized with
              those on the autism spectrum, creative therapy combining art and
              music can be used in addition to traditional methods. Applying
              creative therapy during sessions provides additional benefits,
              such as improving a child’s state of mind and developing motor
              skills.
            </p>
            <p>
              Because the autism spectrum is vast, each person has a unique
              perspective. This is also true in treatment, as each session is
              tailored to suit a person’s needs. As a result, a person may opt
              for different therapies to advance different skills. Common
              therapeutic treatments for autism include applied behavior
              analysis (ABA) therapy, speech therapy, occupational therapy, and
              physical therapy. Along with these familiar approaches, art and
              music therapies are also such examples that may help individuals.
            </p>
            <p>
              Art and music therapy are additional treatment approaches that
              involve creating a work of art and interacting with music,
              respectively. A person may create works of fine art to reinforce
              skills with the help expert therapists. Talking about a piece of
              art can help a child feel more at ease in their surroundings after
              voicing their feelings. By using artwork as a medium, an art
              therapist can help their client expel negative feelings and
              understand the underlying emotions. Similarly, playing a musical
              instrument or even listening to music can help a child foster
              skills such as better communication, enhanced attention span, and
              motor skills. Overall, music therapy aids with cognition and
              brings about improvement in behavior and sensory learning.
            </p>
            <p>
              A recent article titled “Family members’ and other experts’
              perceptions of music therapy with children on the autism spectrum
              in New Zealand: Findings from multiple case studies” was published
              on ScienceDirect on July 1, 2021. Through narrative assessments,
              family members and professionals were able to provide their
              perspectives on the influence of music therapy on children. By
              doing so, they were able to see for themselves that music therapy
              aided children in developing skills such as communicative,
              emotional, and cognitive skills. Furthermore, the study found that
              participants valued the results of music therapy and agreed that
              the methods are consistent with best practice guidelines. Studies
              like these suggest that alternative treatment methods, such as
              music therapy, can assist children in reaching milestones at their
              own pace.
            </p>
            <p>
              Rachel Barcellona, a pageant professional, has expressed,
              “Everyone has a mountain to climb and autism has not been my
              mountain, it has been my opportunity for victory.”
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
