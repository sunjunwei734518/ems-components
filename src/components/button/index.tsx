import * as React from 'react';
// 使用antd的Button和ButtonProps
// 为了不和我们的Button冲突，需要改导出名
import {Button as AntdButton, ButtonProps as AntdButtonProps} from 'antd';
// 引入less样式
import './index.less';

interface ButtonProps extends AntdButtonProps {
}

const Button: React.FC<ButtonProps> = (props) => {
    const {children, ...rest} = props;
    // 使用AntdButton
    return <AntdButton {...rest}>{children}</AntdButton>
}

export default Button;
