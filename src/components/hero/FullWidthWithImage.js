import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Kits from "images/kits.jpeg";
import Header, {
  LogoLink,
  NavLinks,
  NavLink as NavLinkBase,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;
const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

const Link = tw.a`text-primary-500 underline font-semibold`;

const Container = tw.div`relative mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;
const RightColumn = styled.div`
  background-image: url(${Kits});
  ${tw`bg-green-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/6 lg:flex-1`}
`;

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`;
const Paragraph = tw.p`max-w-xl my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

const Actions = styled.div`
  ${tw`mb-8 lg:mb-0`}
  .action {
    ${tw`text-center inline-block w-full sm:w-64 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-primary-500 text-gray-100 hover:bg-primary-700`}
  }
  .secondaryAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800`}
  }
  .thirdAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 w-auto px-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800`}
  }
`;

export default ({
  navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/chapters">Chapters</NavLink>
      <NavLink href="/testimonials">Testimonials</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/catalog">Catalog</NavLink>{" "}
      <NavLink href="/news">News</NavLink>
      <NavLink href="/community">Community</NavLink>
      <NavLink href="https://dashboard.auesome.co" tw="lg:ml-10!">
        Dashboard
      </NavLink>
      <PrimaryLink css={false && tw`rounded-full`} href="/signup">
        Sign up
      </PrimaryLink>
    </NavLinks>,
  ],
  heading = (
    <>
      Sign up for a <span tw="text-primary-500">free</span> <wbr />
      <br />
      AUesome Kit
    </>
  ),
  description = "",
  primaryActionUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfTl41Gd7DbD7iAiKvwicqO3mXU8nzp1v6LWZ9jWNtQxTqZJw/viewform?usp=sf_link",
  primaryActionText = "Parent? Sign Up Here!",
  secondaryActionUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeiSrYl4H86W59KMM57z0b6nTMJkK-8h-9iWXreK96Nnz4YEQ/viewform?usp=sf_link",
  secondaryActionText = "Organization? Sign Up Here!",
}) => {
  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          {/* <StyledHeader links={navLinks} collapseBreakpointClass="sm" /> */}
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>
              Exclusive to this summer, we'll be providing free AUesome Kits for
              children with special needs. Sign up below if you're interested!
              Please keep in mind that these kits are funded through our{" "}
              <Link
                target="_blank"
                href="https://www.gofundme.com/f/auesome-athome-therapy-for-children-with-autism"
              >
                GoFundMe
              </Link>{" "}
              and we would appreciate any support you can provide. Our kits
              consist of specific curated activities from our{" "}
              <Link target="_blank" href="/catalog">
                catalog
              </Link>
              .
              <br />
              <strong>Note:</strong> If you are a therapist, educator, admin,
              etc. a part of an organization interested in receiving multiple
              kits, please sign up on the organization form.
            </Paragraph>
            <Actions>
              <a
                href={primaryActionUrl}
                className="action primaryAction"
                target="_blank"
              >
                {primaryActionText}
              </a>
              <a
                href={secondaryActionUrl}
                className="action secondaryAction"
                target="_blank"
              >
                {secondaryActionText}
              </a>
              <a
                href={
                  "https://www.gofundme.com/f/auesome-athome-therapy-for-children-with-autism"
                }
                className="action thirdAction"
                target="_blank"
              >
                {"GoFundMe"}
              </a>
            </Actions>
          </Content>
        </LeftColumn>
        <RightColumn></RightColumn>
      </TwoColumn>
    </Container>
  );
};
