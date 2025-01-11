import React from "../lib/react.js";

interface SwitchProps {
  status: boolean;
}

function Switch({ status, ...restProps }: SwitchProps) {
  const classNames = `switch switch--${status ? "on" : "off"}`.trim();

  return React.createElement(
    "button",
    {
      role: "switch",
      className: classNames,
      ...restProps,
    },
    React.createElement("img", {
      role: "presentation",
      className: "knob-icon",
      src: "/assets/ico_knob.svg",
    })
  );
}

export default Switch;
