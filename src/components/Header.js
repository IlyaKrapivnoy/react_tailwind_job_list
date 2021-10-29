import HeaderImg from '../images/bg-header-desktop.svg';

const Header = () => {
    return (
        <div className='py-4 relative h-32'>
            <img
                src={HeaderImg}
                className='absolute inset-0 w-full object-cover'
                // alt=''
            />
        </div>
    );
};

export default Header;
