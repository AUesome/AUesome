import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Banner from "../images/blog/allResized/9.png";
import Children from "../images/blog/9_1.jpeg";
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
            <Heading>The Benefits of Exercise for Children with Autism</Heading>
            <p>
              May 2022 • written by <strong>Saisri Tangirala</strong> • edited
              by <strong>Anshul Gupta</strong>
            </p>
          </HeadingRow>
          <Image src={Banner} />
          <Text>
            <h1>Exercise</h1>
            <p>
              Engaging in physical activity such as sports has shown to be
              beneficial in many aspects, especially for children on the autism
              spectrum. Physical activity may assist develop a variety of
              abilities and contribute to better overall health.
            </p>
            <p>
              Because of their selected interests and engagement in activities,
              children on the autism spectrum have individualized motor,
              fitness, and social abilities. Looking specifically into motor
              skills, variations in movements may result from abnormal
              connections between neurons in the brain. In a study conducted in
              November of 2014 by scientists from University of Chicago, it was
              determined that the affected synapses, which are the connections
              between neurons, may contribute to varied skill sets in children.
              These altered connections can lead to the different motor skills
              observed. Such disparities in skill sets can have an influence on
              children's physical fitness, leading to poor muscle tone and an
              increased risk of obesity.
            </p>
            <Image src={Children} />
            <p>
              Sports, for the most part, may channel a child's repeated
              behaviors and motions into enhancing a variety of abilities.
              Sports have been shown to benefit not just a child's skill
              development but also his or her overall health. Participating in
              sports, for example, develops a positive outlook and social
              skills. Sports assist children to gain confidence and become more
              interested in their environment. This involvement leads to better
              organization and coordination for children. These are just a few
              of the many advantages that sports give to all children, not just
              those on the autism spectrum.
            </p>
            <p>
              The Fore! Autism Podcast has multiple podcasts exploring news and
              current events related to autism around the world. Many episodes,
              such as{" "}
              <i>
                Healing Perspectives and Mental Health with Advisory Board
                Member Merrick Egber
              </i>{" "}
              and <i>Interview with Autism Parent Cindy Langenfeld</i>, talk
              listeners through the world of autism and aid parents and children
              in leading a healthy lifestyle.
            </p>
            <p>
              Stephen Wiltshire, a famous landscape sketch artist on the
              spectrum, has said, “Do the best you can and never stop.”
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
