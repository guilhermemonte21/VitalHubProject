import React from 'react';
import { TabBarProps } from './PropsType';
import { ITabBarStyle } from './style/index.native';
export interface TabBarNativeProps extends TabBarProps {
    styles?: ITabBarStyle;
}
declare class TabBar extends React.Component<TabBarNativeProps, any> {
    static defaultProps: {
        barTintColor: string;
        tintColor: string;
        unselectedTintColor: string;
        styles: {
            [x: string]: import("react-native").RegisteredStyle<any>;
        };
    };
    static Item: any;
    getPanes(content: boolean): any[];
    render(): JSX.Element;
}
export default TabBar;
