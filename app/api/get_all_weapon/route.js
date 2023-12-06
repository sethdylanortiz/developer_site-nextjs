import { NextResponse } from 'next/server';

// import methods
import { get_all_items } from '../../lib/dynamodb';

export async function GET() {

    try{
        // call get method
        const items_obj = await get_all_items("weapon");

        // for parsing
        console.log(items_obj);
        console.log("items_obj.Items[0].weapon_id: " + items_obj.Items[0].weapon_id);
        console.log("items_obj.Items[1].weapon_id: " + items_obj.Items[1].weapon_id);

        return NextResponse.json({
            responseMsg: ["route.js - success tye - get_all_items()"],
            return_obj_weapon: items_obj,
            
            success: true,
            status_weapon: 200
        });
    } catch(error){
        return NextResponse.json({
            responseMsg: ["route.js - error type - get_all_items()"],
            return_obj: null,

            success: false,
            status: 500
        });
    };
}