import PropTypes from 'prop-types';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { PaginationPropsType, PaginationState } from './PropsType';
import { IPaginationStyle } from './style/index.native';
export interface PaginationNativeProps extends PaginationPropsType {
    styles?: IPaginationStyle;
    style?: StyleProp<ViewStyle>;
    indicatorStyle?: StyleProp<ViewStyle>;
}
export default class Pagination extends React.Component<PaginationNativeProps, PaginationState> {
    static defaultProps: {
        mode: string;
        current: number;
        total: number;
        simple: boolean;
        onChange: () => void;
        indicatorStyle: null;
        styles: {
            [x: string]: import("react-native").RegisteredStyle<any>;
        };
    };
    static contextTypes: {
        antLocale: PropTypes.Requireable<object>;
    };
    constructor(props: PaginationNativeProps);
    componentWillReceiveProps(nextProps: PaginationNativeProps): void;
    onChange(p: number): void;
    render(): JSX.Element;
}
