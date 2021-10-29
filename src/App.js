import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ListingsData from './data/data.json';

function App() {
    const [listings, setListings] = useState([]);
    useEffect(() => {
        setListings(ListingsData);
    }, []);
    console.log('listings', listings);

    return (
        <div>
            <Header />
            <div className='grid p-16 justify-center items-center text-gray-900'>
                {listings.map((listing) => (
                    <p key={listing.id}>{listing.company}</p>
                ))}
            </div>
        </div>
    );
}

export default App;
