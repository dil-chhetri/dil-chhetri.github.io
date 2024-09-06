import PropTypes from 'prop-types'

const Connect = ({ connect:[image, type, url, name] }) => (
    <a href={url} >
    <div className='mt-5 connect-div'>
        <div className='inline-block'>
        <img src={image} width={20} height={20} alt={type} />
        </div>
        <h2 className='text-white inline ml-2'>{name}</h2>    
    </div>
    </a>
)

const Connects = ({connects}) => {
    const connectList = connects.map((connect, index)=> <Connect connect={connect} key={index} />)
    return <div className='Connects fixed bottom-0 left-0 p-4'>{connectList}</div>
}

Connect.propTypes = {
    connect : PropTypes.array.isRequired,
}


Connects.propTypes = {
    connects : PropTypes.array.isRequired,
}


export default Connects