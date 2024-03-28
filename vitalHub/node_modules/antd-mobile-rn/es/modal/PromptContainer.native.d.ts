import PropTypes from 'prop-types';
import React from 'react';
import { TextStyle } from 'react-native';
import { CallbackOrActions } from './PropsType';
import { IPromptStyle } from './style/prompt.native';
export interface PropmptContainerProps {
    title: React.ReactNode;
    message?: React.ReactNode;
    type?: 'default' | 'login-password' | 'secure-text';
    defaultValue?: string;
    actions: CallbackOrActions<TextStyle>;
    onAnimationEnd?: (visible: boolean) => void;
    styles?: IPromptStyle;
    placeholders?: string[];
}
export default class PropmptContainer extends React.Component<PropmptContainerProps, any> {
    static defaultProps: {
        type: string;
        defaultValue: string;
        styles: {
            [x: string]: import("react-native").RegisteredStyle<any>;
        };
    };
    static contextTypes: {
        antLocale: PropTypes.Requireable<object>;
    };
    constructor(props: PropmptContainerProps);
    onClose: () => void;
    onChangeText(type: string, value: string): void;
    render(): JSX.Element;
}
