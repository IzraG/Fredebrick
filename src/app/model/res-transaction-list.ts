import { ResTransactionData } from "./res-transaction-data";

export class ResTransactionList {
    lastUpdateAt:Date =new Date();
    session: string="";
    data:Array<ResTransactionData>=[new ResTransactionData]
}
