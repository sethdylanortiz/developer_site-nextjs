import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

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
    const cars_arr = [
        { vehicle_id: '001', vehicle_name: 'charger'},
        { vehicle_id: '002', vehicle_name: 'suv'},
        { vehicle_id: '003', vehicle_name: 'lamborghini'}
    ];

    return (
        <div className = {styles.container}>

            {/* for guns */}
            <h1 className = {styles.header}>guns</h1>
            <div className = {styles.display_contianer}>
                {weapons_arr.map(weapon => 
                        <Link
                            href = "/weapon"
                            className = {styles.display_item}
                        >
                            <h1 className = {styles.item_name}>{weapon.weapon_name} </h1>
                            <p className = {styles.item_metadata}> ID: {weapon.weapon_id} </p>
                        </Link>
                    ) 
                }  
            </div>

            {/* for vehicles */}
            <h1 className = {styles.header}>vehicles</h1>
            <div className = {styles.display_contianer}>
                {weapons_arr.map(vehicle => 
                        <Link
                            href = "/vehicle"
                            className = {styles.display_item}
                        >
                            <h1 className = {styles.item_name}>{vehicle.weapon_name} </h1>
                            <p className = {styles.item_metadata}> ID: {vehicle.weapon_id} </p>
                        </Link>
                    ) 
                }  
            </div>

        </div>
    )
}

export default Items_Page;