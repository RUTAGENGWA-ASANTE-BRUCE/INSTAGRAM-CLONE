import React, { useState, useEffect } from 'react'
import "./MessageBody.css"
import NoteAltIcon from '@material-ui/icons/Note';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Avatar } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import InsertPhotoIcon from '@material-ui/icons/InsertPhotoOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import axios from "../home/axios"
function MessageBody ()
{
    const [newMessage, setNewMessage] = useState({
        message: ""
    })
    function submit (e)
    {
        e.preventDefault()
        axios.post("/instagram/sendermessages", { message: newMessage.message }).then(res => { console.log(res.data) })
    }
    function handle (e)
    {
        const mymessage = { ...newMessage }
        mymessage[e.target.id] = e.target.value
        setNewMessage(mymessage)
        console.log(newMessage)
    }

    const [message, setMessage] = useState([])
    useEffect(() =>
    {
        async function fetchMessage ()
        {
            const req = await axios.get("/instagram/sendermessages")
            setMessage(req.data)
        }
        fetchMessage()
    }, [])

    return (
        <div className='message_body'>
            <div className='all'>

                <div className='aside_chat'>
                    <div className='aside_chat_header'>
                        <div>
                            <h2>__bruce_the_1__</h2>
                            <KeyboardArrowDownIcon />
                        </div>
                        <NoteAltIcon />
                    </div>
                    <div className='aside_chat_header_people'>
                        <div className='aside_chat_header_person'>
                            <Avatar src='' />
                            <div className='person_information'>
                                <h4>Ni Kalisa</h4>
                                <p>Active hour</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='real_chat'>
                    <div className='real_chat_header'>
                        <div>
                            <div className='real_chat_header_people'>
                                <div className='real_chat_header_person'>
                                    <img src='messi.png' className='chat_profile_image' alt='' />
                                    <div className='chat_person_information'>
                                        <h4>Ni Kalisa</h4>
                                        <p>Active hour</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <InfoIcon className='more_information' />
                    </div>
                    <div className='chat_body'>
                        {message.map((eachMessage) => (

                            <div className='every_chat_sender'>

                                <div className='time'>

                                    <p className='time_stamp'>{new Date().toUTCString()}</p>
                                </div>
                                <div className='chat_and_icons'>

                                    <p className='chat_receiver'>
                                        {eachMessage.message}
                                    </p>
                                    <div className='hide_for_sender'>
                                        <InsertEmoticonIcon fontSize='small' />
                                        <ReplyOutlinedIcon fontSize='small' />
                                        <MoreHorizOutlinedIcon fontSize='small' />

                                    </div>
                                </div>

                            </div>
                        ))}

                        <div className='every_chat_receiver'>

                            <div className='time'>
                                <p className='time_stamp'>{new Date().toUTCString()}</p>
                            </div>
                            <div className='chat_and_icons'>

                                <img src='messi.png' className='receiver_profile_image' alt='' />
                                <p className='chat_message'>

                                    This is a receiver's message
                                </p>
                                <div className='hide_for_receiver'>
                                    <InsertEmoticonIcon fontSize='small' />
                                    <ReplyOutlinedIcon fontSize='small' />
                                    <MoreHorizOutlinedIcon fontSize='small' />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer'>

                        <div className='chat_footer'>
                            <InsertEmoticonIcon className='footer_icons' />
                            <form onSubmit={(e) => submit(e)} >
                                <input onChange={(e) => handle(e)} id='message' type="text" placeholder='Type a message' value={newMessage.message} />
                                <button type='submit'>Send a message</button>
                            </form>
                            <InsertPhotoIcon className='footer_icons' />
                            <FavoriteBorderOutlinedIcon className='footer_icons' />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default MessageBody
