import React from "react";
import { Parallax } from "react-parallax";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: "50px",
};
const image3 =
  "https://images.pexels.com/photos/1089455/pexels-photo-1089455.jpeg";
const image4 =
  "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg";

const Hero = () => {
  return (
    <div style={styles}>
      <Parallax
        bgImage={image3}
        strength={200}
        renderLayer={(percentage) => <div></div>}
        style={{ margin: 30 }}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            The clearest way into the Universe is through a forest wilderness.
          </div>
        </div>
      </Parallax>

      <Parallax
        bgImage={image4}
        style={{ margin: 30 }}
        strength={200}
        renderLayer={(percentage) => <div></div>}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            Login and Go to Profile for more options!!!
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Hero;
