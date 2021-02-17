import React from "react";
import Hero from "../globals/Hero";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Button";

import homeImg from "../../images/homeBcg.jpeg";

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="welcome to"
        title="beachwalk resort"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam deserunt esse autem voluptas soluta."
      >
        <PrimaryBtn t="1rem">view details</PrimaryBtn>
      </Banner>
    </Hero>
  );
};

export default Header;
