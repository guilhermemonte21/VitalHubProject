import PropTypes from 'prop-types';
import React from 'react';
import { IPickerStyle } from '../picker/style/index.native';
import { DatePickerPropsType } from './PropsType';
export interface DatePickerNativeProps extends DatePickerPropsType {
    styles?: IPickerStyle;
    triggerTypes?: string;
}
export default class DatePicker extends React.Component<DatePickerNativeProps, any> {
    static defaultProps: {
        mode: string;
        triggerType: string;
        styles: {
            [x: string]: import("react-native").RegisteredStyle<any>;
        };
        minuteStep: number;
    };
    static contextTypes: {
        antLocale: PropTypes.Requireable<object>;
    };
    render(): JSX.Element;
}
