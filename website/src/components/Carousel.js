import { useState } from "react";
import Teaser from "./Teaser";
function Carousel({ className, dataArray }) {
  const [currentTeaserIndex, setCurrentTeaserIndex] = useState(0);
  const teaserList = dataArray.map((article) => {
    return <Teaser article={article} key={article.id} />;
  });
  const currentTeaser = teaserList[currentTeaserIndex];
  // click handlers
  function incrementIndex(ev) {
    setCurrentTeaserIndex((prev) => prev + 1);
  }
  function decrementIndex(ev) {
    setCurrentTeaserIndex((prev) => prev - 1);
  }
  if (currentTeaserIndex < 0 && teaserList.length) {
    setCurrentTeaserIndex((prev) => teaserList.length - 1);
  }
  if (currentTeaserIndex > teaserList.length - 1 && teaserList.length) {
    setCurrentTeaserIndex((prev) => 0);
  }
  return (
    <div className={"carousel " + className}>
      <section className="carousel__body">{currentTeaser}</section>
      <div className="carousel__controls">
        <div className="carousel__ellipses">
          {teaserList.map((teaser, idx) => {
            if (currentTeaserIndex === idx) {
              return (
                <span
                  className="ellipse ellipse--active"
                  onClick={() => setCurrentTeaserIndex(idx)}
                ></span>
              );
            }
            return (
              <span
                className="ellipse"
                onClick={() => setCurrentTeaserIndex(idx)}
              ></span>
            );
          })}
        </div>
        <div className="carousel__btns">
          <button
            className="carousel__btn"
            onClick={decrementIndex}
            id="decrement"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.656 13.314">
              <g
                id="Icon_-_Chevron_Left_"
                data-name="Icon - Chevron (Left)"
                transform="translate(0 0)"
              >
                <path
                  id="Union_11"
                  data-name="Union 11"
                  d="M.293,13.021a1,1,0,0,1,0-1.415l4.95-4.95L.293,1.707A1,1,0,0,1,1.707.293L7.364,5.95a1,1,0,0,1,0,1.414L1.707,13.021a1,1,0,0,1-1.414,0Z"
                  transform="translate(7.657 13.314) rotate(180)"
                  fill="#8172d5"
                />
              </g>
            </svg>
          </button>
          <button
            className="carousel__btn"
            onClick={incrementIndex}
            id="increment"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.657 13.314">
              <g
                id="Group_3322"
                data-name="Group 3322"
                transform="translate(0 0)"
              >
                <g
                  id="Icon_-_Chevron_Right_"
                  data-name="Icon - Chevron (Right)"
                >
                  <path
                    id="Union_11"
                    data-name="Union 11"
                    d="M.293,13.021a1,1,0,0,1,0-1.414l4.95-4.95L.293,1.707A1,1,0,0,1,1.707.293L7.364,5.95a1,1,0,0,1,0,1.415L1.707,13.021a1,1,0,0,1-1.415,0Z"
                    fill="#8172d5"
                  />
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
