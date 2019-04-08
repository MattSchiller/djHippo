import { BaseConfigurableComponent } from "@Components/Pages/Aux/BaseConfigurableComponent";
import { IContactConfig, IContactEmail } from "@Redux/Interfaces/IContentConfig";
import { IPage, IStore } from "@Redux/Interfaces/IStore";
import { ContactPage } from "@Redux/ContentConfigs";
import CSS from "@Sass/styles.scss";
import React from "react";
import { connect } from "react-redux";
import { Divider } from "@Components/Pages/Aux/Divider";
import { getPageFromPageId } from "@Redux/Store";

class ContactComponent extends BaseConfigurableComponent<IContactConfig> {
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
                { this.state.contactEmails.map(this._renderContact) }
            </div>
        );
    }

    private _renderContact(
        contactEmail: IContactEmail,
        index: number,
        contactsArray: IContactEmail[]
    ): Array<JSX.Element | false> {
        return [
            index === 0 && <Divider className={ CSS.halfWidth } />,
            (
                <div
                    key={ contactEmail.label }
                    className={ CSS.contactSection }
                >
                    <div className={ CSS.contactLabel } >
                        { contactEmail.label }
                    </div>
                    <a href={ `mailto:${contactEmail.email}` } target={ "_blank" } >
                        { contactEmail.email }
                    </a>
                </div>
            ),
            (index !== contactsArray.length && <Divider className={ CSS.halfWidth } />)
        ];
    }
}

function mapStateToProps(state: IStore): IPage {
    return getPageFromPageId(ContactPage.pageId);
}

const ConnectedContactPage = connect(mapStateToProps)(ContactComponent);
export { ConnectedContactPage as ContactComponent };
