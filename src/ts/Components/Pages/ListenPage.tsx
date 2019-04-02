import { Spinner } from "@Components/Spinner";
import { AboutPage, ListenPage } from "@Redux/Pages";
import { ISoundCloudConfig } from "@Redux/Interfaces/IPageConfigs";
import { IPage, IStore } from "@Redux/Interfaces/IStore";
import CSS from "@Sass/styles.scss";
import React from "react";
import { connect } from "react-redux";
import { SoundCloudComponent } from "@Components/SoundCloud";
import { PageContentWrapper } from "@Components/Pages/PageContentWrapper";

class ListenComponent extends React.PureComponent<IPage, ISoundCloudConfig> {
    constructor(props: any) {
        super(props);

        this.state = {
            trackIds: []
        };
    }

    public componentWillMount() {
        if (!this.props.fetchedConfig) return;

        this.props.fetchedConfig
            .then(soundCloudConfig => {
                this.setState({ ...soundCloudConfig as ISoundCloudConfig });
            });
    }

    public render() {
        return (
            <PageContentWrapper wrappedPageId={ ListenPage.pageId }>
                <div className={ CSS.listenPage }>
                    { this.state.trackIds.map(trackId => <SoundCloudComponent key={ trackId } trackId={ trackId } />) }
                </div>
            </PageContentWrapper>

        );
    }
}

function mapStateToProps(state: IStore): IPage {
    return state.pages.filter(page => page.pageId === ListenPage.pageId)[0];
}

const ConnectedAboutPage = connect(mapStateToProps)(ListenComponent);
export { ConnectedAboutPage as ListenComponent };
