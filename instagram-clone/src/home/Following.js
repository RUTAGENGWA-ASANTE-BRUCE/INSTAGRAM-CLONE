import React, { useState, useEffect } from 'react'
import "./Following.css"
import PeopleFollowed from './PeopleFollowed'
import axios from './axios'
//@ts-ignore
import followedPhoto from "C:/Users/pc/Pictures/Camera Roll/FAMILY/IMG_20220101_173221_955.jpg"

function Following ()
{
    const [followedByMe, setFollowedByMe] = useState([]);

    useEffect(() =>
    {
        async function fetchData ()
        {
            const req = await axios.get("/instagram/myprofile");
            setFollowedByMe(req.data)
            console.log(req.data);
        }
        fetchData()
    }, [])

    return (
        <div className='following'>
            {followedByMe.map((oneFollowed) => (
                //@ts-ignore
                <PeopleFollowed followedProfileName={oneFollowed.mainProfileName} followedProfilePicture={followedPhoto} followers={oneFollowed.followers
                
                } />
            ))}

        </div>
    )
}

export default Following
