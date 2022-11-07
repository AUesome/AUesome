import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import { PrimaryButton } from "../misc/Buttons.js";
import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";
import AnshulKit from "../../images/profiles/anshulkits.jpeg";
import IsabellaKit from "../../images/profiles/isabellakits.MP.jpg";
import AndrewKit from "../../images/profiles/andrewkits.jpg";
import Anshul from "../../images/profiles/anshul.png";
import Isabella from "../../images/profiles/isabella.jpeg";
import Andrew from "../../images/profiles/andrew.png";

import kit1 from "../../images/Vertical Kits/1.png";
import kit2 from "../../images/Vertical Kits/2.png";
import kit3 from "../../images/Vertical Kits/3.png";
import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-8`;
const TestimonialsContainer = tw.div`mt-16 lg:mt-0`;
const Testimonials = styled.div``;
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row`;

const TestimonialImageSlider = tw(Slider)`w-full lg:w-5/12 flex-shrink-0 `;
const TestimonialTextSlider = tw(Slider)``;
const TestimonialText = tw.div`outline-none`;

const ImageAndControlContainer = tw.div`relative outline-none`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-80 sm:h-96 lg:h-144`,
]);

const ControlContainer = tw.div`absolute bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-tl-3xl border`;
const ControlButton = styled(PrimaryButton)`
  ${tw`mx-3 rounded-full text-gray-100 p-2`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const TextContainer = styled.div((props) => [
  tw`flex flex-col w-full lg:w-7/12`,
  props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`,
]);

const Subheading = tw(SubheadingBase)`mb-4`;
const HeadingTitle = tw(SectionHeading)`lg:text-left leading-tight`;
const Description = tw.p`max-w-md text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const QuoteContainer = tw.div`relative mt-10 lg:mt-20`;
const Quote = tw.blockquote`text-center lg:text-left text-sm sm:text-lg lg:text-xl xl:text-2xl`;
const CustomerInfo = tw.div`mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-20 h-20`;
const CustomerTextInfo = tw.div`text-center lg:text-left sm:ml-6 mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-semibold text-xl lg:text-2xl xl:text-3xl text-primary-500`;
const CustomerTitle = tw.p`font-medium text-secondary-100`;

const QuotesLeft = tw(
  QuotesLeftIcon
)`w-6 h-6 opacity-75 text-primary-500 inline-block mr-1 -mt-3`;
const QuotesRight = tw(
  QuotesRightIcon
)`w-6 h-6 opacity-75 text-primary-500 inline-block ml-1 -mt-3`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;
export default ({
  subheading = "About",
  heading = "AUesome's Journey",
  description = {
    des1: "AUesome is a student-driven social enterprise founded in 2020 with the mission of bridging the digital and physical world of at-home therapy for neurodiverse children.",
    des2: "Through collaborating with therapists, professors, doctors, and parents, we're iterated through over 10 kit designs that use clinically proven therapy tools effectively. Paired with our online instructional platform, dashboard.auesome.co, and a mobile app, we hope to provide continuous at-home therapy and parent-implemented interventions.",
    des3: "We additionally founded our Global Kits Initiative to provide resources internationally and Chapters program to raise awareness for neurodiversity. Contact us at info@auesome.co for questions.",
    // des4: " provide our kits to schools, nonprofits, center-based treatment facilities, hospitals, parents, and clinics.",
  },
  testimonials = null,
  textOnLeft = false,
}) => {
  /*
   * You can modify the testimonials shown by modifying the array below or passing in the testimonials prop above
   * You can add or remove objects from the array as you need.
   */
  const defaultTestimonials = [
    {
      imageSrc: kit3,
      profileImageSrc: Anshul,
      customerName: "Kit Iterations",
      customerTitle: "2022",
    },
    {
      imageSrc: kit2,
      profileImageSrc: Isabella,
      customerName: "Kit Iterations",
      customerTitle: "2021",
    },
    {
      imageSrc: kit1,
      profileImageSrc: Andrew,
      customerName: "Andrew Kim",
      customerTitle: "2020",
    },
  ];

  if (!testimonials || testimonials.length === 0)
    testimonials = defaultTestimonials;

  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [imageSliderRef, setImageSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);

  return (
    <Container>
      <Content>
        <HeadingInfo
          tw="text-center lg:hidden"
          subheading={subheading}
          heading={heading}
          description={description}
        />
        <TestimonialsContainer>
          <Testimonials>
            <Testimonial>
              <TestimonialImageSlider
                arrows={false}
                ref={setImageSliderRef}
                asNavFor={textSliderRef}
                fade={true}
              >
                {testimonials.map((testimonial, index) => (
                  <ImageAndControlContainer key={index}>
                    <Image imageSrc={testimonial.imageSrc} />
                    <ControlContainer>
                      <ControlButton onClick={imageSliderRef?.slickPrev}>
                        <ChevronLeftIcon />
                      </ControlButton>
                      <ControlButton onClick={imageSliderRef?.slickNext}>
                        <ChevronRightIcon />
                      </ControlButton>
                    </ControlContainer>
                  </ImageAndControlContainer>
                ))}
              </TestimonialImageSlider>
              <TextContainer textOnLeft={textOnLeft}>
                <HeadingInfo
                  tw="hidden lg:block"
                  subheading={subheading}
                  heading={heading}
                  description={description}
                />
                <TestimonialTextSlider
                  arrows={false}
                  ref={setTextSliderRef}
                  asNavFor={imageSliderRef}
                  fade={true}
                >
                  {testimonials.map((testimonial, index) => (
                    <TestimonialText key={index}>
                      {/* <QuoteContainer>
                        <Quote>
                          <QuotesLeft />
                          {testimonial.quote}
                          <QuotesRight />
                        </Quote>
                      </QuoteContainer> */}
                      <CustomerInfo>
                        {/* <CustomerProfilePicture
                          src={testimonial.profileImageSrc}
                        /> */}
                        <CustomerTextInfo>
                          <CustomerName>Kit Iterations</CustomerName>
                          <CustomerTitle>
                            {testimonial.customerTitle}
                          </CustomerTitle>
                        </CustomerTextInfo>
                      </CustomerInfo>
                    </TestimonialText>
                  ))}
                </TestimonialTextSlider>
              </TextContainer>
            </Testimonial>
          </Testimonials>
        </TestimonialsContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
  <div {...props}>
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    <HeadingTitle>{heading}</HeadingTitle>
    <Description>{description.des1}</Description>
    <Description>{description.des2}</Description>
    <Description>{description.des3}</Description>
    <Description>{description.des4}</Description>
  </div>
);
