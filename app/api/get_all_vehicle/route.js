import { NextResponse } from 'next/server';

// import methods
import { get_all_items } from '../../lib/dynamodb';

export async function GET( params) {

    try{

        console.log("route.js, params.item_type: " + params.item_type);

        // call get method
        const items_obj = await get_all_items("vehicle");

        return NextResponse.json({
            responseMsg: ["route.js - success tye - get_all_items()"],
            return_obj_vehicle: items_obj,
            
            success: true,
            status_vehicle: 200
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