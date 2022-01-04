import React from "react";
import TopBar from "./TopBar";

const Wrapper: React.FC = ({ children }) => {
  return (
    <>
      <TopBar />
      <main>{children}</main>
    </>
  );
};

export default Wrapper;
