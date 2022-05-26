import React from 'react'
import "./PeopleFollowed.css"


function PeopleFollowed ({ followedProfileName, followedProfilePicture, followers })
{
    return (
        <div className='people_followed'>
            <div className='profile_pic_container'>

                <img className='followed_profile_pic' src={followedProfilePicture} alt='' />
            </div>
            <p>{followedProfileName}</p>
            <p>Followers: {followers.length}</p>
        </div>
    )
}

export default PeopleFollowed
