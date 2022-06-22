import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Banner from "../images/blog/allResized/9.png";
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
            <Heading>The Benefits of Exercise for Children with Autism</Heading>
            <p>
              May 2022 • written by <strong>Saisri Tangirala</strong> • edited
              by <strong>Anshul Gupta</strong>
            </p>
          </HeadingRow>
          <Image src={Banner} />
          <Text>
            <h1>Eating Habits</h1>

            <p>
              The eating habits of a person with autism, such as eating only
              selected foods, can influence the physical and mental health.
              However, deciphering those habits and providing the needed support
              can help enforce a positive outlook towards eating all types of
              food.
            </p>
            <p>
              A person with autism can encounter feeding issues early in their
              childhood, as a child is more likely to come across selective
              eating, preference for one food over another (such as snacks), and
              strong dislike of other foods. While these responses may be
              temporary in a child not on the spectrum, a child with autism may
              encounter recurring difficulties. For a child on the spectrum,
              common eating issues may also include difficulties with chewing
              and swallowing along with not being able to feed oneself due to
              varied motor skills. A child may also have an unwilling mindset to
              try foods of an unfamiliar appearance and texture. Said issues
              with food selectivity may affect healthy growth and cause nutrient
              deficiencies.
            </p>
            <p>
              Seeking out the right care can help understand and overcome
              feeding issues. For instance, parents and children can work
              together to expand their diet and have a fixed structure and
              routine. This will make them feel comfortable when trying new
              foods. Children can also work with therapists to undergo feeding
              therapy. The main goal of feeding therapy is to look deeper into
              feeding issues and help children approach new foods with a
              positive attitude. Feeding therapy can be provided as a part of
              other therapies such as behavioral and occupational therapy.
              Behavioral therapy is another type of care that reinforces a
              positive attitude and works towards helping children feed
              themselves. The many care options offer helpful interventions.
            </p>
            <p>
              A study published in September of 2020 explored how occupational
              therapy helped parents and their child to gradually get accustomed
              to spoon feedings from restrained syringe feedings. The case
              report showed how effectively occupational therapists evaluated
              eating habits in children on the spectrum and collaborated with
              family-friendly services.
            </p>
            <p>
              Dani Bowman, Head of DaniMation Studios, has said, “Anything is
              possible! If I can do it, so can you!”
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
