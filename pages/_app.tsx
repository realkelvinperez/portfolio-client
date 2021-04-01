import { Component } from "react";

export default class _app extends Component<{ Component: any, pageProps: any }> {
    render() {
        let {Component, pageProps} = this.props;
        return <Component {...pageProps} />
    }
}
