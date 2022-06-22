import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";

import Exercise from "images/blog/resized/exercise.png";
import Eating from "images/blog/resized/8.png";
import Technology from "images/blog/resized/7.png";
import Research from "images/blog/resized/4.png";
import Creative from "images/blog/creative.png";
import LaunchX from "images/blog/launchx.png";
import SchoolWork from "images/blog/schoolwork.png";
import Visual2 from "images/blog/visual2.png";
import Social from "images/blog/social.png";

const allPosts = [
  {
    imageSrc: Exercise,
    date: "May 2022",
    author: "Saisri Tangirala",
    editor: "Anshul Gupta",
    title: "The Benefits of Exercise for Children with Autism",
    description:
      "Engaging in physical activity such as sports has shown to be beneficial in many aspects, especially for children on the autism spectrum. Physical activity may assist develop a variety of abilities and contribute to better overall health.",
    url: "/the-benefits-of-exercise-for-children-with-autism/",
  },
  {
    imageSrc: Eating,
    date: "March 2022",
    author: "Saisri Tangirala",
    editor: "Anshul Gupta",
    title: "Looking Deeper Into Eating Habits for Children with Autism",
    description:
      "The eating habits of a person with autism, such as eating only selected foods, can influence physical and mental health. However, deciphering those habits and providing the needed support can help enforce a positive outlook towards eating all types of food.",
    url: "/looking-deeper-into-eating-habits-for-children-with-autism/",
  },
  {
    imageSrc: Technology,
    date: "February 2022",
    author: "Saisri Tangirala",
    editor: "Anshul Gupta",
    title: "The Relationship between Artificial Intelligence and Autism",
    description:
      "The world of artificial intelligence has impacted many areas at large, with one of them being autism. With the help of technology, it has become easier for professionals to assist children on the autism spectrum.",
    url: "/the-relationship-between-artificial-intelligence-and-autism/",
  },
  {
    imageSrc: Creative,
    date: "January 2022",
    author: "Saisri Tangirala",
    editor: "Anshul Gupta",
    title: "The Effects of Creative Therapy for Children with Autism",
    description:
      "While speech and occupational therapy are frequently utilized with those on the autism spectrum, creative therapy combining art and music can be used in addition to traditional methods. Applying creative therapy during sessions provides additional benefits, such as improving a child’s state of mind and developing motor skills.",
    url: "/the-effects-of-creative-therapy-for-children-with-autism/",
  },
  {
    imageSrc: Social,
    date: "December 2021",
    author: "Saisri Tangirala",
    editor: "Anshul Gupta",
    title: "Looking into Social Interactions for Children with Autism",
    description:
      "Children on the autism spectrum may interact with their surroundings in various manners, such being as interested in only certain activities. To help children practice different social skills, parents and therapists can provide support and make them comfortable with participating in the community.",
    url: "/looking-into-social-interactions-for-children-with-autism/",
  },
  {
    imageSrc: Research,
    date: "November 2021",
    author: "Tony Joseph",
    editor: "Anshul Gupta",
    title: "The Significance of Research in the Autism Spectrum",
    description:
      "Research is vital to improving current practices and models for interacting with individuals with autism. Fortunately, the knowledge and specific biological causes of autism that have been discovered are only increasing.",
    url: "/the-significance-of-research-in-the-autism-spectrum/",
  },
  {
    imageSrc: Visual2,
    date: "October 2021",
    author: "Saisri Tangirala",
    editor: "Anshul Gupta",
    title: "Improving Visual Motor Skills with Visual Support",
    description:
      "Out of the four learning styles (visual, auditory, kinesthetic, and reading/writing), children on the autism spectrum often find themselves to learn best by visuals. By applying visual support, children will be able to improve their visual motor skills.",
    url: "/improving-visual-motor-skills-with-visual-support/",
  },
  {
    imageSrc: SchoolWork,
    date: "September 2021",
    author: "Saisri Tangirala",
    editor: "Anshul Gupta",
    title: "Managing Schoolwork for Children on the Autism Spectrum",
    description:
      "Transitioning back to an in-person educational system is stressful enough for kids to handle. The challenges are even greater for those on the autism spectrum, especially when it comes to completing schoolwork, as they may find it difficult to plan their work with the sudden shift from virtual school to face-to-face learning.",
    url: "/managing-schoolwork-for-children-on-the-autism-spectrum/",
  },
  {
    imageSrc: LaunchX,
    date: "December 2020",
    author: "Anshul Gupta",
    editor: "Anshul Gupta",
    title: "AUesome’s Beginning: From Concept to Product",
    description:
      "AUesome’s vision is to simplify the at-home therapy process for parents of children with autism by combining a physical play kit with an app that serves as an accompanying training tool for the activities in the kit.",
    url: "/auesomes-beginning-from-concept-to-product/",
  },
];

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-80 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 text-gray-600 font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-lg text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

// export default class Test extends React.Component {
//   componentDidMount() {
//     document.getElementById("button").click();
//   }

//   render() {
//     return (
//       <div>
//         <a href="http://blog.auesome.co">
//           <button id="button" onClick={this.checkClick}>
//             loading...
//           </button>
//         </a>
//       </div>
//     );
//   }
// }

export default ({ headingText = "Blog Posts", posts = allPosts }) => {
  const [visible, setVisible] = useState(posts.length);
  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };
  return (
    <AnimationRevealPage disabled>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Category>{post.date}</Category>
                    <CreationDate>by {post.author}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.featured && post.description && (
                      <Description>{post.description}</Description>
                    )}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>
                Load More
              </LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

const getPlaceholderPost = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  category: "Travel Guide",
  date: "April 19, 2020",
  title: "Visit the beautiful Alps in Switzerland",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  url: "https://reddit.com",
});
