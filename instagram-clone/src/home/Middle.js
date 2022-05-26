import React, { useEffect, useState } from 'react'
import "./Middle.css"
import axios from './axios'
// @ts-ignore
import myImage from "C:/Users/pc/Pictures/Camera Roll/best.jpg"
// @ts-ignore

// @ts-ignore
import bigProfileImage from "C:/Users/pc/Pictures/Camera Roll/WIN_20211214_10_11_51_Pro.jpg"
// @ts-ignore
import smallProfile from "C:/Users/pc/Pictures/Camera Roll/IMG_20211231_050247_6.jpg"
import Video from './Video';

import Photo from './Photo';





function Middle (props)
{
    const [middleVideo, setMiddleVideo] = useState([])
    useEffect(() =>
    {
        async function fetchVideo ()
        {
            const req = await axios.get("/instagram/videos")
            setMiddleVideo(req.data)
        }
        fetchVideo()
    }, [])

    const [middlePhoto, setMiddlePhoto] = useState([])
    useEffect(() =>
    {
        async function fetchPhoto ()
        {
            const req = await axios.get("/instagram/photos")
            setMiddlePhoto(req.data)
        }
        fetchPhoto()
    }, [])
    console.log(middleVideo)
    console.log(middlePhoto)

    return (
        <div className={`middle ${props.className}`}>
            {middleVideo.map((singleVideo) =>
            (


                //@ts-ignore
                <Video videoProfileName={singleVideo.videoProfileName} videoLocationNickName={singleVideo.videoLocationNickName} videoLikedBy={singleVideo.videoLikedBy} videoProfilePicture={bigProfileImage} videoLikedByProfilePicture={smallProfile} myVideo={"../Videos/Ariel Wayz - La Vida Loca (Official Video)_2.mp4"} />
            ))}
            {middlePhoto.map((singlePhoto) =>
            (
                //@ts-ignore
                <Photo photoProfileName={singlePhoto.photoProfileName} photoLocationNickName={singlePhoto.photoLocationNickName} photoLikedBy={singlePhoto.photoLikedBy} photoProfilePicture={bigProfileImage} photoLikedByProfilePicture={smallProfile} myImage={myImage} />
            ))}

        </div>
    )
}


export default Middle
