import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Item from './ListItem.native';
import { ListPropsType } from './PropsType';
import listStyle from './style/index.native';
export interface ListProps extends ListPropsType {
    styles?: typeof listStyle;
    style?: StyleProp<ViewStyle>;
}
export default class List extends React.Component<ListProps, any> {
    static Item: typeof Item;
    static defaultProps: {
        styles: {
            [x: string]: import("react-native").RegisteredStyle<any>;
        };
    };
    render(): JSX.Element;
}
