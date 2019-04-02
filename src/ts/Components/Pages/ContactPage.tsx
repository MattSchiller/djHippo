import { PageContentWrapper } from "@Components/Pages/PageContentWrapper";
import { Spinner } from "@Components/Spinner";
import { IContactConfig, IContactEmail } from "@Redux/Interfaces/IPageConfigs";
import { IPage, IStore } from "@Redux/Interfaces/IStore";
import { ContactPage } from "@Redux/Pages";
import CSS from "@Sass/styles.scss";
import React from "react";
import { connect } from "react-redux";

class ContactComponent extends React.PureComponent<IPage, IContactConfig> {
    constructor(props: any) {
        super(props);

        this.state = {
            contactEmails: []
        };
    }

    public componentWillMount() {
        if (!this.props.fetchedConfig) return;

        this.props.fetchedConfig
            .then(contactConfig => {
                console.log(contactConfig)
                this.setState({ ...contactConfig as IContactConfig });
            });
    }

    public render() {
        return (
            <PageContentWrapper wrappedPageId={ this.props.pageId }>
                {
                    this.state.contactEmails.length === 0
                        ? <Spinner />
                        : (
                            <div className={ CSS.contactPage }>
                                { this.state.contactEmails.map(this._renderContactLink) }
                            </div>
                        )
                }
            </PageContentWrapper>
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

