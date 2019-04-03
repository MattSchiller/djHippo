import { homePageId, Menu } from "@Components/Menu";
import { AboutComponent } from "@Components/Pages/AboutPage";
import { ContactComponent } from "@Components/Pages/ContactPage";
import { ListenComponent } from "@Components/Pages/ListenPage";
import { UpcomingEventsComponent } from "@Components/Pages/UpcomingEventsPage";
import { SocialComponent } from "@Components/Social";
import { getTrimmedPath as getPageIdFromPath, history } from "@Helpers/History";
import { Actions } from "@Redux/Actions";
import { isValidPageId } from "@Redux/Store";
import CSS from "@Sass/styles.scss";
import { Location } from "history";
import React from "react";

export class App extends React.PureComponent {
    public componentWillMount() {
        this._initializePageNavigation();
    }

    private _initializePageNavigation() {
        history.listen((location: Location) => {
            const _inboundPageId = getPageIdFromPath(location);

            if (isValidPageId(_inboundPageId))
                Actions.setActivePage({ pageId: _inboundPageId });
            else
                history.block();
        });

        // Initial re-route upon entry to site.
        const inboundPageId = getPageIdFromPath(history.location);

        if (isValidPageId(inboundPageId))
            Actions.setActivePage({ pageId: inboundPageId });
        else
            history.replace(`/${homePageId}`);
    }

    public render() {
        return [
            <Menu />,
            <div className={ CSS.content } >
                <AboutComponent />
                <ListenComponent />
                <ContactComponent />
                <UpcomingEventsComponent />
            </div>,
            <SocialComponent />
        ];
    }
}

