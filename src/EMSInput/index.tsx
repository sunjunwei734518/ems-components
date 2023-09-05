import { Input } from 'antd';
import React from 'react';
import { EMSInputProps } from './type';

const EMSInput: React.FC<EMSInputProps> = (props) => {
  const { children, ...otherProps } = props;

  return <Input {...otherProps}>{children}</Input>;
};

export default EMSInput;
