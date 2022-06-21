import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingNone } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import { ReactComponent as WebsiteIcon } from "images/github-icon.svg";
import Anshul from "images/profiles/anshul.png";
import Isabella from "images/profiles/isabella.jpeg";
import Andrew from "images/profiles/andrew.png";
import Saisri from "images/profiles/saisri.png";
import Lauren from "images/profiles/lauren.png";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mx-0 mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center px-3`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

export default ({
  heading = "Leadership",
  subheading = "Our Team",
  description = (
    <>
      AUesome has members across the globe passionate about neurodiversity
      advocacy. If you're interested in joining our leadership team, sign up{" "}
      <a
        href="https://www.notion.so/AUesome-Recruitment-ca2a672b14914cabb6ad2d8a8c0e664e"
        style={{ color: "blue" }}
      >
        here
      </a>
      !
    </>
  ),
  cards = [
    {
      imageSrc: Anshul,
      position: "Co-Founder & President",
      biography:
        "Anshul is a high-school senior in the Bay Area passionate about technology and neurodiversity. As a co-founder at AUesome, he focuses on product development, design, outreach. He is also a part of the nonprofits Friends of Children with Special Needs, To The Limit Maths, and ThetaHacks outside of AUesome.",
      name: "Anshul Gupta",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Isabella,
      position: "Co-Founder & Advisor",
      biography:
        "Isabella is a freshman at Stanford University in the Bay Area. She is a co-founder of AUesome specializing in product conceptualization and design, customer relations, and marketing. She is a dedicated neurodiversity advocate, involved in the Stanford Neurodiversity Project and nonprofit Friends of Children with Special Needs.",
      name: "Isabella He",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Andrew,
      position: "Co-Founder & Advisor",
      biography:
        "Andrew Kim is a sophomore at the USC Jimmy Iovine and Andre Young Academy specializing in the design and customer experience. He helps with product design and other artwork at AUesome. He is an aspiring designer interested in the intersection between digital innovation and social entrepreneurship.",
      name: "Andrew Kim",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Lauren,
      position: "VP of Global Strategy",
      name: "Lauren Pearson",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Saisri,
      position: "Editor in Chief",
      name: "Saisri Tangirala",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:
        "https://media.wired.com/photos/5ed67e71b818b223fd84195f/1:1/w_1600,h_1600,c_limit/Blackout-hashtag-activism.jpg",
      position: "Design Director",
      name: "Anne Buchko",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingNone>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              {/* <CardCol1> */}
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                {/* <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks> */}
              </CardContent>
              {/* </CardCol1> */}
              {/* <CardCol2> */}
              {description && <Description>{card.biography}</Description>}
              {/* </CardCol2> */}
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingNone>
    </Container>
  );
};
