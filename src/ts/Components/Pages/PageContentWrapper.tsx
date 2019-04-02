import { IActivePageProps, IStore } from "@Redux/Interfaces/IStore";
import CSS from "@Sass/styles.scss";
import React from "react";
import { connect } from "react-redux";

interface IPageContentWrapper extends IActivePageProps {
    wrappedPageId: string;
}

class PageContentWrapper extends React.PureComponent<IPageContentWrapper> {
    public render() {
        const className = this.props.activePageId === this.props.wrappedPageId
            ? ""
            : CSS.hidden;

        return (
            <div className={ className } >
                { this.props.children }
            </div>
        );
    }
}

function mapStateToProps(state: IStore): IActivePageProps {
    return {
        activePageId: state.activePageId
    };
}

const ConnectedPageContentWrapper = connect(mapStateToProps)(PageContentWrapper);
export { ConnectedPageContentWrapper as PageContentWrapper };

