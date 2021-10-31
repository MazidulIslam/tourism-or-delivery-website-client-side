import React from "react";
import Banner from "../Banner/Banner";
import Galleries from "../Galleries/Galleries";
import Offers from "../Offers/Offers";
import OurServices from "../OurServices/OurServices";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Offers></Offers>
      <OurServices></OurServices>
      <Galleries></Galleries>
    </div>
  );
};

export default Home;
