import React from 'react';
import { TouchableHighlightProperties, ViewStyle, StyleProp } from 'react-native';
import { ButtonPropsType } from './PropsType';
import buttonStyle from './style/index.native';
export interface ButtonProps extends ButtonPropsType, TouchableHighlightProperties {
    styles?: typeof buttonStyle;
    activeStyle?: StyleProp<ViewStyle>;
    onClick?: (_?: any) => void;
}
export default class Button extends React.Component<ButtonProps, any> {
    static defaultProps: {
        pressIn: boolean;
        disabled: boolean;
        loading: boolean;
        onClick: (_?: any) => void;
        onPressIn: (_?: any) => void;
        onPressOut: (_?: any) => void;
        onShowUnderlay: (_?: any) => void;
        onHideUnderlay: (_?: any) => void;
        styles: {
            [x: string]: import("react-native").RegisteredStyle<any>;
        };
    };
    constructor(props: ButtonProps);
    onPressIn: (...arg: any[]) => void;
    onPressOut: (...arg: any[]) => void;
    onShowUnderlay: (...arg: any[]) => void;
    onHideUnderlay: (...arg: any[]) => void;
    render(): JSX.Element;
}
