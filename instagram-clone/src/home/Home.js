import React from 'react'
import '../App.css';
import Following from './Following';
import Middle from './Middle';
//@ts-ignore
//@ts-ignore
import suggestionProfileImage from "C:/Users/pc/Pictures/Camera Roll/FAMILY/IMG_20220101_173123_511.jpg"

//@ts-ignore
import profileImage from "C:/Users/pc/Pictures/Camera Roll/WIN_20211231_18_19_37_Pro.jpg"
import SideBar from './SideBar';
function Home ()
{
    return (
        <div className="App col-2 col-10">

            <div className='above'>

                <div className='following_scroll'>
                    <Following />
                </div>
                <p>    </p>
            </div>
            <div className='middle_container p-relative'>

                <Middle className={"col-6"} />
                <SideBar className={"col-4 p-absolute"} mainProfileName={"Rutagengwa Asante Bruce"} mainUserName={"Spider Lotus"} smallProfileName={"Bisengimana John"} followStatus={"Follows You"} mainProfileImage={profileImage} smallProfilePicture={suggestionProfileImage} />

            </div>
        </div>
    )
}

export default Home
