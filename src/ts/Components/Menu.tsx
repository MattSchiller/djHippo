import { MenuItem } from "@Components/MenuItem";
import { headerLogoUrl } from "@Helpers/Constants";
import { historyPush } from "@Helpers/History";
import { ListenPage } from "@Redux/ContentConfigs";
import { IActivePageProps, IPage, IStore } from "@Redux/Interfaces/IStore";
import { getActivePageId, getPages } from "@Redux/Store";
import CSS from "@Sass/styles.scss";
import React from "react";
import { connect } from "react-redux";

interface IMenuProps extends IActivePageProps {
    items: IPage[];
}

export const homePageId: string = ListenPage.pageId;

class Menu extends React.PureComponent<IMenuProps> {
    public render() {
        return (
            <nav>
                <img src={ headerLogoUrl } onClick={ navigateToHomePage } />
                <div className={ CSS.tabs }>
                    { this.props.items.map(this._renderMenuItem, this) }
                </div>
            </nav>
        );
    }

    private _renderMenuItem(menuItem: IPage, key: number): JSX.Element {
        return (
            <MenuItem
                key={ key }
                { ...menuItem }
                isSelected={ menuItem.pageId === this.props.activePageId }
            />
        );
    }
}

function navigateToHomePage() {
    historyPush(homePageId);
}

function mapStateToProps(state: IStore): IMenuProps {
    return {
        items: getPages(),
        activePageId: getActivePageId(),
    };
}

const ConnectedMenu = connect(mapStateToProps)(Menu);
export { ConnectedMenu as Menu };
