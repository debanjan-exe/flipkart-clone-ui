import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #172337;
  color: #fff;
  display: flex;
  padding: 3rem 4rem;
`;

const Footer = () => {
  return (
    <Container>
      <div className="col-7 border">left</div>
      <div className="col-5 border">right</div>
    </Container>
  );
};

export default Footer;
