import React from 'react';
import {useState} from 'react';
import {useRouter} from 'next/navigation'; // may remove - no need

import styles from './page.module.css';

import fetch from 'node-fetch';

// components
import Entry from '@/components/entry/Entry';

const get_page_data = async() => {


    const item_type = "weapon";

    // change later to url
    // https://stackoverflow.com/questions/68637445/how-to-fetch-an-api-in-nextjs-from-the-api-folder
    // https://github.com/vercel/next.js/discussions/49740
    const response_obj = await fetch("http://localhost:3000/api/get_all_items", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    // const {return_obj, status}: any = await response_obj.json();
    // return {return_obj, status};
    
    return response_obj;
}

const Overview_page = async() => {

    // // for vehicle
    const vehicle_arr = [
        { vehicle_id: '001', vehicle_name: 'charger'},
        { vehicle_id: '002', vehicle_name: 'suv'},
        { vehicle_id: '003', vehicle_name: 'lamborghini'}
    ];

    // get obj containing all items and status of request
    const response_obj = await get_page_data();

    const {return_obj, status}: any = await response_obj.json();
    console.log("page.tsx - return_obj: " + return_obj); // [object object]
    console.log("page.tsx - return_obj.Items: " + return_obj.Items); // [object object], [object object]
    console.log("page.tsx - return_obj.Items[0]: " + return_obj.Items[0]); // [object object]
    console.log("page.tsx - return_obj.Items[0].weapon_id: " + return_obj.Items[0].weapon_id); // 001
    console.log("page.tsx - status: " + status); // 200

    return (
        <div className = {styles.container}>

            {/* for guns */}
            <h1 className = {styles.header}>guns</h1>
            <div className = {styles.display_container}>

                {/* print items from db call */}
                {return_obj.Items.map((cur_weapon: any) => <Entry id = {cur_weapon.weapon_id} name = {cur_weapon.name}/>)}  
            </div> 

            {/* for vehicles */}
            <h1 className = {styles.header}>vehicles</h1>
            <div className = {styles.display_container}>
                {vehicle_arr.map(cur_vehicle => <Entry id = {cur_vehicle.vehicle_id} name = {cur_vehicle.vehicle_name}/>)}
                {/* {return_obj.Items.map((cur_vehicle: any) => <Entry id = {cur_vehicle.vehicle_id} name = {cur_vehicle.name}/>)}   */}
            </div>

        </div>
    )
}

export default Overview_page;