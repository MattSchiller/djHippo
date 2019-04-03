import { MenuItem } from "@Components/MenuItem";
import { IPage, IStore, IActivePageProps } from "@Redux/Interfaces/IStore";
import CSS from "@Sass/styles.scss";
import React from "react";
import { connect } from "react-redux";
import { getActivePageId, getPages } from "@Redux/Store";
import { headerLogoUrl } from "@Helpers/Constants";

interface IMenuProps extends IActivePageProps {
    items: IPage[];
}

class Menu extends React.PureComponent<IMenuProps> {
    public render() {
        return (
            <nav>
                <img src={ headerLogoUrl } />
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

function mapStateToProps(state: IStore) {
    return {
        items: getPages(),
        activePageId: getActivePageId(),
    };
}

const ConnectedMenu = connect(mapStateToProps)(Menu);
export { ConnectedMenu as Menu };
