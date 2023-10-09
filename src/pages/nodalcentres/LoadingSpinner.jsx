import React from "react";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <RingLoader css={override} size={150} color={"#123abc"} loading={true} />
    </div>
  );
};

export default LoadingSpinner;
