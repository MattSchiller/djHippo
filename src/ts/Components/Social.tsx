import { typedFetch } from "@Helpers/Fetch";
import { Socials } from "@Redux/ContentConfigs";
import { ISocial, ISocialsConfig } from "@Redux/Interfaces/IContentConfig";
import CSS from "@Sass/styles.scss";
import React from "react";

export class SocialComponent extends React.PureComponent<{}, ISocialsConfig> {
    constructor(props: any) {
        super(props);

        this.state = {
            socials: []
        };
    }

    public componentWillMount() {
        const configUrl: string | undefined = Socials.configUrl;
        const fetchedConfig = configUrl ? typedFetch<ISocialsConfig>(configUrl) : undefined;

        console.log("fetchedConfig:", fetchedConfig)
        if (!fetchedConfig) return;

        fetchedConfig
            .then(socialConfig => {
                this.setState({ ...socialConfig });
            });
    }

    public render() {
        return (
            <div className={ CSS.social }>
                { this.state.socials.map(this._renderSocial) }
            </div>
        );
    }

    private _renderSocial(social: ISocial): JSX.Element {
        return (
            <a href={ social.link } target={ "_blank" }>
                <img src={ social.icon } />
            </a>
        );
    }
}
