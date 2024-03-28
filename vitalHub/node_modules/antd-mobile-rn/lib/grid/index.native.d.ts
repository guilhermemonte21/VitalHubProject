import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { CarouselProps } from "../carousel/index.native";
import { GridPropsType } from "./PropsType";
export interface GridProps extends GridPropsType {
    styles?: any;
    itemStyle?: StyleProp<ViewStyle>;
    carouselProps?: CarouselProps;
}
export default class Grid extends React.Component<GridProps, any> {
    static defaultProps: {
        data: never[];
        hasLine: boolean;
        isCarousel: boolean;
        columnNum: number;
        carouselMaxRow: number;
        styles: {
            [x: string]: import("react-native").RegisteredStyle<any>;
        };
        itemStyle: {};
        carouselProps: {};
    };
    getFlexItemStyle(columnNum: number): {
        height: number;
        borderRightWidth: number;
    };
    render(): JSX.Element;
}
