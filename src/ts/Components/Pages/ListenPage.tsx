import { BaseConfigurableComponent } from "@Components/Pages/Aux/BaseConfigurableComponent";
import { SoundCloudComponent } from "@Components/Pages/Aux/SoundCloud";
import { ISoundCloudConfig } from "@Redux/Interfaces/IContentConfig";
import { IPage, IStore } from "@Redux/Interfaces/IStore";
import { ListenPage } from "@Redux/ContentConfigs";
import CSS from "@Sass/styles.scss";
import React from "react";
import { connect } from "react-redux";

class ListenComponent extends BaseConfigurableComponent<ISoundCloudConfig> {
    constructor(props: any) {
        super(props);

        this.state = {
            trackIds: []
        };
    }

    protected _render() {
        return (
            <div className={ CSS.listenPage }>
                { this.state.trackIds.map(trackId => <SoundCloudComponent key={ trackId } trackId={ trackId } />) }
            </div>
        );
    }
}

function mapStateToProps(state: IStore): IPage {
    return state.pages.filter(page => page.pageId === ListenPage.pageId)[0];
}

const ConnectedAboutPage = connect(mapStateToProps)(ListenComponent);
export { ConnectedAboutPage as ListenComponent };

