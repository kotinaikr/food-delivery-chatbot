import React from "react";
import { useSelector } from "react-redux";

import { selectIsGlobalLoading } from "../../redux/selectors/appSelectors";

import "./GlobalLoader.scss";

const GlobalLoader = () => {
  const isLoading = useSelector(selectIsGlobalLoading);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="global-loader" role="status" aria-live="polite">
      <div className="global-loader__spinner" />
      <span>Loading...</span>
    </div>
  );
};

export default GlobalLoader;
