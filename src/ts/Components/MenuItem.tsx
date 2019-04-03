import { historyPush } from "@Helpers/History";
import { IPage } from "@Redux/Interfaces/IStore";
import CSS from "@Sass/styles.scss";
import React from "react";

interface IMenuItemProps extends IPage {
    isSelected: boolean;
}

export class MenuItem extends React.PureComponent<IMenuItemProps> {
    public render() {
        return (
            <li
                onClick={ this._onClick }
                className={ this._getClassName() }
            >
                { this.props.title }
            </li >
        );
    }

    private _getClassName = () => this.props.isSelected ? CSS.selected : "";

    private _onClick = () => historyPush(this.props.pageId);
}
