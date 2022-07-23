import React from "react";

import Header from "./Header";

function Layout(props) {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      <Header />
      <div className="h-full w-full bg-white dark:bg-neutral-700 bg-center bg-cover bg-no-repeat flex flex-col">
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
