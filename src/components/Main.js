import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';
import Home from '../pages/Home';

function Main(props){
    const [ park, setPark ] = useState(null);
    const [ space, setSpace ] = useState(null);

    const API_URL = 'https://public-space-nyc.onrender.com/api/myparks/';
    const NYC_URL = 'https://data.cityofnewyork.us/resource/enfh-gkve.json/';

    const getPark = async() => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setPark(data);
        } catch(error) {
            //TODO: add logic
        } 
    };

    const getSpace = async() => {
        try {
            const response = await fetch(NYC_URL);
            const data = await response.json();
            setSpace(data);
        } catch(error) {
            //TODO: add logic
        } 
    };

    const createPark = async(park) => {
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                }, 
                body: JSON.stringify(park),                
                });
                getPark();
        } catch (error) {

        }
    }

    const updatePark = async (park, id) => {
        await fetch(API_URL + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(park),
        });
        getPark();
    };

    const deletePark = async(id) => {
        await fetch(API_URL +id, {
            method: 'DELETE',
        });
        getPark();
    };

    useEffect(() => {
        getPark();
        getSpace();
    }, []);

    return (
        <main> 
            <Routes>
                <Route 
                    path="/home" 
                    element={<Home space={space}/>} 
                />
                <Route 
                    path="/myparks" 
                    element={<Index park={park} createPark={createPark}/>} 
                />
                <Route 
                    path="/myparks/:id" 
                    element={<Show park={park}
                    updatePark={updatePark}
                    deletePark={deletePark}/>} 
                />
            </Routes>
        </main>
    );
};

export default Main; 