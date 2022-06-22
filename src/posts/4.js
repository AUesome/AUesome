import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import Banner from "../images/blog/allResized/4.png";
import Children from "../images/blog/4_1.jpeg";
import Children2 from "../images/blog/4_2.jpeg";
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
  a {
    ${tw`text-primary-500 hover:text-primary-300`}
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
              The Significance of Research in the Autism Spectrum
            </Heading>
            <p>
              November 2021 • written by <strong>Tony Joseph</strong> • edited
              by <strong>Anshul Gupta</strong>
            </p>
          </HeadingRow>
          <Image src={Banner} />
          <Text>
            <h1>Autism Research</h1>

            <p>
              How well has autism been researched and documented? Well, that has
              been a question asked for many decades. Research is vital to
              improving current practices and models for interacting with
              individuals with autism. Additionally, such research can both
              improve and find new neurodevelopmental disorders. Fortunately,
              the knowledge and specific biological causes of autism that have
              been discovered are only increasing.
            </p>
            <p>
              Autism, otherwise known as the autism spectrum disorder (ASD),
              refers to "a developmental disability that can cause significant
              social, communication and behavioral challenges," as defined by
              the{" "}
              <a
                href="https://www.cdc.gov/ncbddd/autism/facts.html"
                target={"_blank"}
              >
                Center for Disease Control and Prevention
              </a>{" "}
              . So far, researchers believe that the cause of autism is a
              combination of multiple factors: genetic factors, environmental
              influences, and heredity.
            </p>
            <p>
              Multiple studies have found that dopamine concentrations, a
              neurotransmitter in the brain known to have a regulating effect on
              feelings of pleasure and motivation, are altered in individuals
              with ASD (
              <a
                href="https://www.spectrumnews.org/news/diverse-dopamine-defects-found-in-people-with-autism/"
                target="_blank"
              >
                Zeliadt 14
              </a>
              ). Neurotransmitters are chemical messengers that are released in
              the synapse, which is the space between two neurons.
            </p>
            <p>
              A spontaneous mutation in the dopamine transporter gene SLC6A3 has
              been linked to the onset of autism (
              <a
                href="https://www.spectrumnews.org/news/genetics-spontaneous-mutation-links-dopamine-to-autism/"
                target="_blank"
              >
                Ross 13
              </a>
              ). SLC6A3 is a gene that codes for a dopamine regulation protein,
              further validating the hypothesis that dopamine regulation has a
              solid correlation to autism. Researchers were able to support this
              link by testing the gene mutation on fruit flies. This mutation,
              later named T356M, created a single point-mutation (alteration in
              one amino acid), which affects the resulting protein. This altered
              protein, instead of increasing the dopamine concentration in the
              brain, actually decreases it. When this mutation was induced in
              the fruit flies, the researchers observed hyperactivity, a common
              characteristic of autism.
            </p>
            <Image src={Children} />
            <p>
              Like the T356M mutation, there are many other variants in the
              dopamine transporter gene. However, that all impair the function
              of the dopamine regulator protein and thus decrease dopamine
              concentrations in the brain. For example, instead of altering the
              amino acid sequence in the protein, one mutation alters the
              concentration of the transporter protein itself, thus decreasing
              dopamine transport.
            </p>
            <p>
              Another researcher, Mustafa Sahin, MD, Ph.D., found another
              relationship between autism and dopaminergic neurons (
              <a
                href="https://answers.childrenshospital.org/autism-gene-treatment/"
                target="_blank"
              >
                McCarthy 21
              </a>
              ). This special type of neuron is found in the midbrain and is
              responsible for dopamine synthesis or creation. His study
              primarily relied on a finding from 2008, which concluded that the
              16p11.2 chromosomal region is linked with autism spectrum disorder
              (ASD).
            </p>
            <p>
              Sahin's team formulated a method of separating induced pluripotent
              stem cells— made from patients' stem cells and containing 16p11.2
              copy number alterations (a difference in the number of copies of a
              specific gene from individual to individual) — into dopaminergic
              neurons. The team then, at that point, studied how neurons missing
              the 16p11.2 chromosomal region acted in a dish. Such an
              experimental model was extremely complex as these neurons contain
              more than 1,000 sensors which were used to determine neuron
              activity in the experiment.
            </p>
            <p>
              "We discovered that dopaminergic neurons that are missing this
              16p11.2 region were hyperactive compared to the control cells,"
              says Sahin. This hyperactivity was later linked to the neuron
              misfiring or causing excess sensors to go off when it is not
              necessary, thus increasing the neuron activity.
            </p>
            <p>
              The group also utilized their dopaminergic neurons to check
              whether they could discover pathways and drugs that decrease
              dopaminergic neuron misfiring. Utilizing data from prior
              investigations, the group zeroed in on the KCTD13 gene in the
              16p11.2 chromosomal region, a gene known to control the RhoA
              pathway. The RhoA pathway is known to control nerve cell
              development.
            </p>
            <p>
              Adding rhosin, a medication that explicitly represses RhoA's
              pathway activity eased back misfiring of the dopaminergic neurons
              with 16p11.2 deletions to a level equivalent to that of control
              cells.
            </p>
            <p>
              "Rhosin basically protected the strange organization action of the
              16p11.2-erasure neurons," says Sundberg, first author of the
              published study.
            </p>
            <p>
              Such findings from this study provide a new model for
              pharmaceutical companies to address autism, as well as bring their
              product to market through FDA approval and multi-phase trials.
              More studies and research in the RhoA pathway, as well as other
              pathways, may increase the chances of a therapeutic being
              available to the general public.
            </p>
            <p>
              The limiting factor for many of these experiments and findings is
              the availability of mapped genes for individuals on the autism
              spectrum. Thus, there has recently been a movement to improve and
              increase the number of mapped genes recorded.
            </p>
            <p>
              Nickolas Johnston, a 15-year-old, was one of 100 young people
              picked to have their whole gene codes recorded with a goal to
              foster more targeted medicines for autism.
            </p>
            <Image src={Children2} />
            <p>
              Johnston and his family reported that the spectrum nature of
              autism makes it unique for each individual — thus, it is difficult
              to create a therapy that applies to all those on the autism
              spectrum.
            </p>
            <p>
              Research about autism and other neurodiverse conditions is
              especially important because it raises awareness of the
              neurodiverse community, which pushes forward tips for parents to
              support their child with autism.{" "}
            </p>
            <p>
              The goal of most research, especially within the autism aspect,
              aims to help individuals with autism as well as their parents
              provide assistance in an assortment of settings, from the home,
              classroom, and community.
            </p>
            <p>
              Current{" "}
              <a
                href="https://www.helpguide.org/articles/autism-learning-disabilities/helping-your-child-with-autism-thrive.htm"
                target={"_blank"}
              >
                research
              </a>{" "}
              has provided many goals for parenting which includes a consistent
              schedule, rewarding satisfactory or good behavior, making sure
              that the home area is safe for kids, and paying attention to the
              child’s sensory inputs as well as sensitivities.
            </p>
            <p>
              In all, further advancements in autism research will provide the
              basis for the future of understanding autism and neurodivergence,
              an essential tool priceless for many.
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
