import { PageContentWrapper } from "@Components/Pages/PageContentWrapper";
import { Spinner } from "@Components/Spinner";
import { IPage } from "@Redux/Interfaces/IStore";
import React from "react";

export class BaseConfigurablePage<T> extends React.PureComponent<IPage, T> {
    public componentWillMount() {
        if (!this.props.fetchedConfig) return;

        this.props.fetchedConfig
            .then(config => {
                this.setState({ ...(config as unknown) as T });
            });
    }

    public render() {
        return (
            <PageContentWrapper wrappedPageId={ this.props.pageId }>
                {
                    this._renderCondition()
                        ? this._render()
                        : <Spinner />
                }
            </PageContentWrapper>
        );
    }

    protected _renderCondition(): boolean {
        return true;
    }

    protected _render(): JSX.Element {
        return (<div />);
    }
}
