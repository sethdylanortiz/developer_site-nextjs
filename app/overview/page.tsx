import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

import Entry from '@/components/entry/Entry';

const Items_Page = () => {
    /* 
        before making db call, create weapons
            - to-do: change onto a serpate table only contianing all weapon information 
                    so we don't have to keep updating website each weapon addition - dynamically
    */

    // for guns
    const weapons_arr = [
        { weapon_id: '001', weapon_name: 'pistol'},
        { weapon_id: '002', weapon_name: 'assault rifle'},
        { weapon_id: '003', weapon_name: 'shotgun'}
    ];

    // for vehicle
    const vehicle_arr = [
        { vehicle_id: '001', vehicle_name: 'charger'},
        { vehicle_id: '002', vehicle_name: 'suv'},
        { vehicle_id: '003', vehicle_name: 'lamborghini'}
    ];

    return (
        <div className = {styles.container}>

            {/* for guns */}
            <h1 className = {styles.header}>guns</h1>
            <div className = {styles.display_container}>
                {weapons_arr.map(cur_weapon => <Entry id = {cur_weapon.weapon_id} name = {cur_weapon.weapon_name}/>)}  
            </div>

            {/* for vehicles */}
            <h1 className = {styles.header}>vehicles</h1>
            <div className = {styles.display_container}>
                {weapons_arr.map(cur_vehicle => <Entry id = {cur_vehicle.weapon_id} name = {cur_vehicle.weapon_name}/>)}
            </div>

        </div>
    )
}

export default Items_Page;