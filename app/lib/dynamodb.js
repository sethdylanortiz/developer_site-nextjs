/* 
table - item_table
- weapon_id [pk] - string
- weapon_name - string
- release_date - string
- total sales
- last sale
- [create] - line graph over time sales

table - item_xxx_purchases
- user_id [pk] - string
- purchase_date - string
- [create] - link url to roblox profile

*/

// AWS SDK V3
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, ScanCommand} from '@aws-sdk/lib-dynamodb';

const db_client = new DynamoDBClient({
    region: process.env.TABLE_REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY
    }
});

const doc_client = DynamoDBDocumentClient.from(db_client);

// method to GET all items [for display]
const get_all_items = async(item_type) => {

    // item_type = weapon/vehicle/base/etc.
    const tablename = "bloxrp-" + item_type + "_table";
    
    const params = {
        TableName: tablename
    };

    // scan entire table
    return doc_client.send(new ScanCommand(params));
};

// method to GET item's data
const get_item = async(item_type, item_id) => {

    console.log("dynamodb.js, item_type: " + item_type + ", " + typeof item_type);
    console.log("dynamodb.js, item_id: " + item_id + ", " + typeof item_id);

    // item_type = weapon/vehicle/base/etc.
    var params = { TableName: "bloxrp-" + item_type + "_table" };
    params.Key = item_type == "weapon" ? { weapon_id: item_id } : { vehicle_id: item_id };

    return doc_client.send(new GetCommand(params));
};

export{
    get_all_items,
    get_item
}