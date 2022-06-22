import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Banner from "../images/blog/allResized/7.png";
import Children from "../images/blog/7_1.jpeg";
import Children2 from "../images/blog/7_2.jpeg";
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
              The Relationship between Artificial Intelligence and Autism
            </Heading>
            <p>
              February 2022 • written by <strong>Saisri Tangirala</strong> •
              edited by <strong>Anshul Gupta</strong>
            </p>
          </HeadingRow>
          <Image src={Banner} />
          <Text>
            <h1>Technology and Autism</h1>

            <p>
              The world of artificial intelligence has impacted many areas at
              large, with one of them being autism. With the help of technology,
              it has become easier for professionals to assist children on the
              autism spectrum. For instance, doctors find it easier to detect
              early signs of autism based on behavior analysis while parents can
              explore various therapy options.
            </p>
            <p>
              Artificial Intelligence is the world of computers, where each
              computer program builds off algorithms and experimentations with
              code. AI is used everywhere from online shopping to digital
              personal assistants. In the world of medicine, technology has long
              evolved from being digital computers to conducting major surgeries
              with simple mechanisms. AI has come to help doctors better
              understand their patient’s health and design treatment plans for
              health concerns which were once considered deadly. Although AI is
              designed by humans and therefore can be liable to failures, it
              includes benefits of accurate diagnosis and analysis that far
              outweigh the drawbacks.
            </p>
            <Image src={Children2} />
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
              For those on the autism spectrum, technology can help by
              developing core skills and designing therapy options. For example,
              children and parents can utilize apps and other tools to further
              communication skills. Such apps provide verbal cues and offer tips
              on how to converse at one’s ease. Parents can also design visual
              tools to approach motor skills in their children. These gadgets
              will help children foster abilities while staying comfortable in
              their surroundings. Apart from using technology to determine
              at-home care options, parents can also find effective therapies
              for their children. AI allows many therapists to showcase their
              services through the internet, and parents can make use of search
              engines to find the right care offered for their children. The
              algorithms used to design AI provide results in a matter of
              seconds, letting parents make a quicker and easier choice of
              therapy. By using technologies offered by AI, children on the
              autism spectrum can have access to innovative care within their
              reach.
            </p>
            <Image src={Children} />
            <p>
              Researchers are attempting to further apply AI in the autism
              spectrum by formulating tests to predict autism at an early stage.
              A recent study used electroencephalograms (EEG), which record
              brain activity, to develop a classification system of detecting
              autism. By using nonlinear, distinguishable features to obtain EEG
              signals from children on the autism spectrum and children who do
              not have autism, the study found that three significant features
              could be predictive of autism. Researchers are now embarking to
              develop a cloud-based system to interpret EEG signals in order to
              discover signs of autism in children.
            </p>
            <p>
              “Who do you think made the first stone spears? The Asperger guy.
              If you were to get rid of all the autism genetics, there would be
              no more Silicon Valley.” <br></br>- Dr. Temple Grandin
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
