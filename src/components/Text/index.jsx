import React from "react";

const sizes = {
  xs: "text-[9px] font-normal",
  lg: "text-base font-normal",
  s: "text-xs font-light",
  "2xl": "text-[25px] font-light md:text-[23px] sm:text-[21px]",
  xl: "text-lg font-light",
  md: "text-sm font-light",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_dd font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
