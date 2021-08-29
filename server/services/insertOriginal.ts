import { Store } from "../schemas";
import { StoreDoc } from "../schemas/Store";

export const insertOriginal = async (
    original: string
): Promise<StoreDoc> => {
    const doc = await Store.create({ original });

    return doc;
};

