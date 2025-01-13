import React from "../lib/react.js";
import Switch from "./switch";

function App(props: { isOn: boolean; render: () => void }) {
  return React.createElement(
    "div",
    {
      className: "app",
    },

    React.createElement(Switch, {
      id: "switch",
      status: props.isOn,
      "aria-label": "Toggle switch",
      onClick: () => {
        props.render();
      },
    })
  );
}

export default App;
