import { useState } from "react";
import bgImg from "@/assets/img/bg.jpg";

function X() {
  const [isOpenCode, setIsOpenCode] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);
  return (
    <>
      <div className="sectionWrap">
        <div className="descriptionWrap">
          <div className="description">
            <div>
              <p className="numTask">x</p>
              <h2>
                <span>t</span>itle
              </h2>
              <div className="task"></div>
            </div>
            <div className="descriptionBtn">
              <div className="moreBtn" onClick={() => setIsOpenCode((v) => !v)}>
                Code
              </div>
              <div className="moreBtn" onClick={() => setIsOpenMore((v) => !v)}>
                More
              </div>
            </div>

            <div>
              {isOpenCode && (
                <div className="moreBody">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </div>
              )}
            </div>
            <div>
              {isOpenMore && (
                <div className="moreBody">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </div>
              )}
            </div>
          </div>
          <p className="title">lorem4</p>
        </div>
        <div
          className="imgBox"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        <div className="solution">
          <h3>
            <span>t</span>itle
          </h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, id.
          <button className="mainBtn">button</button>
        </div>
      </div>
    </>
  );
}

export default X;
