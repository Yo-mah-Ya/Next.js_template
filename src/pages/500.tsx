import { NextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo } from "react";
import { pageMeta as errorPageMeta } from "../application/page-meta/error";
import { httpStatusCodes } from "../utils/http-status-codes";

const ErrorPage = dynamic(() => import("../ui/templates/error-page"), {
    ssr: false,
});

const ServerSideErrorPage: NextPage<undefined> = () => {
    const info = {
        description: httpStatusCodes[500],
        title: httpStatusCodes[500],
    };
    const meta = useMemo(() => errorPageMeta(info), [info]);
    return (
        <ErrorPage pageMeta={meta}>
            <Link href="/">
                <a>Return back to top page</a>
            </Link>
        </ErrorPage>
    );
};

export default ServerSideErrorPage;
