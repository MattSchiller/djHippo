import { BaseConfigurablePage } from "@Components/Pages/BaseConfigurablePage";
import { IContactConfig, IContactEmail } from "@Redux/Interfaces/IPageConfigs";
import { IPage, IStore } from "@Redux/Interfaces/IStore";
import { ContactPage } from "@Redux/Pages";
import CSS from "@Sass/styles.scss";
import React from "react";
import { connect } from "react-redux";

class ContactComponent extends BaseConfigurablePage<IContactConfig> {
    constructor(props: any) {
        super(props);

        this.state = {
            contactEmails: []
        };
    }

    protected _renderCondition(): boolean {
        return this.state.contactEmails.length !== 0;
    }

    protected _render() {
        return (
            <div className={ CSS.contactPage }>
                { this.state.contactEmails.map(this._renderContactLink) }
            </div>
        );
    }

    private _renderContactLink(contactEmail: IContactEmail): JSX.Element {
        return (
            <div key={ contactEmail.label }>
                { contactEmail.label }{ `: ` }
                <a href={ `mailto:${contactEmail.email}` } target={ "_blank" } >
                    { contactEmail.email }
                </a>
            </div>
        );
    }
}

function mapStateToProps(state: IStore): IPage {
    return state.pages.filter(page => page.pageId === ContactPage.pageId)[0];
}

const ConnectedContactPage = connect(mapStateToProps)(ContactComponent);
export { ConnectedContactPage as ContactComponent };

