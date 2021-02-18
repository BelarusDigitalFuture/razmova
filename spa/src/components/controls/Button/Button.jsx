import React from "react";
import {Button as MUIButton} from "@material-ui/core";
import styles from "./Button.module.scss";
import cn from "classnames";

const Button = ({ children, className, primary, secondary, ...rest }) => {
    const color = primary ? 'primary' : (secondary ? 'secondary' : undefined);
  return (
    <MUIButton 
        className={cn({ [styles.primary]: primary, [styles.secondary]: secondary  }, className)}
        color={color}
        {...rest}>
        {children}
    </MUIButton>
  );
};

export { Button };
