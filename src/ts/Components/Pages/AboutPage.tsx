import CSS from "@Sass/styles.scss";
import { Spinner } from "@Components/Spinner";
import { IAboutConfig } from "@Redux/Interfaces/IPageConfigs";
import { IPage, IStore } from "@Redux/Interfaces/IStore";
import React from "react";
import { connect } from "react-redux";
import { AboutPage } from "@Redux/Pages";
import { PageContentWrapper } from "@Components/Pages/PageContentWrapper";

class AboutComponent extends React.PureComponent<IPage, IAboutConfig> {
    constructor(props: any) {
        super(props);

        this.state = {
            imageSrc: "",
            textContent: "Loading..."
        };
    }

    public componentWillMount() {
        if (!this.props.fetchedConfig) return;

        this.props.fetchedConfig
            .then(aboutConfig => {
                this.setState({ ...aboutConfig as IAboutConfig });
            });
    }

    public render() {
        return (
            <PageContentWrapper wrappedPageId={ this.props.pageId }>
                {
                    this.state.textContent === ""
                        ? <Spinner />
                        : (
                            <div className={ CSS.aboutPage }>
                                <img src={ this.state.imageSrc } />
                                { this.state.textContent }
                            </div>
                        )
                }
            </PageContentWrapper>
        );
    }
}

function mapStateToProps(state: IStore): IPage {
    return state.pages.filter(page => page.pageId === AboutPage.pageId)[0];
}

const ConnectedAboutPage = connect(mapStateToProps)(AboutComponent);
export { ConnectedAboutPage as AboutComponent };
