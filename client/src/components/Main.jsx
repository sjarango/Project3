import React, { useState, useEffect } from 'react';
import { Nav } from './index';
import '../index.css';


const Main = () => {
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch(
            ''
        );
        
        const allNotes = await data.json();
        console.log(allNotes);
    }
    return (
        <div className="Main">
            <Nav />
            <h1>Main Page</h1>
        </div>
    );
}

export default Main;