import { Menu } from "@Components/Menu";
import { AboutComponent } from "@Components/Pages/AboutPage";
import { ListenComponent } from "@Components/Pages/ListenPage";
import { getTrimmedPath as getPageIdFromPath, history } from "@Helpers/History";
import { Actions } from "@Redux/Actions";
import { getPages, isValidPageId } from "@Redux/Store";
import { Location } from "history";
import React from "react";
import { ContactComponent } from "@Components/Pages/ContactPage";
import { UpcomingEventsComponent } from "@Components/Pages/UpcomingEventsPage";

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
            history.replace(`/${getPages()[0].pageId}`);
    }

    public render() {
        return (
            <div >
                <Menu />
                <AboutComponent />
                <ListenComponent />
                <ContactComponent />
                <UpcomingEventsComponent />
            </div>
        );
    }
}

