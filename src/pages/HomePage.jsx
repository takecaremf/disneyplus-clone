("use client");

import React from "react";
import { Carousel } from "flowbite-react";

function HomePage() {
  return (
    <>
      <Carousel className=" h-screen m-auto" slideInterval={1500}>
        <img
          alt="..."
          src="https://lumiere-a.akamaihd.net/v1/images/ij5_desktop_hero_1600x686_36f1aa5c.jpeg?region=0,0,1600,686"
        />
        <img
          alt="..."
          src="https://d36f7282t1397m.cloudfront.net/competitions/assets/the-little-mermaid/masthead_644776a96a63e.jpg"
        />
        <img
          alt="..."
          src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9754/1539754-h-b213f3fe5b8d"
        />
        <img
          alt="..."
          src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_3840/feature/onboarding/15-12-2022-onboarding-background-ph-web-lr.png"
        />
      </Carousel>
    </>
  );
}

export default HomePage;
