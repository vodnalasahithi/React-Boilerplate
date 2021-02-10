import React from "react";

function higherOrder(component) {
  return React.cloneElement(component, {
    ...component.props,
    disabled: false,
  });
}

const HelloWorld = () => {
  return higherOrder(<button>Hello World</button>);
};

export default HelloWorld;
