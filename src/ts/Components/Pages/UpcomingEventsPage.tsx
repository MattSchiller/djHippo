import { BaseConfigurableComponent } from "@Components/Pages/Aux/BaseConfigurableComponent";
import { Divider } from "@Components/Pages/Aux/Divider";
import { dateSuffices, monthNames } from "@Helpers/Constants";
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
                { this._renderTBA() }
            </div>
        );
    }

    private _renderEvent = (event: IUpcomingEvent, index: number, eventsArray: IUpcomingEvent[]) => {
        return [
            index === 0 ? <Divider key={ "startingDiv" } /> : null,
            (
                <div key={ "event" } className={ CSS.upcomingEvent }>
                    { this._renderEventInfo(event) }
                    <div className={ CSS.upcomingEventButtons }>
                        { this._renderButton(event.event, "Event") }
                        { this._renderButton(event.tickets, "Tickets") }
                    </div>
                </div>
            ),
            <Divider key={ "closingDiv" } />
        ];
    }

    private _renderEventInfo = (event: IUpcomingEvent) => {
        return (
            <div className={ CSS.eventInfo }>
                <div>{ parseDate(event.date.toString()) }</div>
                <div className={ CSS.eventSubInfo }>
                    <div>{ event.name }</div>
                    <div>{ event.location }</div>
                </div>
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

    private _renderTBA = () => {
        return (
            <div className={ CSS.eventsTba }>
                MORE SHOWS TBA
            </div>
        );
    }
}

function parseDate(date: string): string {
    // const year: string = date.substr(0, 4);
    const month: number = Number(date.substr(4, 2));
    const day: string = date.substr(6, 2);

    return `${monthNames[month - 1]} ${day + dateSuffices[day.substr(-1, 1)]}`;
}

function mapStateToProps(state: IStore): IPage {
    return state.pages.filter(page => page.pageId === UpcomingEventsPage.pageId)[0];
}

const ConnectedUpcomingEventsPage = connect(mapStateToProps)(UpcomingEventsComponent);
export { ConnectedUpcomingEventsPage as UpcomingEventsComponent };
