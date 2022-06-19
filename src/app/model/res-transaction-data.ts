import { ResTransactionDataCategory } from "./res-transaction-data-category";

export class ResTransactionData {
    dateTimestamp: Date= new Date();
    id: Number=2;
    account_id: string="XBoEnrUmNQh8cM1xLKQRIA=="
    account_number: string="431395039201"
    account_currency: string= "IDR"
    institution_id: number=24
    merchant_id: number=0
    outlet_outlet_id: number=0
    location_city_id: number=0
    location_country_id: number=0
    date: Date=new Date("2021-08-02")
    amount: number=10000
    description: string="TRSF E-BK CR 06/08 95031 TRF BRICK TO TAUF"
    status: string="CONFIRMED"
    direction: string="OUT"
    reference_id: string="XBoEnrUmNQh8cM1xLKQRIA==-20210802-1"
    category:ResTransactionDataCategory= new ResTransactionDataCategory
    transaction_type: string=""
}
