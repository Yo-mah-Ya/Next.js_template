import React from "react";
import { Page } from "./page";
import {
    ApplicationProvider,
    ApplicationState,
} from "../contexts/application-context";
import { PageMeta } from "../../application/types";

export const DefaultPage: React.FC<{ pageMeta: PageMeta } & ApplicationState> =
    ({ pageMeta, example }) => (
        <Page pageMeta={pageMeta}>
            <ApplicationProvider example={example}></ApplicationProvider>
        </Page>
    );
