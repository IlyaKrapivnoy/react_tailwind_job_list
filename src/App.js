import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ListingsData from './data/data.json';
import JobCard from './components/JobCard';

function App() {
    const [listings, setListings] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        setListings(ListingsData);
    }, []);

    const filterListings = (filter_by = '') => {
        if (filters.includes(filter_by) && filter_by !== '')
            setFilters([...filters, filter_by]);
        setListings(
            listings.filter((listing) =>
                [...listing.languages, ...listing.tools].includes(filter_by)
            )
        );
    };

    return (
        <>
            <Header />
            <div className='grid p-16 justify-center items-center text-gray-900'>
                {listings?.map((listing) => (
                    <JobCard
                        listing={listing}
                        key={listing.id}
                        filtering={filterListings}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
