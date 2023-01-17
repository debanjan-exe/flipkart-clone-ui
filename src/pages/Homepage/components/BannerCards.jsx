import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  //   display: flex;
  padding-top: 10px;
`;

const CardContainer = styled.div`
  height: 360px;
  background: #fff;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // border: 2px solid red;
`;

const CategoryDiv = styled.div`
  height: 360px;
  position: relative;
  background: #fff;
`;

const CategoryDivContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  z-index: 2;
`;

const CategoryDivContentTitle = styled.h2`
  text-align: center;
`;

const CategoryDivContentButton = styled.button`
  border: none;
  background: #2874f0;
  color: #fff;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 3px;
  box-shadow: 6px 4px 15px -10px rgba(0, 0, 0, 0.32);
  font-size: 14px;
`;

const CardImgDiv = styled.div`
  // border: 1px solid green;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardImg = styled.img`
  width: 80%;
  &:hover {
    transform: scale(1.03);
  }
`;
const CardDetails = styled.div`
  height: 20%;
  width: 100%;
  // border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  avgDesktop: {
    breakpoint: { max: 3000, min: 1920 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1919, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      style={{
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 45px)",
        left: 0,
        width: 45,
        height: 90,
        cursor: "pointer",
        border: "none",
        fontSize: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0px 5px 5px 0px",
        backgroundColor: "#fff",
        boxShadow: "6px 4px 15px -10px rgba(0,0,0,0.32)",
      }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      style={{
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 45px)",
        right: 0,
        width: 45,
        height: 90,
        cursor: "pointer",
        border: "none",
        fontSize: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px 0px 0px 5px",
        backgroundColor: "#fff",
        boxShadow: "-6px 4px 15px -10px rgba(0,0,0,0.32)",
      }}
      onClick={onClick}
    >
      <FaChevronRight />
    </button>
  );
};

const BannerCards = ({ data }) => {
  return (
    <Container className="d-flex">
      <CategoryDiv className="col-2">
        <img
          style={{ position: "absolute", bottom: 0, width: "100%", zIndex: 1 }}
          src={data.bgImgUrl}
          alt=""
        />
        <CategoryDivContent>
          <CategoryDivContentTitle>
            Best of <br /> {data.category}
          </CategoryDivContentTitle>
          <Link to={data.redirLink}>
            <CategoryDivContentButton>VIEW ALL</CategoryDivContentButton>
          </Link>
        </CategoryDivContent>
      </CategoryDiv>
      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        className="col-10"
      >
        {data.products.map((product) => (
          <CardContainer>
            <CardImgDiv>
              <CardImg src={product.imgUrl} />
            </CardImgDiv>
            <CardDetails>
              <h6 className="text-center">{product.title}</h6>
              <p className="text-center text-success">From ₹{product.price}</p>
            </CardDetails>
          </CardContainer>
        ))}
      </Carousel>
    </Container>
  );
};

export default BannerCards;
