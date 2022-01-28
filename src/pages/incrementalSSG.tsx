import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { errorMessageOf, Logger } from "../utils";

type PageProps = {
    stars: number;
    buildTime: string;
};
const Page: NextPage<PageProps> = ({ stars, buildTime }: PageProps) => {
    Logger.info({ message: `page: component ${new Date().toISOString()}` });
    return (
        <>
            <p>getStaticProps</p>
            <p>
                <Link href="/">
                    <a>Go Home</a>
                </Link>
            </p>
            <div>
                Build Time : ({buildTime}) , The number of Next stars: {stars}
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    try {
        const res = await fetch("https://api.github.com/repos/zeit/next.js");
        const json = await res.json();
        Logger.info({ message: json });
        const stars = json?.stargazers_count ?? 0;
        const buildTime = new Date().toISOString();
        return {
            props: {
                stars,
                buildTime,
            },
            revalidate: 30,
        };
    } catch (error) {
        Logger.warn({ message: errorMessageOf(error) });
        throw error;
    }
};

export default Page;
