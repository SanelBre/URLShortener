import { Store } from "../schemas";
import { StoreDoc } from "../schemas/Store";

export const findByShortened = async (
    shortened: string
): Promise<StoreDoc | undefined> => {
    const doc = await Store.findOne({ shortened }).exec();

    return doc;
};
