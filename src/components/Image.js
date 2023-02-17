const Image = ({ url, desc = '' }) => (
    <div className='flex-2 p-2'>
        <img src={url} alt={desc} />
    </div>
);

export default Image;
