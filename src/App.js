import { useEffect, useState } from 'react';
import './App.css';
import ListingsData from './data/data.json';

function App() {
    const [listings, setListings] = useState([]);
    useEffect(() => {
        setListings(ListingsData);
    }, []);
    console.log('listings', listings);

    return <div className='App'>Hello World</div>;
}

export default App;
