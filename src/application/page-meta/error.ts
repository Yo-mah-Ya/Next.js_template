import { PageId, PageMeta } from "../types";

type ErrorData = {
    description: string;
    title: string;
};

export const pageMeta = (error: ErrorData): PageMeta => ({
    id: PageId.Error,
    description: error.description,
    title: error.title,
});
