import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Banner from "../images/blog/allResized/1.png";
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
            <Heading>AUesome’s Beginning: From Concept to Product</Heading>
            <p>
              December 2020 • written by <strong>Anshul Gupta</strong> & AUesome
              Founding Team
            </p>
          </HeadingRow>
          <Image src={Banner} />
          <Text>
            <p>
              This blog is authored by the LaunchX 2020 Team AUesome, a startup
              whose service aims to bridge the digital and physical world of
              at-home therapy for families with special needs, one kit at a
              time.
            </p>

            <h1>This is AUesome</h1>

            <p>
              AUesome’s vision is to simplify the at-home therapy process for
              parents of children with autism by combining a physical play kit
              with an app that serves as an accompanying training tool for the
              activities in the kit.
            </p>
            <p>
              Based on interviews with experts from medical research centers,
              professors, and therapists, they determined that the three main
              aspects to effective at-home therapy for children with autism are
              parent-implemented intervention, personalized training, and
              sensory and tactile learning. After conducting a detailed
              competitive analysis, they concluded that no other app or at-home
              training service provides all three of these aspects to children
              with autism.
            </p>
            <div
              className="video-responsive"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/Nb-OIImcO-0}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
            <p>
              The idea for AUesome originated from team members’ personal
              experiences working with children with special needs and creating
              cognitive training applications. One of their team members has had
              experience teaching children with special needs, and they observed
              first-hand the benefits that continuous at-home therapy can
              provide. They are fueled by their team’s determination and passion
              to positively impact the community of individuals with special
              needs. Their focus is on making a product that will truly benefit
              families with special needs.
            </p>
            <p>
              Interviews and market research are key. They conducted 11
              interviews with experts from Stanford University, Duke Autism
              Research Center, University of Nevada, Reno, various special
              education teachers, occupational therapists, and speech
              pathologists. Their insight was invaluable and helped make the
              product what it is today.
            </p>
            <p>
              As of partway through LaunchX Virtual, this startup team completed
              their minimum viable product (MVP) kits to send out for user
              testing. They sent out 5-8 free kits (adjustable to customer
              interest) to parents for initial feedback plus set up a GoFundMe
              to help fund free kits. They also are applying for a grant, as
              they are a non-profit and could be eligible for certain grant
              based funding. They have also coded a website (auesome.co) to
              further promote their product, idea, and demonstrations of their
              kit, along with an app mockup.
            </p>
            <div className="video-responsive" style={{ marginTop: "20px" }}>
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/Q2YBR-jRnss}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
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
