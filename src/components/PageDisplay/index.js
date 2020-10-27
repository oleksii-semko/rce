import React, { useContext } from "react";
import { AppContext } from "../context";
import ContentSection from "../ContentSection"

/**
 * Display component
 */
const PageDisplay = () => {
  const { state } = useContext(AppContext);
  console.log('PageDisplay', state);

  const items = state.map((config, idx) => (
    <ContentSection key={idx} {...config} />
  ));

  return (
    <div className="page-display">
      {items}
    </div>
  );
}

export default PageDisplay;
