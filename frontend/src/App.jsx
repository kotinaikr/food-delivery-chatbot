import React from "react";

import ChatBot from "./components/ChatBot/ChatBot";
import GlobalError from "./components/GlobalError/GlobalError";
import GlobalLoader from "./components/GlobalLoader/GlobalLoader";

const App = () => {
  return (
    <>
      <GlobalLoader />
      <GlobalError />
      <ChatBot />
    </>
  );
};

export default App;
