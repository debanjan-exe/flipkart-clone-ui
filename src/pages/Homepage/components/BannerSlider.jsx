import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BannerSlider = () => {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 45px)",
    width: 45,
    height: 90,
    cursor: "pointer",
    border: "none",
    fontSize: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div>
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                ...arrowStyles,
                left: 0,
                borderRadius: "0px 5px 5px 0px",
              }}
            >
              <FaChevronLeft />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                ...arrowStyles,
                right: 0,
                borderRadius: "5px 0px 0px 5px",
              }}
            >
              <FaChevronRight />
            </button>
          )
        }
      >
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/d039b683bdbb5e3e.jpg?q=50"
            alt="img"
          />
        </div>
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/7c28a52b9d62621a.jpg?q=50"
            alt="img"
          />
        </div>
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/fb2ad66e7e554078.jpg?q=50"
            alt="img"
          />
        </div>
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/fe67d3442862b765.jpg?q=50"
            alt="img"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerSlider;
