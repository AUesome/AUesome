import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Banner from "../images/blog/13_1.png";
import Neurodiversity from "../images/blog/13_2.png";
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
            <Heading>Autism Spectrum: A Parent's Perspective</Heading>
            <p>
              July 2022 • written by <strong>Saisri Tangirala</strong> • edited
              by <strong>Anshul Gupta</strong>
            </p>
          </HeadingRow>
          <Image src={Banner} />
          <Text>
            <h1>A Parent's Perspective</h1>
            <p>
              When children are identified on the autism spectrum, it is not
              only the children who have to work with the diagnosis but parents
              as well. Parents are constantly learning everyday with their
              children about living with and embracing autism.
            </p>
            <p>
              For parents, the first diagnosis on the spectrum may be
              accompanied with uncertainty and conflicting emotions. Some may
              feel reluctant to accept their child’s diagnosis while others may
              feel relieved that they know what their child is experiencing. At
              times, both parents and children may find this newfound experience
              challenging.
            </p>

            <p>
              Parents may also discover that they need to make some new changes
              in their everyday life and find new methods to bond with their
              children. They may also experience financial strains and find that
              they need support from friends and family. Parents should know
              that these circumstances are normal and seek support when needed.
            </p>
            <ImgWrap>
              <Image src={Neurodiversity} />
            </ImgWrap>
            <p>
              Helping children can also help parents face concerns over autism
              and take appropriate measures for those on the spectrum. By
              learning new information about autism, parents and researchers
              alike have found ways to be supportive of children on the
              spectrum:
            </p>
            <ul>
              <li>
                Maintain consistency. Being consistent allows children to apply
                and remember what they have learned not just in school, but at
                home as well. Doing the same things that children are used to
                allows them to be comfortable while transferring behaviors or
                lessons they have learned.
              </li>
              <li>
                Put together a schedule. Having a schedule reinforces
                consistency, allowing children to follow routines for a suitable
                day-to-day lifestyle with minimum disturbances.
              </li>
              <li>
                Create a safe and positive environment. Having an environment
                where the child, and the parent, feels positive and secure can
                help them be more confident and further their skills. Being
                aware of what children need can greatly help with being
                reassured in one’s surroundings.
              </li>
              <li>
                Find support if needed. Raising a child, not only one on the
                spectrum, can demand a lot of time and energy. Both parents and
                children have to navigate the spectrum, and it is OK to undergo
                mixed feelings. It is essential for parents to take care of
                themselves as well as their children. There are support groups,
                care, and counseling parties available to help parents care for
                children with autism.
              </li>
            </ul>
            <p>
              Working together to keep a consistent and positive environment
              helps in dealing with new challenges. Interactions between parents
              and children can help children develop abilities such as social
              communication, motor skills, and visual skills. Early intervention
              is important to identify how children learn best and what they
              enjoy while doing so.
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
