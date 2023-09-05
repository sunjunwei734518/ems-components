import { Button } from 'antd';
import React from 'react';
import { EMSButtonProps } from './type';

const EMSButton: React.FC<EMSButtonProps> = (props) => {
  const { children, ...otherProps } = props;

  return <Button {...otherProps}>{children}</Button>;
};

export default EMSButton;
