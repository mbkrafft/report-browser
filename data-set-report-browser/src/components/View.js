import React from "react";

const createMarkup = h => {
  return { __html: h };
};

const View = props => {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "20px",
        backgroundColor: "white"
      }}
      dangerouslySetInnerHTML={createMarkup(screenCoverData)}
    />
  );
};

export default View;
