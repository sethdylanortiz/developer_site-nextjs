import fetch from 'node-fetch';

const get_all_items = async(item_type) => {

    console.log("\n\n" + "get_items.jsx, item_type: " + item_type);
    console.log("get_items.jsx, typeof item_type: " + typeof item_type);
    console.log(`http://localhost:3000/api/get_all_${item_type}`);
    console.log("\n\n");

    // change 'http://localhost:3000' later to url
    // https://github.com/vercel/next.js/issues/48344#issuecomment-1571715889
    // https://stackoverflow.com/questions/68637445/how-to-fetch-an-api-in-nextjs-from-the-api-folder
    // https://github.com/vercel/next.js/discussions/49740
    const response_obj = await fetch(`http://localhost:3000/api/get_all_${item_type}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response_obj;
}

const get_item = async(url) => {

    // http://localhost:3000/overview/item/vehicle_123
    const request_string_values = (url).split("_");
    const item_type = request_string_values[0]; // "vehicle"
    const item_id = request_string_values[1]; // 00X

    const response_obj = await fetch(`http://localhost:3000/api/get_item?${item_type}=${item_id}`,
        {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return response_obj;
}

/*
const get_item = async(item_type, item_id) => {

    // item_type = weapon/vehicle/base/etc.
    const tablename = "bloxrp-" + item_type + "_table";
    const key_id = `${item_type}_id`;

    const params = {
        TableName: tablename,
        Key: {
            key_id: item_id 
        }
    };

    return doc_client.send(new GetCommand(params));
};
*/

export {
    get_all_items,
    get_item
}