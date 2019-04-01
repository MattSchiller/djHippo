import { Menu } from "@Components/Menu";
import { getTrimmedPath as getPageIdFromPath, history } from "@Helpers/History";
import { Actions } from "@Redux/Actions";
import { isValidPageId, getPages, getPageFromPageId } from "@Redux/Store";
import CSS from "@Sass/styles.scss";
import { Location } from "history";
import React from "react";
import { Route, Router } from "react-router-dom";
import { Spinner } from "@Components/Spinner";
import { AboutPage } from "@Pages/Pages";
import { AboutComponent } from "@Components/About";

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
        const simTypeUrls = `/(|index.html|about|contact|projects)`;
        return (
            <div >
                <Menu key={ "menu" } />
                <Router history={ history } >
                    <div>
                        <Route
                            key={ "about" }
                            path={ `/${AboutPage.pageId}` }
                            component={ AboutComponent }
                            props={ getPageFromPageId(AboutPage.pageId) }
                        />
                    </div>
                </Router >
            </div>
        );
    }
}

