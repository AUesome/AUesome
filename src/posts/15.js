import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Banner from "../images/blog/15.png";
import Neurodiversity from "../images/blog/15_2.jpg";
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
            <Heading>The Benefits of Floortime Play Therapy</Heading>
            <p>
              October 2022 • written by <strong>Saisri Tangirala</strong> •
              edited by <strong>Anshul Gupta</strong>
            </p>
          </HeadingRow>
          <Image src={Banner} />
          <Text>
            <h1>Floortime Play Therapy</h1>
            <p>
              The primary focus of therapy is to support children in their
              personal development. Reaching out to children on an emotional
              level not only helps in building stronger bonds but also
              encourages them to be comfortable with communicating with others.
              Floortime play therapy, a relationship-based therapy, engages
              children on the autism spectrum in fun play while expanding on
              their social skills.
            </p>
            <p>
              Play sessions can be fun for anyone. From parents to providers,
              adults can enjoy developing social skills alongside children,
              fostering emotional growth in addition to learning integral
              skills. Focusing on children’s interests, such as preferring to
              play with colorful building bricks rather than learn about colors
              from a chart, allows for them to guide their own learning.
            </p>

            <p>
              Floortime therapy was developed based on the DIR (developmental,
              individual differences, relationship based) intervention model by
              Dr. Stanley Greenspan, a child psychiatrist, and Dr. Serena
              Weider, a clinical psychologist. The DIR intervention model is
              often intended to guide the way for children to experience
              intellectual growth. Both doctors recognized that children can
              make positive emotional connections through interactive play
              sessions, which can take place anywhere from inside a home to a
              therapist’s office. This diversification makes floortime therapy
              accessible in various settings, particularly in at-home ones,
              regardless of affordability.
            </p>
            <ImgWrap>
              <Image src={Neurodiversity} />
            </ImgWrap>
            <p>
              Multiple sessions can help children achieve milestones in
              emotional growth, emphasizing the need for interaction and a
              shared world. Some common goals that children can work towards
              include:
            </p>
            <ul>
              <li>Self-regulation and interest in the world</li>
              <li>Engagement in relations</li>
              <li>Two-way communication</li>
              <li>Complex communication and problem solving</li>
              <li>Creating emotional ideas through symbols</li>
              <li>
                Emotional thinking with the help of multiple perspectives{" "}
              </li>
            </ul>
            <p>
              Drs. Greenspan and Weider are also authors of{" "}
              <i>The Child With Special Needs</i> and <i>Engaging Autism</i>.
              The Child With Special Needs lays out a step-by-step approach to
              work alongside children not only on the spectrum, but also those
              with developmental conditions like Down Syndrome, ADHD, and
              cerebral palsy. Another book written by both the doctors,{" "}
              <i>Engaging Autism</i>, introduces a unique approach to the autism
              spectrum with the help of family and peers, where Dr. Greenspan’s
              program does not limit the potential of those on the spectrum.
              Instead, they can join their peers and interact with them
              emotionally and intellectually. Both books integrate research and
              clinical experience to offer parents and therapists insight on
              helping children reach their potential.
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
