import { WrapWithSpinnerComponent } from "@Components/Pages/Aux/WrapWithSpinnerComponent";
import { Spinner } from "@Components/Pages/Aux/Spinner";
import { IPage } from "@Redux/Interfaces/IStore";
import React from "react";

export class BaseConfigurableComponent<T> extends React.PureComponent<IPage, T> {
    public componentWillMount() {
        if (!this.props.fetchedConfig) return;

        this.props.fetchedConfig
            .then(config => {
                this.setState({ ...(config as unknown) as T });
            });
    }

    public render() {
        return (
            <WrapWithSpinnerComponent wrappedPageId={ this.props.pageId }>
                {
                    this._renderCondition()
                        ? this._render()
                        : <Spinner />
                }
            </WrapWithSpinnerComponent>
        );
    }

    protected _renderCondition(): boolean {
        return true;
    }

    protected _render(): JSX.Element {
        return (<div />);
    }
}
