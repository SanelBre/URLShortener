import { Store } from "../schemas"
import { StoreDoc } from "../schemas/Store";

export const fetchStoreRecords = async (
    skip?: number,
    limit?: number
): Promise<StoreDoc[]> => {
    const query = Store.find();
    
    if (skip > 0) query.skip(skip);

    if (limit > 0) query.limit(limit);

    const docs = await query.exec();

    return docs;
}
