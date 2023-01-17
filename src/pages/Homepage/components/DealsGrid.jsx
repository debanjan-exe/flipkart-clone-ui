import React from "react";
import styled from "styled-components";

const Container = styled.div`
  //   display: flex;
`;

const DealsGrid = () => {
  return (
    <Container>
      <div className="d-flex">
        <div className="col-4 ">
          <img
            style={{ width: "100%" }}
            src="https://rukminim1.flixcart.com/fk-p-flap/960/960/image/4232ffe2c1642345.jpg?q=50"
            alt=""
          />
        </div>
        <div className="col-4 ">
          <img
            style={{ width: "100%" }}
            src="https://rukminim1.flixcart.com/fk-p-flap/960/960/image/403b22688b1f0b64.jpg?q=50"
            alt=""
          />
        </div>
        <div className="col-4 ">
          <img
            style={{ width: "100%" }}
            src="https://rukminim1.flixcart.com/fk-p-flap/960/960/image/4aceb8d40f7e76f3.jpg?q=50"
            alt=""
          />
        </div>
      </div>
      <div className="d-flex">
        <div className="col-4 ">
          <img
            style={{ width: "100%" }}
            src="https://rukminim1.flixcart.com/fk-p-flap/960/960/image/ab05c11074b4af27.jpg?q=50"
            alt=""
          />
        </div>
        <div className="col-4 ">
          <img
            style={{ width: "100%" }}
            src="https://rukminim1.flixcart.com/fk-p-flap/960/960/image/1efad69de5061d93.jpg?q=50"
            alt=""
          />
        </div>
        <div className="col-4 ">
          <img
            style={{ width: "100%" }}
            src="https://rukminim1.flixcart.com/fk-p-flap/960/960/image/d4d557f0f04d338a.jpeg?q=50"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default DealsGrid;
