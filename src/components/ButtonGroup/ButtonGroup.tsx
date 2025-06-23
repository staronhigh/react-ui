import React, { Children, isValidElement, cloneElement } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import './buttonGroup.scss';


export interface ButtonGroupProps {
  children: React.ReactNode;
  justify?: string;
}

export const ButtonGroup = ({
  children,
  justify = "center",
}: ButtonGroupProps) => {
  const style = css`
    display: flex;
        justify-content: ${justify};
  `;

  return (
    <div className="btn-group" css={style}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
          });
        }
        return child;
      })}
    </div>
  );
};