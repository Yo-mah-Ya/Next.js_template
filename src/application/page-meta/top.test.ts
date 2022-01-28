import { pageMeta } from "./top";

describe("pageMeta", () => {
    test("pageMeta", () => {
        expect(pageMeta()).toStrictEqual({
            id: "top",
            description: "top page",
            title: "top page",
        });
    });
});
