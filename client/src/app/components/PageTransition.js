import React from "react";
import Transition from "./transition";

export default ({ children, animation, className, ...otherProps }) => {
  return (
    <Transition
      duration={"500ms"}
      eventHandlers={{
        mount: {
          className,
          style: { animationName: animation || "t-fade-in  " }
        }
      }}
      {...otherProps}
    >
      <div>{children}</div>
    </Transition>
  );
};
