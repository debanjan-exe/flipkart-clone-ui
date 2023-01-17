import React from "react";
import styled from "styled-components";
import CategoriesBar from "./components/CategoriesBar";
import BannerSlider from "./components/BannerSlider";
import BannerCards from "./components/BannerCards";
import DealsGrid from "./components/DealsGrid";
import { BannerCardsData } from "./components/BannerCardsData";
import Footer from "./components/Footer";

const Container = styled.div``;

const Wrapper = styled.div`
  background-color: #f1f3f6;
  padding: 8px;
`;

const Homepage = () => {
  return (
    <Container>
      <CategoriesBar />
      <Wrapper>
        <BannerSlider />
        <BannerCards data={BannerCardsData[0]} />
        <DealsGrid />
        <BannerCards data={BannerCardsData[1]} />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Homepage;
