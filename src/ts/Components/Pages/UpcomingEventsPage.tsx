import { WrapWithSpinnerComponent } from "@Components/Pages/Aux/WrapWithSpinnerComponent";
import { Spinner } from "@Components/Pages/Aux/Spinner";
import { IAboutConfig, IUpcomingEventsConfig, IUpcomingEvent } from "@Redux/Interfaces/IContentConfig";
import { IPage, IStore } from "@Redux/Interfaces/IStore";
import { UpcomingEventsPage } from "@Redux/ContentConfigs";
import CSS from "@Sass/styles.scss";
import React from "react";
import { connect } from "react-redux";
import { BaseConfigurableComponent } from "@Components/Pages/Aux/BaseConfigurableComponent";

class UpcomingEventsComponent extends BaseConfigurableComponent<IUpcomingEventsConfig> {
    constructor(props: any) {
        super(props);

        this.state = {
            events: []
        };
    }

    protected _renderCondition(): boolean {
        return this.state.events.length !== 0;
    }

    protected _render() {
        return (
            <div className={ CSS.aboutPage }>
                { this.state.events.map(this._renderEvent) }
            </div>
        );
    }

    private _renderEvent(event: IUpcomingEvent): JSX.Element {
        return (
            <div className={ CSS.upcomingEvent }>
                { event.date }
                { event.name }
                { event.location }
                { event.tickets }
            </div>
        );
    }
}

function mapStateToProps(state: IStore): IPage {
    return state.pages.filter(page => page.pageId === UpcomingEventsPage.pageId)[0];
}

const ConnectedUpcomingEventsPage = connect(mapStateToProps)(UpcomingEventsComponent);
export { ConnectedUpcomingEventsPage as UpcomingEventsComponent };

