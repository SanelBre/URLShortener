import { Store } from "../schemas";
import { StoreDoc } from "../schemas/Store";

export const findByOriginal = async (
    original: string
): Promise<StoreDoc | undefined> => {
    const doc = await Store.findOne({ original }).exec();

    return doc;
};
