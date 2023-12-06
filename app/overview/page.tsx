import React from 'react';
import {useState} from 'react';
import {useRouter} from 'next/navigation'; // may remove - no need

import styles from './page.module.css';

import { get_all_items } from '@/services/get_items';

// components
import Entry from '@/components/entry/Entry';

const Overview_page = async() => {

    // fetch data in parallel
    const [weapons, vehicles] = await Promise.all([get_all_items("weapon"), get_all_items("vehicle")]);

    const {return_obj_weapon}: any = await weapons.json();
    const {return_obj_vehicle} : any = await vehicles.json();

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