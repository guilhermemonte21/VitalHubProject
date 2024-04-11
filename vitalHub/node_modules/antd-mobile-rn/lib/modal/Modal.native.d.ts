import PropTypes from 'prop-types';
import React from 'react';
import { LayoutChangeEvent, StyleProp, View, ViewStyle, TextStyle } from 'react-native';
import { ModalPropsType } from './PropsType';
import { IModalStyle } from './style/index.native';
export interface IModalNativeProps extends ModalPropsType<TextStyle> {
    styles?: IModalStyle;
    style?: StyleProp<ViewStyle>;
    bodyStyle?: StyleProp<ViewStyle>;
}
declare class AntmModal extends React.Component<IModalNativeProps, any> {
    static defaultProps: {
        visible: boolean;
        closable: boolean;
        maskClosable: boolean;
        style: {};
        bodyStyle: {};
        animationType: string;
        onClose(): void;
        footer: never[];
        transparent: boolean;
        popup: boolean;
        animateAppear: boolean;
        styles: {
            [x: string]: import("react-native").RegisteredStyle<any>;
        };
        operation: boolean;
    };
    static alert: any;
    static operation: any;
    static prompt: any;
    static contextTypes: {
        antLocale: PropTypes.Requireable<object>;
    };
    root: View | null;
    onFooterLayout: (e: LayoutChangeEvent) => void;
    saveRoot: (root: any) => void;
    render(): JSX.Element;
}
export default AntmModal;
