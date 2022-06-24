import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Banner from "../images/blog/10.png";
import Children from "../images/blog/10_1.webp";
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
            <Heading>The Bond Between Neurodiversity and Pets</Heading>
            <p>
              June 2022 • written by <strong>Saisri Tangirala</strong> • edited
              by <strong>Anshul Gupta</strong>
            </p>
          </HeadingRow>
          <Image src={Banner} />
          <Text>
            <h1>Pets</h1>
            <p>
              Pets are well recognized for improving a person's overall
              well-being by giving support and company. The same may be true
              about children on the autism spectrum, whilst children's interests
              and parental preferences must be addressed when considering a pet.
            </p>
            <p>
              Learning and developing social skills in the real world is not
              always the same for everyone, with each person learning at their
              own pace. Children on the spectrum may be familiar with a range of
              social skills, finding that certain skills need to be worked on
              while others remain strong. For example, children may recognize
              different interpretations of instructions or have a limited
              attention span. They may also realize social cues at different
              times while conversing with others. Improvements in social skills
              can be achieved with the help of therapists, like occupational and
              behavioral therapists. Research, however, has found that learning
              social skills can also begin with the help of a different species
              altogether.
            </p>
            <p>
              Pets may provide a variety of benefits to both children on the
              spectrum and their parents by offering company. Children absorb
              the positive energy of their pets and quickly move towards
              engaging in social skills. Children who engage with animals tend
              to acquire stronger social skills as a result of the affection
              shown by pets. This enables kids to feel at ease in a variety of
              contexts and recognize appropriate behavior. Creating a positive
              link with pets is another technique that children and parents may
              use to overcome any negative hurdles.
            </p>
            <Image src={Children} />
            <p>
              There are a few details that need to be considered when
              considering the benefits of owning a family pet. For instance, a
              child may not respond encouragingly to a pet owing to few
              sensitivities or disinterest. The responsibility that comes with
              having pets also needs to be considered. Parents may be required
              to care for pets, or youngsters may need to learn more about
              caring for their pets. Parents will also realize that in addition
              to dedicating their time and attention to their children, they
              also need to focus on their pets. Only by making the right
              decisions will parents and children be able to determine whether
              owning a pet is beneficial to the family.
            </p>
            <p>
              Therapy dogs, dogs that aid in therapy, are especially helpful to
              children and adults seeking therapy. Therapy dogs are known to
              calm people and guide people in getting familiar with the
              naturalness of social interactions. Such dogs are trained to work
              with and make people on the spectrum feel at ease in public.
              Overall, resources like pets are aimed to help people feel
              confident and feel compassion.
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
