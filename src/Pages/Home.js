import React from "react";
import { img } from "../Images/Image";

const Home = () => {
  return (
    <div className="Home row flex-lg-row">
      {img.map((item) => {
        return (
          <div className="col-sm-4">
            <p style={{ textAlign: "center" }}>{item.title}</p>
            <img src={item.src} className="image img-thumbnail" />
            <p style={{ textIndent: "25px" }}>{item.content}</p>
          </div>
        );
      })}
      {/* Footer */}
      <footer>All credit to Original Uploader</footer>
    </div>
  );
};

export default Home;
