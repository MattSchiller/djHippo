import { BaseConfigurablePage } from "@Components/Pages/BaseConfigurablePage";
import { IAboutConfig } from "@Redux/Interfaces/IPageConfigs";
import { IPage, IStore } from "@Redux/Interfaces/IStore";
import { AboutPage } from "@Redux/Pages";
import CSS from "@Sass/styles.scss";
import React from "react";
import { connect } from "react-redux";

class AboutComponent extends BaseConfigurablePage<IAboutConfig> {
    constructor(props: any) {
        super(props);

        this.state = {
            imageSrc: "",
            textContent: "Loading..."
        };
    }

    protected _renderCondition(): boolean {
        return this.state.textContent !== "";
    }

    protected _render() {
        return (
            <div className={ CSS.aboutPage }>
                <img src={ this.state.imageSrc } />
                { this.state.textContent }
            </div>
        );
    }
}

function mapStateToProps(state: IStore): IPage {
    return state.pages.filter(page => page.pageId === AboutPage.pageId)[0];
}

const ConnectedAboutPage = connect(mapStateToProps)(AboutComponent);
export { ConnectedAboutPage as AboutComponent };

