import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { errorMessageOf, Logger } from "../utils";
import { pageMeta as errorPageMeta } from "../application/page-meta/error";
import { PageMeta } from "../application/types";
import { httpStatusCodes } from "../utils/http-status-codes";

const ErrorPage = dynamic(() => import("../ui/templates/error-page"), {
    ssr: false,
});

type ErrorProps = {
    pageMeta?: PageMeta;
    statusCode: keyof typeof httpStatusCodes;
};
const Error: NextPage<ErrorProps> = ({ statusCode, pageMeta }: ErrorProps) => {
    const error =
        statusCode in httpStatusCodes
            ? {
                  description: httpStatusCodes[statusCode],
                  title: httpStatusCodes[statusCode],
              }
            : {
                  description: httpStatusCodes[500],
                  title: httpStatusCodes[500],
              };
    const meta = useMemo(
        () => pageMeta ?? errorPageMeta(error),
        [error, pageMeta]
    );
    return <ErrorPage pageMeta={meta}></ErrorPage>;
};

Error.getInitialProps = async ({ err, req, res }) => {
    const message = errorMessageOf(err);
    const statusCode = (res?.statusCode ??
        err?.statusCode ??
        404) as keyof typeof httpStatusCodes;
    Logger.warn({
        message: JSON.stringify({ path: req?.url, statusCode, message }),
        callSite: {
            file: __filename,
            function: Error.getInitialProps?.name,
        },
    });
    return { statusCode };
};

export default Error;
