import { pageMeta } from "./error";

describe("pageMeta", () => {
    test("pageMeta", () => {
        expect(
            pageMeta({ title: "title", description: "description" })
        ).toStrictEqual({
            id: "error",
            description: "description",
            title: "title",
        });
    });
});
