import React from 'react';
import {useState} from 'react';
import {useRouter} from 'next/navigation'; // may remove - no need

import styles from './page.module.css';
import fetch from 'node-fetch';

// components
import Entry from '@/components/entry/Entry';

const get_weapons = async() => {
    // change 'http://localhost:3000' later to url
    // https://stackoverflow.com/questions/68637445/how-to-fetch-an-api-in-nextjs-from-the-api-folder
    // https://github.com/vercel/next.js/discussions/49740
    const response_obj = await fetch("http://localhost:3000/api/get_all_weapon", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response_obj;
}

const get_vehicles = async() => {
    const response_obj = await fetch("http://localhost:3000/api/get_all_vehicle", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response_obj;
}

const Overview_page = async() => {
    
    // get obj containing all items and status of request
    // const weapon_obj = get_weapons();
    // const vehicle_obj = get_vehicles();

    // fetch data in parallel
    const [weapons, vehicles] = await Promise.all([get_weapons(), get_vehicles()]);

    const {return_obj_weapon, status_weapon}: any = await weapons.json();
    

    console.log("page.tsx - return_obj: " + return_obj_weapon); // [object object]
    console.log("page.tsx - return_obj.Items: " + return_obj_weapon.Items); // [object object], [object object]
    console.log("page.tsx - return_obj.Items[0]: " + return_obj_weapon.Items[0]); // [object object]
    console.log("page.tsx - return_obj.Items[0].weapon_id: " + return_obj_weapon.Items[0].weapon_id); // 001
    console.log("page.tsx - status: " + status_weapon); // 200

    const {return_obj_vehicle, status_vehicle} : any = await vehicles.json();

    return (
        <div className = {styles.container}>

            {/* for guns */}
            <h1 className = {styles.header}>guns</h1>
            <div className = {styles.display_container}>
                {/* print items from db call */}
                {return_obj_weapon.Items.map((cur_weapon: any) => <Entry id = {cur_weapon.weapon_id} name = {cur_weapon.name}/>)}  
            </div> 

            {/* for vehicles */}
            <h1 className = {styles.header}>vehicles</h1>
            <div className = {styles.display_container}>
                {return_obj_vehicle.Items.map((cur_vehicle: any) => <Entry id = {cur_vehicle.vehicle_id} name = {cur_vehicle.name}/>)}
            </div>


        </div> // {styles.container}
    )
}

export default Overview_page;