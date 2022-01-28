import { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/user/actions";
import { addCount, minusCount } from "../redux/count/actions";
import { RootState } from "../redux/rootReducer";
import * as Logger from "../utils/logger";
import { errorMessageOf } from "../utils";
import { pageMeta } from "../application/page-meta/top";
import { userInfoFor } from "../service/user/user-info";
import { PageMeta, UserInfo } from "../application/types";

type PageProps = {
    pageMeta: PageMeta;
    userInfo?: UserInfo;
};
const Page: NextPage<PageProps> = () => {
    const dispatcher = useDispatch();
    const countRedux = useSelector((state: RootState) => state.count);
    const webApiRedux = useSelector((state: RootState) => state.user);
    const [userId, setUserId] = useState("");

    return (
        <>
            <div>
                <p>
                    <Link href="/getInitialProps">
                        <a>getInitialProps</a>
                    </Link>
                </p>
                <p>
                    <Link href="/getStaticProps">
                        <a>getStaticProps</a>
                    </Link>
                </p>
                <p>
                    <Link href="/incrementalSSG">
                        <a>incrementalSSG</a>
                    </Link>
                </p>
            </div>
            <hr />
            <div>
                <button
                    onClick={(): void => {
                        dispatcher(addCount(1));
                    }}
                >
                    Add
                </button>
                <button
                    onClick={(): void => {
                        dispatcher(minusCount(1));
                    }}
                >
                    Minus
                </button>
                <p>count : {countRedux.count}</p>
                <hr />
                <input
                    type="text"
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}
                />
                <button
                    onClick={(): void => {
                        dispatcher(getUser(userId));
                    }}
                >
                    axios
                </button>
                <p>
                    userId : {webApiRedux.userId} userInfo :{" "}
                    {!webApiRedux.loading &&
                        JSON.stringify(webApiRedux.response)}
                </p>
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
    Logger.info({ message: "page: getServerSideProps" });
    const meta = pageMeta();
    try {
        const [userInfo] = await Promise.all([userInfoFor()]);
        return {
            props: {
                pageMeta: meta,
                userInfo,
            },
        };
    } catch (error) {
        Logger.critical({
            message: errorMessageOf(error),
            callSite: {
                file: __filename,
                function: getServerSideProps.name,
            },
        });
        return { props: { pageMeta: meta } };
    }
};

export default Page;
