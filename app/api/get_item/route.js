import { NextResponse } from 'next/server';

// import methods
import { get_item } from '../../lib/dynamodb';

export async function GET(request) {

    const {item_id} = await request.json();
    try{
        // call get method
        const retobj = await get_item(item_id);
        console.log(retobj);

        return NextResponse.json({
            responseMsg: ["route.js - success tye - get_item()"],
            success: true,
            status: 200
        });
    } catch(error){
        return NextResponse.json({
            responseMsg: ["route.js - error type - get_item()"],
            success: false,
            status: 500
        });
    };
}
