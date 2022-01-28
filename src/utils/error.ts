import * as Logger from "./logger";

export const errorMessageOf = (error: unknown): string =>
    error instanceof Error ? error.message : "unknown error";

export const unexpectedDefault = <T>(
    unknownValue: never,
    defaultValue: T
): T => {
    Logger.warn({
        message: `unknown value : ${
            typeof unknownValue === "string"
                ? unknownValue
                : JSON.stringify(unknownValue)
        }`,
        callSite: {
            file: __filename,
            function: unexpectedDefault.name,
        },
    });
    return defaultValue;
};
