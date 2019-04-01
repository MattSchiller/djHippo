import { IAboutConfig } from "@Redux/Interfaces/IPageConfigs";
import { IStore, IPage } from "@Redux/Interfaces/IStore";
import CSS from "@Sass/styles.scss";
import React from "react";
import { connect } from "react-redux";
import { Spinner } from "@Components/Spinner";

export class AboutComponent extends React.PureComponent<IPage, IAboutConfig> {
    constructor(props: any) {
        super(props);

        this.state = {
            imageSrc: "",
            textContent: "Loading..."
        };
    }

    // public componentWillMount() {
    //     if (!this.props.fetchedConfig) return;

    //     this.props.fetchedConfig
    //         .then(aboutConfig => {
    //             this.setState({ ...aboutConfig });
    //         });
    // }

    public render() {
        console.log("STATE:", this.state)
        return (
            this.state.textContent === ""
                ? <Spinner />
                : (
                    <div >
                        {/* <img src={ this.state.imageSrc } /> */ }
                        { this.state.textContent }
                    </div>
                )
        );
    }
}
