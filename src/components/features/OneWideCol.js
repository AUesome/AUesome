import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import feature1 from "images/features/1.png";
import feature2 from "images/features/2.png";
import feature3 from "images/features/3.png";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";

const Container = tw.div`relative bg-gray-200 rounded-md`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-8 px-4 mb-4 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const TextContent = tw.div`text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-2xl sm:text-3xl lg:text-3xl text-center md:text-left leading-tight`;

const Description = tw.p`mt-2 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`,
]);

export default ({
  subheading = "Opportunities",
  heading = (
    <>Receive several benefits for being a chapter lead in your community!</>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://docs.google.com/document/d/1ZOZNLkaWau_V_rQx4UPaNxbCUxGBmdHMZGVB54ncUho/edit?usp=sharing",
  imageSrc = feature1,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <ul className="list-disc">
              <Description>
                {" "}
                - Access to monthly resources and handouts surrounding
                neurodiversity & advocacy
              </Description>
              <Description>
                {" "}
                - Access to our kit activities, resources, and various other
                materials
              </Description>
              <Description>
                {" "}
                - Access to our digital guidance platform and video creating
                platform
              </Description>
              <Description>
                {" "}
                - Featured on our website as a leader and team member at AUesome
              </Description>
              <Description>
                {" "}
                - Network and connect with neurodiversity leaders & advocates
                across the globe
              </Description>
              <Description>
                {" "}
                - Meet speakers from Harvard, Princeton, Stanford, UNC Chapel
                Hill, Duke, and more
              </Description>
              <Description>
                {" "}
                - Host events ranging from conferences, webinars, networking and
                seminars
              </Description>
              <Description>
                {" "}
                - Support offered by our team to help you learn more about
                neurodiversity
              </Description>
              <Description>
                {" "}
                - Foster a local community and grow your interests beyond the
                chapter
              </Description>
              <Description>
                {" "}
                - Have an opportunity to be selected as the annual AUesome
                Leader of Impact
              </Description>
              <Description>
                {" "}
                - Become an AUesome Chapter Founder & President and meet others
                in our organization
              </Description>
            </ul>
            <PrimaryButton
              buttonRounded={buttonRounded}
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              href={primaryButtonUrl}
            >
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
