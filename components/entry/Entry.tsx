'use client';
import React from 'react';
import Link from 'next/link';
import styles from './entry.module.css';

const Entry = ({name, id} : {name: string; id: string}) => {
    return (
        <Link
            href = {`/overview/item/${id}`}
            className = {styles.display_item}
            >
            <h1 className = {styles.item_name}>{name}</h1>
            <p className = {styles.item_metadata}>ID: {id}</p>
        </Link>
    )
}

export default Entry;