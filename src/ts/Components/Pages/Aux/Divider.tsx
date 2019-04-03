import CSS from "@Sass/styles.scss";
import React from "react";

interface IDividerProps {
    className?: string;
}

export class Divider extends React.PureComponent<IDividerProps> {
    public render() {
        const className: string = `${this.props.className} ${CSS.divider}`;
        return (
            <div className={ className } />
        );
    }
}
