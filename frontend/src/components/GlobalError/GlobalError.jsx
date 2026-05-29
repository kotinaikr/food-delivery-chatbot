import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearGlobalError } from "../../redux/slices/appSlice";
import { selectGlobalError } from "../../redux/selectors/appSelectors";

import "./GlobalError.scss";

const GlobalError = () => {
  const dispatch = useDispatch();
  const globalError = useSelector(selectGlobalError);

  if (!globalError) {
    return null;
  }

  return (
    <div className="global-error" role="alert">
      <p>{globalError}</p>
      <button
        type="button"
        className="global-error__close"
        onClick={() => dispatch(clearGlobalError())}
        aria-label="Dismiss error"
      >
        ×
      </button>
    </div>
  );
};

export default GlobalError;
