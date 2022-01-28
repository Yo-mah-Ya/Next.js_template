import { NextApiRequest, NextApiResponse } from "next";
import { ObjectUtil } from "../../utils";
import { httpStatusCodes } from "../../utils/http-status-codes";

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> => {
    try {
        req;
        const message = { message: "OK" };
        res.status(200).json(message);
    } catch (error) {
        const statusCode =
            ObjectUtil.isObject(error) && error?.statusCode
                ? (error?.statusCode as number)
                : undefined;
        if (statusCode) {
            res.status(statusCode).json({
                error:
                    statusCode in httpStatusCodes
                        ? httpStatusCodes[
                              statusCode as keyof typeof httpStatusCodes
                          ]
                        : "Internal Server Error",
            });
        } else {
            res.status(500).json({
                error: "Internal Server Error",
            });
        }
    }
};

export default handler;
