import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Banner from "../images/blog/allResized/2.png";
import Children from "../images/blog/2_1.jpeg";
import Children2 from "../images/blog/2_2.jpeg";
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
              Managing Schoolwork for Children on the Autism Spectrum
            </Heading>
            <p>
              September 2021 • written by <strong>Saisri Tangirala</strong> •
              edited by <strong>Anshul Gupta</strong>
            </p>
          </HeadingRow>
          <Image src={Banner} />
          <Text>
            <h1>Managing Schoolwork</h1>

            <p>
              Transitioning back to an in-person educational system is stressful
              enough for kids to handle. The challenges are even greater for
              those on the autism spectrum, especially when it comes to
              completing schoolwork, as they may find it difficult to plan their
              work with the sudden shift from virtual school to face-to-face
              learning.
            </p>
            <p>
              Children on the autism spectrum often have learning differences in
              sensory perception and motor skills. Although no two children on
              the spectrum are exactly alike and thus face different challenges,
              many might find common ground with repetitive and restrictive
              behaviors. Thus, children with ASD are often more comfortable when
              they have a fixed schedule. However, the events of the past year
              have done much to disrupt the normal way of life, affecting many
              people in different ways. The educational system has largely been
              affected due to COVID-19, and the transition from in-person
              learning to remote learning and back provides many with additional
              challenges in keeping up with homework assignments. To support
              parents in helping their children adapt to the transition to
              in-person learning, AUesome has compiled seven tips for managing
              schoolwork.
            </p>
            <Image src={Children} />
            <p>
              Below are a few tips to managing schoolwork for children on the
              autism spectrum:
            </p>
            <ul>
              <li>
                <p>
                  <strong>Put together a timetable:</strong> You can set a time
                  suitable for your child to complete work so that both you and
                  your child can get accustomed to the routine. This contributes
                  to reducing sudden shifts and ensures consistency.
                </p>
              </li>
              <li>
                <strong>Divide up assignments:</strong> Rather than attempting
                to complete all tasks in one session, you can split the tasks to
                ensure that your child does not get tired.
              </li>
              <li>
                <strong>Prioritize interests:</strong> Children differ with
                their learning styles, and the same can be said for children on
                the autism spectrum. You can take your child’s interests into
                consideration to make schoolwork engaging and fun using online
                resources.
              </li>
              <li>
                <strong>Make the environment learning-friendly:</strong> There
                are many resources available to make children feel relaxed in
                their learning environment. Make the atmosphere distraction-free
                so that children can focus on their tasks. For instance, remove
                sources of noise, electronic devices, or other causes for
                distraction. This way, learning can be less cumbersome and more
                efficient.
              </li>{" "}
              <li>
                <strong>Provide company:</strong>Support children by being there
                for them every step of the way, as children may find it best to
                manage their work with your support.
              </li>
              <li>
                <strong>Establish communication:</strong> Talk to your child
                about expressing his or her feelings and refrain from passing
                judgement. Such communications allow for meaningful and
                supportive interactions.
              </li>
              <li>
                <p>
                  <strong>It is OK to get help:</strong> Navigating through
                  homework assignments is not only tiring for children but also
                  for parents. Ask for help whenever necessary and connect with
                  others to cope with emotions and challenges.
                </p>
              </li>
            </ul>

            <Image src={Children2} />
            <p>
              To learn more about managing schoolwork and other ways of
              engagement, parents can refer to{" "}
              <i>
                The Asperkid's Game Plan: Extraordinary Minds, Purposeful
                Play... Ordinary Stuff
              </i>{" "}
              by Jennifer Cook O'Toole. This book explores the varied learning
              styles of children on the autism spectrum and offers engaging
              projects to improve core skills. Such enjoyable projects will go
              beyond the playtime to address fundamental strengths and improve
              weaknesses. Ultimately, the different learning styles of children
              on the autism spectrum does not constitute ignoring their needs
              and abilities. As Dr. Ole Ivar Lovaas put it, “If they can’t learn
              the way we teach, we teach the way they learn.”
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
