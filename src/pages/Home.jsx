import React, { Fragment } from "react";
import SEO from "../components/seo";
import Layout from "../layouts/Layout";
import HeroSlider from "../wrappers/hero-slider/HeroSlider";
import TabProductNine from "../wrappers/product/TabProductNine";
import BannerEleven from "../wrappers/banner/BannerEleven";
import CountDownThree from "../wrappers/countdown/CountDownThree";
import FeatureIconFour from "../wrappers/feature-icon/FeatureIconFour";
import NewsletterThree from "../wrappers/newsletter/NewsletterThree";

const HomeFashionSeven = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Fashion Home"
        description="Fashion home of flone react minimalist eCommerce template."
      />
      <Layout
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSlider />
        {/* tab product */}
        <TabProductNine
          category="fashion"
          spaceBottomClass="pb-100"
          spaceTopClass="pt-100"
        />
        {/* banner */}
        <BannerEleven />
        {/* countdown */}
        <CountDownThree
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          dateTime="December 23, 2025 12:12:00"
          countDownImage="https://htmldemo.net/flone/flone/assets/img/banner/deal-2.png"
        />
        {/* feature icon */}
        <FeatureIconFour
          bgImg="https://htmldemo.net/flone/flone/assets/img/bg/pattern-1.png"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
          spaceTopClass="pt-50"
          spaceBottomClass="pb-40"
        />
        {/* newsletter */}
        <NewsletterThree
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="dark-red-subscribe"
        />
      </Layout>
    </Fragment>
  );
};

export default HomeFashionSeven;
