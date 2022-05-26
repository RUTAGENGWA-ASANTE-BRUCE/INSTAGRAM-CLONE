import React, { useEffect, useState } from 'react'
import "./SideBar.css"
import axios from './axios';
//@ts-ignore
import suggestionProfileImage from "C:/Users/pc/Pictures/Camera Roll/FAMILY/IMG_20220101_173123_511.jpg"
import CopyrightOutlinedIcon from '@material-ui/icons/CopyrightOutlined';
//@ts-ignore
import profileImage from "C:/Users/pc/Pictures/Camera Roll/WIN_20211231_18_19_37_Pro.jpg"
import Suggestion from './Suggestion';
function SideBar ({ className, mainProfileName, mainUserName, smallProfileName, followStatus, mainProfileImage, smallProfilePicture })
{
    const [suggestionForMe, setSuggestionForMe] = useState([])
    useEffect(() =>
    {
        async function fetchSuggestion ()
        {
            const req = await axios.get("/instagram/suggestions")
            setSuggestionForMe(req.data)
        }
        fetchSuggestion()
    }, [])

    const [myProfile, setMyProfile] = useState([])
    useEffect(() =>
    {
        async function fetchProfile ()
        {
            const req = await axios.get("/instagram/myprofile")
            setMyProfile(req.data)
        }
        fetchProfile()
    }, [])
    return (
        <div className={`side_bar ${className}`}>
            <div className='container'>

                <div className='side_profile'>
                    <div className='side_profile_info'>

                        <svg height={90} width={90} className='profile_picture'>
                            <defs>
                                <clipPath id='side_profile_picture'>

                                    <circle cx={30} cy={55} r={30} fill='gray' />
                                </clipPath>
                            </defs>
                            <image clip-path='url(#side_profile_picture)' xlinkHref={profileImage} width={110} height={110} />

                        </svg>
                        <div className='side_profile_info_p'>

                            <p className='profile_name'>Rutagengwa Asante Bruce</p>
                            <p className='user_name'>Spider Lotus</p>
                        </div>
                        <p className='switch'>Switch</p>
                    </div>
                    <div className='suggestions_forYou'>

                        <h5 className='suggestion_head'>Suggestions For You</h5>
                        <p className='see_all'>See All</p>
                    </div>

                </div>
                {suggestionForMe.map((singleSuggestion) => (
                    //@ts-ignore
                    <Suggestion smallProfileName={singleSuggestion.smallProfileName} followStatus={singleSuggestion.followStatus} smallProfilePicture={suggestionProfileImage} />
                ))}





                <div className='about_us'>
                    <p className='paragraph1'>
                        About
                        .
                        Help
                        .
                        Press
                        .
                        API
                        .
                        Jobs
                        .
                        Privacy
                        .
                        Terms
                        .
                        Locations
                        .
                    </p>

                    <p className='paragraph2'>
                        Top Accounts
                        .
                        Hashtags
                        .
                        Language
                    </p>
                    <p className='paragraph3'>
                        <CopyrightOutlinedIcon className='copyright_icon' fontSize='small' />
                        2022 INSTAGRAM FROM META
                    </p>
                </div>


            </div>
        </div>
    )
}

export default SideBar
