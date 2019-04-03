import { BaseConfigurableComponent } from "@Components/Pages/Aux/BaseConfigurableComponent";
import { UpcomingEventsPage } from "@Redux/ContentConfigs";
import { IUpcomingEvent, IUpcomingEventsConfig } from "@Redux/Interfaces/IContentConfig";
import { IPage, IStore } from "@Redux/Interfaces/IStore";
import CSS from "@Sass/styles.scss";
import React from "react";
import { connect } from "react-redux";

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
            <div className={ CSS.upcomingEventsPage }>
                { this.state.events.map(this._renderEvent) }
            </div>
        );
    }

    private _renderEvent = (event: IUpcomingEvent) => {
        return (
            <div className={ CSS.upcomingEvent }>
                { event.date }
                { event.name }
                { event.location }
                { this._renderButton(event.event, "Event") }
                { this._renderButton(event.tickets, "Tickets") }
            </div>
        );
    }

    private _renderButton = (link: string | undefined, caption: string | undefined) => {
        if (!link)
            return null;

        return (
            <a href={ link } target={ "_blank" }>
                <button>
                    { caption }
                </button>
            </a>
        );

    }
}

function mapStateToProps(state: IStore): IPage {
    return state.pages.filter(page => page.pageId === UpcomingEventsPage.pageId)[0];
}

const ConnectedUpcomingEventsPage = connect(mapStateToProps)(UpcomingEventsComponent);
export { ConnectedUpcomingEventsPage as UpcomingEventsComponent };

