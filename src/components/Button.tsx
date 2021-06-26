/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // eslint-disable-next-line react/require-default-props
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`button ${isOutlined && 'outlined'}`}
      {...props}
    />
  );
}
