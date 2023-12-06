// this page displays the selected requested item [car, gun, base, etc]
"use server"; 
import React from 'react'
import { get_all_items, get_item} from '@/services/get_items';

const Item_page = async({params}: {params: string}) => {
    
    // // http://localhost:3000/overview/item/vehicle_123
    // const request_string_values = (params.id).split("_");
    // const item_type = request_string_values[0]; // "vehicle"
    // const item_id = request_string_values[1]; // 00X

    const return_obj = await get_item(params.id);
    return (
        <div>item: {params.id}</div>
    )
}

export default Item_page;