export enum PageId {
    Error = "error",
    Top = "top",
}

export type UserInfo = {
    isLogin: boolean;
};

export type PageMeta = {
    id: PageId;
    description: string;
    title: string;
};
