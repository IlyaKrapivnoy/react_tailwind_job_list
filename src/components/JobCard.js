import Image from './Image';
import Details from './Details';

const JobCard = ({ listing, filtering }) => {
    return (
        <div>
            <Image url={listing.logo} desc={listing.company} />
            <Details
                company={listing.company}
                recent={listing.new}
                featured={listing.featured}
                position={listing.position}
                postedAt={listing.postedAt}
                contract={listing.contract}
                location={listing.location}
                languages={listing.languages}
                tools={listing.tools}
                filter_f={filtering}
            />
        </div>
    );
};

export default JobCard;
