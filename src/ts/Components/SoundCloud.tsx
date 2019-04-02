import React from "react";
import { soundCloudUrlPrefix, soundCloudUrlSuffix } from "@Helpers/Constants";

interface ISoundCloudComponent {
    trackId: string;
}

export class SoundCloudComponent extends React.PureComponent<ISoundCloudComponent> {
    render() {
        return (
            <iframe
                scrolling={ "no" }
                allow={ "autoplay" }
                frameBorder={ "0" }
                src={ `${soundCloudUrlPrefix}${this.props.trackId}${soundCloudUrlSuffix}` }
            />
        );
    }
}
