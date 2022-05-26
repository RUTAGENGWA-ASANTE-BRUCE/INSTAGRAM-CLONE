import React, { useState, useRef } from 'react'
import "./OtherProfiles.css"
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PlayArrowIcon from '@material-ui/icons/PlayArrowRounded';
import Favorite from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';


function OtherProfiles ()
{
    const [playing, setplaying] = useState(false)
    const videoRef = useRef(null)
    const handlepress = () =>
    {
        if (playing) {
            // @ts-ignore
            videoRef.current.play()
            setplaying(false)
        }
        else {
            // @ts-ignore
            videoRef.current.pause()
            setplaying(true)
        }
    }
    const videoRef_up = useRef(null)
    const handlepress_up = () =>
    {
        if (playing) {
            // @ts-ignore
            videoRef_up.current.play()
            setplaying(false)
        }
        else {
            // @ts-ignore
            videoRef_up.current.pause()
            setplaying(true)
        }
    }
    return (
        <div className='otherProfiles'>
            <div className=' first_section'>
                <div className='photos'>

                    <div className='container_of_photo'>
                        <div>

                            <img src='sister.jpg' alt=' ' className='image_browse' />
                            <p className='information_paragraph'>
                                <Favorite fontSize='small' className='paragraph_icon' />787&nbsp;  &nbsp;  &nbsp; <ChatBubbleIcon fontSize="small" className='paragraph_icon' />7787
                            </p>
                        </div>
                        <FileCopyIcon fontSize='small' className='photo_icon' />
                    </div>
                    <div className='container_of_photo' >
                        <div>
                            <img src='pro.jpg' alt=' ' className='image_browse' />
                            <p className='information_paragraph'>
                                <Favorite fontSize='small' className='paragraph_icon' />787 &nbsp;  &nbsp;  &nbsp; <ChatBubbleIcon fontSize="small" className='paragraph_icon' />7787
                            </p>
                        </div>
                        <FileCopyIcon fontSize='small' className='photo_icon' />
                    </div>
                </div>
                <div>
                    <video src="/Videos/why.mp4" className='video_browse' ref={videoRef_up} onClick={handlepress_up} />
                    <p className='information_paragraph_video'>
                        <Favorite fontSize='small' className='paragraph_icon' />787 &nbsp;  &nbsp;  &nbsp; <ChatBubbleIcon fontSize="small" className='paragraph_icon' />7787
                    </p>
                </div>
                <PlayArrowIcon fontSize='small' className='play_icon_moreProfiles' />

            </div>
            <div className='second_section'>
                <div className='line_of_pictures'>
                    <div className='container_of_lined_pictures'>
                        <div>
                            <img src='pro.jpg' alt=' ' className='lined_image_browse' />
                            <p className='information_paragraph'>
                                <Favorite fontSize='small' className='paragraph_icon' />787   &nbsp;  &nbsp;  &nbsp; <ChatBubbleIcon fontSize="small" className='paragraph_icon' />7787
                            </p>
                        </div>
                        <FileCopyIcon fontSize='small' className='photo_icon' />

                    </div>
                    <div className='container_of_lined_pictures'>
                        <div>
                            <img src='pro.jpg' alt=' ' className='lined_image_browse' />
                            <p className='information_paragraph'>
                                <Favorite fontSize='small' className='paragraph_icon' />787 &nbsp;  &nbsp;  &nbsp; <ChatBubbleIcon fontSize="small" className='paragraph_icon' />7787
                            </p>
                        </div>
                        <FileCopyIcon fontSize='small' className='photo_icon' />

                    </div>
                    <div className='container_of_lined_pictures'>
                        <div>
                            <img src='pro.jpg' alt=' ' className='lined_image_browse' />
                            <p className='information_paragraph'>
                                <Favorite fontSize='small' className='paragraph_icon' />787 &nbsp;  &nbsp;  &nbsp; <ChatBubbleIcon fontSize="small" className='paragraph_icon' />7787
                            </p>
                        </div>
                        <FileCopyIcon fontSize='small' className='photo_icon' />

                    </div>
                </div>
                <div className='line_of_pictures'>
                    <div className='container_of_lined_pictures'>
                        <div>
                            <img src='pro.jpg' alt=' ' className='lined_image_browse' />
                            <p className='information_paragraph'>
                                <Favorite fontSize='small' className='paragraph_icon' />787 &nbsp;  &nbsp;  &nbsp; <ChatBubbleIcon fontSize="small" className='paragraph_icon' />7787
                            </p>
                        </div>
                        <FileCopyIcon fontSize='small' className='photo_icon' />

                    </div>
                    <div className='container_of_lined_pictures'>
                        <div>
                            <img src='pro.jpg' alt=' ' className='lined_image_browse' />
                            <p className='information_paragraph'>
                                <Favorite fontSize='small' className='paragraph_icon' />787 &nbsp;  &nbsp;  &nbsp; <ChatBubbleIcon fontSize="small" className='paragraph_icon' />7787
                            </p>
                        </div>
                        <FileCopyIcon fontSize='small' className='photo_icon' />

                    </div>
                    <div className='container_of_lined_pictures'>
                        <div>
                            <img src='pro.jpg' alt=' ' className='lined_image_browse' />
                            <p className='information_paragraph'>
                                <Favorite fontSize='small' className='paragraph_icon' />787 &nbsp;  &nbsp;  &nbsp; <ChatBubbleIcon fontSize="small" className='paragraph_icon' />7787
                            </p>
                        </div>
                        <FileCopyIcon fontSize='small' className='photo_icon' />

                    </div>
                </div>
                <div className='line_of_pictures'>
                    <div className='container_of_lined_pictures'>
                        <div>
                            <img src='pro.jpg' alt=' ' className='lined_image_browse' />
                            <p className='information_paragraph'>
                                <Favorite fontSize='small' className='paragraph_icon' />787 &nbsp;  &nbsp;  &nbsp; <ChatBubbleIcon fontSize="small" className='paragraph_icon' />7787
                            </p>
                        </div>
                        <FileCopyIcon fontSize='small' className='photo_icon' />

                    </div>
                    <div className='container_of_lined_pictures'>
                        <div>
                            <img src='pro.jpg' alt=' ' className='lined_image_browse' />
                            <p className='information_paragraph'>
                                <Favorite fontSize='small' className='paragraph_icon' />787 &nbsp;  &nbsp;  &nbsp; <ChatBubbleIcon fontSize="small" className='paragraph_icon' />7787
                            </p>
                        </div>
                        <FileCopyIcon fontSize='small' className='photo_icon' />

                    </div>
                    <div className='container_of_lined_pictures'>
                        <div>
                            <img src='pro.jpg' alt=' ' className='lined_image_browse' />
                            <p className='information_paragraph'>
                                <Favorite fontSize='small' className='paragraph_icon' />787 &nbsp;  &nbsp;  &nbsp; <ChatBubbleIcon fontSize="small" className='paragraph_icon' />7787
                            </p>
                        </div>
                        <FileCopyIcon fontSize='small' className='photo_icon' />

                    </div>
                </div>
            </div>

            <div className='third_section'>
                <div>
                    <video src="/Videos/why.mp4" className='third_video_browse' ref={videoRef} onClick={handlepress} />
                    <p className='information_paragraph_video'>
                        <Favorite fontSize='small' className='paragraph_icon' />787 &nbsp;  &nbsp;  &nbsp; <ChatBubbleIcon fontSize="small" className='paragraph_icon' />7787
                    </p>
                </div>
                <PlayArrowIcon fontSize='small' className='play_icon_moreProfiles' />

                <div className='photos'>

                    <div className='third_photos'>

                        <div className='third_container_of_photo'>
                            <div>
                                <img src='sister.jpg' alt=' ' className='third_image_browse' />
                                <p className='information_paragraph'>
                                    <Favorite fontSize='small' className='paragraph_icon' />787 &nbsp;  &nbsp;  &nbsp; <ChatBubbleIcon fontSize="small" className='paragraph_icon' />7787
                                </p>
                            </div>
                            <FileCopyIcon fontSize='small' className='photo_icon' />
                        </div>
                        <div className='third_container_of_photo' >
                            <div>
                                <img src='pro.jpg' alt=' ' className='third_image_browse' />
                                <p className='information_paragraph'>
                                    <Favorite fontSize='small' className='paragraph_icon' />787 &nbsp;  &nbsp;  &nbsp; <ChatBubbleIcon fontSize="small" className='paragraph_icon' />7787
                                </p>
                            </div>
                            <FileCopyIcon fontSize='small' className='photo_icon' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OtherProfiles
