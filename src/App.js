import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are building a custom one yourself */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

// import Home from "pages2/Home.js";
// import Hero from "components/hero/TwoColumnWithInput.js";
// import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
// import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
// import Hero from "components/hero/FullWidthWithImage.js";
// import Hero from "components/hero/BackgroundAsImage.js";
// import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";

// import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
// import Features from "components/features/VerticalWithAlternateImageAndText.js";
// import Features from "components/features/DashedBorderSixFeatures";
// import MainFeature from "components/features/TwoColWithButton.js";
// import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
// import FeatureWithSteps from "components/features/TwoColWithSteps.js";
// import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";

// import Pricing from "components/pricing/ThreePlans.js";
// import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
// import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";

// import SliderCard from "components/cards/ThreeColSlider.js";
// import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
// import TabGrid from "components/cards/TabCardGrid.js";

// import Blog from "components/blogs/ThreeColSimpleWithImage.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
// import Blog from "components/blogs/GridWithFeaturedPost.js";

// import Testimonial from "components/testimonials/TwoColumnWithImage.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import Testimonial from "components/testimonials/SimplePrimaryBackground.js";

// import FAQ from "components/faqs/SimpleWithSideImage.js";
// import FAQ from "components/faqs/SingleCol.js";
// import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";

// import ContactUsForm from "components/forms/SimpleContactUs.js";
// import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
// import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
//
// import GetStarted from "components/cta/GetStarted.js";
// import GetStarted from "components/cta/GetStartedLight.js";
// import DownloadApp from "components/cta/DownloadApp.js";

// import Footer from "components/footers/SimpleFiveColumn.js";
// import Footer from "components/footers/SimpleFiveColumn";
// import Footer from "components/footers/FiveColumnWithBackground.js";
// import Footer from "components/footers/FiveColumnDark.js";
// import Footer from "components/footers/MiniCenteredFooter.js";

/* Ready Made Pages (from demos folder) */
// import EventLandingPage from "demos/EventLandingPage.js";
// import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
// import AgencyLandingPage from "demos/AgencyLandingPage.js";
// import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
// import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
// import ServiceLandingPage from "demos/ServiceLandingPage.js";
// import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";

/* Inner Pages */
// import LoginPage from "pages/Login.js";
// import SignupPage from "pages/Signup.js";
// import PricingPage from "pages/Pricing.js";
// import AboutUsPage from "pages/AboutUs.js";
// import ContactUsPage from "pages/ContactUs.js";
// import BlogIndexPage from "pages/BlogIndex.js";
// import TermsOfServicePage from "pages/TermsOfService.js";
// import PrivacyPolicyPage from "pages/PrivacyPolicy.js";

import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";
import ThankYouPage from "ThankYouPage.js";

import Home from "pages/Home.js";
import About from "pages/AboutUs.js";
import Testimonials from "pages/Testimonials.js";
import Blog from "pages/BlogIndex.js";
import Clubs from "pages/Clubs.js";
import Privacy from "pages/PrivacyPolicy";
import Terms from "pages/TermsOfService";
import Error404 from "pages/404.js";
import Catalog from "pages/Catalog";
import Signup from "pages/KitSignUp";

import app from "redirects/app";
import dashboard from "redirects/dashboard";
import design from "redirects/design";
import donate from "redirects/donate";
import feedback from "redirects/feedback";
import join from "redirects/join";
import kits from "redirects/kits";
import marketing from "redirects/marketing";
import parent from "redirects/parent";
import parentambassador from "redirects/parentambassador";
import publicrelations from "redirects/publicrelations";
import recruitment from "redirects/recruitment";
import tech from "redirects/tech";
import videos from "redirects/videos";
import volunteer from "redirects/volunteer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import blog1 from "posts/1.js";
import blog2 from "posts/2.js";
import blog3 from "posts/3.js";
import blog4 from "posts/4.js";
import blog5 from "posts/5.js";
import blog6 from "posts/6.js";
import blog7 from "posts/7.js";
import blog8 from "posts/8.js";
import blog9 from "posts/9.js";
import blog10 from "posts/10.js";
import blog11 from "posts/11.js";
import blog12 from "posts/12.js";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  return (
    <Router>
      <Switch>
        {/* main pages */}
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/chapters" component={Clubs} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/catalog" component={Catalog} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/testimonials" component={Testimonials} exact />
        {/* <Route path="/news" component={News} exact /> */}
        {/* <Route path="/community" component={Community} exact /> */}
        <Route path="/privacy-policy" component={Privacy} exact />
        <Route path="/terms-and-conditions" component={Terms} exact />

        {/* blog */}
        <Route
          path="/auesomes-beginning-from-concept-to-product"
          component={blog1}
          exact
        />
        <Route
          path="/managing-schoolwork-for-children-on-the-autism-spectrum"
          component={blog2}
          exact
        />
        <Route
          path="/improving-visual-motor-skills-with-visual-support"
          component={blog3}
          exact
        />
        <Route
          path="/the-significance-of-research-in-the-autism-spectrum"
          component={blog4}
          exact
        />
        <Route
          path="/looking-into-social-interactions-for-children-with-autism"
          component={blog5}
          exact
        />
        <Route
          path="/the-effects-of-creative-therapy-for-children-with-autism"
          component={blog6}
          exact
        />
        <Route
          path="/the-relationship-between-artificial-intelligence-and-autism"
          component={blog7}
          exact
        />
        <Route
          path="/looking-deeper-into-eating-habits-for-children-with-autism"
          component={blog8}
          exact
        />
        <Route
          path="/the-benefits-of-exercise-for-children-with-autism"
          component={blog9}
          exact
        />
        <Route
          path="/the-bond-between-neurodiversity-and-pets"
          component={blog10}
          exact
        />
        <Route
          path="/eyes-can-offer-more-insight-on-diagnosis-in-children"
          component={blog11}
          exact
        />
        <Route
          path="/advocating-for-change-about-auesome-chapters/"
          component={blog12}
          exact
        />
        {/* redirects */}
        <Route path="/app" component={app} exact />
        <Route path="/dashboard" component={dashboard} exact />
        <Route path="/design" component={design} exact />
        <Route path="/donate" component={donate} exact />
        <Route path="/feedback" component={feedback} exact />
        <Route path="/join" component={join} exact />
        <Route path="/kits" component={kits} exact />
        <Route path="/marketing" component={marketing} exact />
        <Route path="/parent" component={parent} exact />
        <Route path="/parentambassador" component={parentambassador} exact />
        <Route path="/publicrelations" component={publicrelations} exact />
        <Route path="/recruitment" component={recruitment} exact />
        <Route path="/tech" component={tech} exact />
        <Route path="/videos" component={videos} exact />
        <Route path="/volunteer" component={volunteer} exact />
        <Route path="/app" component={app} exact />
        <Route path="/app" component={app} exact />

        {/* default 404 */}
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
