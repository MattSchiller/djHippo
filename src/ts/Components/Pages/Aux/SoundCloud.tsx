import React from "react";
import { soundCloudUrlPrefix, soundCloudUrlSuffix } from "@Helpers/Constants";
import { Spinner } from "@Components/Pages/Aux/Spinner";
import CSS from "@Sass/styles.scss";

interface ISoundCloudComponentProps {
    trackId: string;
}

interface ISoundCloudComponentState {
    isLoaded: boolean;
}

export class SoundCloudComponent extends React.PureComponent<ISoundCloudComponentProps, ISoundCloudComponentState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isLoaded: false
        };
    }

    public render() {
        const spinnerClass: string = !this.state.isLoaded ? "" : CSS.hidden;
        const iFrameClass: string = this.state.isLoaded ? "" : CSS.hidden;

        return [
            <Spinner key={ "spinner" } className={ spinnerClass } />,
            (
                <iframe
                    key={ "iframe" }
                    className={ iFrameClass }
                    scrolling={ "no" }
                    allow={ "autoplay" }
                    frameBorder={ "0" }
                    onLoad={ this._onLoad }
                    src={ `${soundCloudUrlPrefix}${this.props.trackId}${soundCloudUrlSuffix}` }
                />
            )
        ];
    }

    private _onLoad = () => this.setState({ isLoaded: true });
}
