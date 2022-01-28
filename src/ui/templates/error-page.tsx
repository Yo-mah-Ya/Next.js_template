import React from "react";
import { Page } from "./page";
import { PageMeta } from "../../application/types";

const ErrorPage: React.FC<{ pageMeta: PageMeta }> = ({
    pageMeta,
    children,
}) => <Page pageMeta={pageMeta}>{children}</Page>;
export default ErrorPage;
