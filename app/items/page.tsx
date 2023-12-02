import React from 'react';
import styles from './page.module.css';

const Items_Page = () => {

    /* 
        before making db call, create weapons
            - to-do: change onto a serpate table only contianing all weapon information 
                    so we don't have to keep updating website each weapon addition - dynamically
    */
    return (
        <div className = {styles.container}>
            <h1 className = {styles.header}>Weapons</h1>
        </div>
    )
}

export default Items_Page;