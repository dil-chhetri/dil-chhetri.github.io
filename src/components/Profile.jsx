import PropTypes from 'prop-types'

const Profile = ({username, title}) => {
    return (
        <div className='Profile rounded-full w-60 h-60 py-10  flex justify-center items-center  relative ml-auto mr-10 mt-20'>
            <div className='text-center'>
            <h1 className='z-40'>{username}</h1>
            <p className='z-40'>{title}</p>
            </div>
            <div className='computer border-4 rounded-md w-30 h-10 bg-slate-700 absolute z-10 flex justify-center items-center'>
            <div className='binary-text'></div>
            </div>

        </div>
    )
}

Profile.propTypes = {
    username : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
}



export default Profile