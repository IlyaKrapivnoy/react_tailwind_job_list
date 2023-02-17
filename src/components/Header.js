import HeaderImg from '../images/bg-header-desktop.svg';

const Header = () => (
    <div className='py-4 relative h-32'>
        <img
            src={HeaderImg}
            className='absolute inset-0 w-full object-cover'
            alt='main image'
        />
    </div>
);


export default Header;
