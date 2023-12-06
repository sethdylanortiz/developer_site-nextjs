import { NextResponse } from 'next/server';

// import methods
import { get_item } from '../../lib/dynamodb';

export async function GET(request) {

    const item_type = request.nextUrl.searchParams.get("weapon") ? "weapon" : "vehicle";
    const item_id = request.nextUrl.searchParams.get(item_type);
    console.log("\n\n" + "GET(), request: " + request.nextUrl);
    console.log("GET(), request.nextUrl.searchParams: " + request.nextUrl.searchParams);
    console.log("GET(), item_type: " + item_type); // vehicle
    console.log("GET(), item_id: " + item_id);     // 123
    console.log("\n\n");

    try{
        // call get method
        const item_obj = await get_item(item_type, item_id);

        console.log(item_obj);

        return NextResponse.json({
            responseMsg: ["route.js - success type - get_item()"],
            success: true,
            status: 200
        });
    } catch(error){
        console.log("error fetching item");
        return NextResponse.json({
            responseMsg: ["route.js - error type - get_item()"],
            success: false,
            status: 500
        });
    };
}
