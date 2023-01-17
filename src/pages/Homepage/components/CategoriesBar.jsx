import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { CategoriesBarData } from "./CategoriesBarData";
import { BiChevronDown } from "react-icons/bi";

const ContainerMain = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Category = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryImg = styled.img`
  width: 70px;
`;

const CategoryTitle = styled.p`
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const CategoriesBar = () => {
  return (
    <ContainerMain>
      <Container>
        <Wrapper>
          {CategoriesBarData.map((cat) => (
            <Category>
              <CategoryImg src={cat.img} alt={cat.title} />
              <CategoryTitle>
                {cat.title}
                {cat.dropdown ? <BiChevronDown /> : ""}
              </CategoryTitle>
            </Category>
          ))}
        </Wrapper>
      </Container>
    </ContainerMain>
  );
};

export default CategoriesBar;
