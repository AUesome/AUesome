import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../images/mini-auesome-logo.png";
import { ReactComponent as InstagramIcon } from "../../images/icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../images/icons/linkedin.svg";
import { ReactComponent as FacebookIcon } from "../../images/icons/facebook.svg";
import { ReactComponent as GithubIcon } from "../../images/icons/github.svg";

const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(
  Column
)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black text-primary-500`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>AUesome</LogoText>
          </LogoContainer>
          <CompanyDescription>
            Bridging the digital and physical world of at-home therapy, one kit
            at a time. <br />
            <br />
            Site developed by Anshul Gupta
          </CompanyDescription>
          <SocialLinksContainer>
            <SocialLink href="https://instagram.com/auesome.co" target="_blank">
              <InstagramIcon />
            </SocialLink>
            <SocialLink
              href="https://www.facebook.com/groups/auesomefamily"
              target="_blank"
            >
              <FacebookIcon />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/company/auesome"
              target="_blank"
            >
              <LinkedinIcon />
            </SocialLink>
            <SocialLink href="https://github.com/auesome" target="_blank">
              <GithubIcon />
            </SocialLink>
          </SocialLinksContainer>
        </WideColumn>
        <Column>
          <ColumnHeading>Site Navigation</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="/">Home</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/about">About</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/testimonials">Testimonial</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/blog">Blog</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Information</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="/signup">Kit Signup</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="https://dashboard.auesome.co">Dashboard</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/terms-of-service">Terms of Service</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Join our Team</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="/clubs">Club Lead</Link>
            </LinkListItem>
            <LinkListItem>
              <Link
                href="https://www.notion.so/AUesome-Recruitment-ca2a672b14914cabb6ad2d8a8c0e664e"
                target="_blank"
              >
                Team Member
              </Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Organization Partner</Link>
            </LinkListItem>
            <LinkListItem>
              <Link
                href="https://www.notion.so/AUesome-Recruitment-ca2a672b14914cabb6ad2d8a8c0e664e"
                target="_blank"
              >
                Volunteer
              </Link>
            </LinkListItem>
          </LinkList>
        </Column>
      </FiveColumns>
    </Container>
  );
};
