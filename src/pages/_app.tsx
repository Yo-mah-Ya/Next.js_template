import App from "next/app";
import type { AppProps, AppContext } from "next/app";
import withReduxSaga from "next-redux-saga";
import React, { ReactElement } from "react";
import "../ui/polyfill.js";
import { wrapper } from "../redux/store";
import { Logger } from "../utils";

const Page = ({ Component, pageProps }: AppProps): ReactElement => {
    Logger.info({ message: "_app: component" });
    return <Component {...pageProps} />;
};

Page.getInitialProps = async (appContext: AppContext) => {
    Logger.info({ message: "_app: getInitialProps1" });
    const appProps = await App.getInitialProps(appContext);
    Logger.info({ message: "_app: getInitialProps2" });

    return { ...appProps };
};
export default wrapper.withRedux(withReduxSaga(Page));
// export default Page;
