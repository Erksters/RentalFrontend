import React from "react";
import { WaveLoading } from "react-loadingg";
import { Button } from "react-bootstrap";

const Loading = (props) => {
  const minHeight = window.screen.height;
  return (
    <>
      <div className="centerDiv">
        <WaveLoading color="black" size="large" speed=".9" />
      </div>

      <div className="d-none d-lg-block">
        <div className="p-2" style={{ textAlign: "center" }}>
          <Button href="/" size="lg">
            Return Home
          </Button>
        </div>
      </div>

    </>
  );
};

export default Loading;
