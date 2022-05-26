import React from 'react'
import "./Profile.css"
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Apps from '@material-ui/icons/Apps';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import CopyrightOutlinedIcon from '@material-ui/icons/CopyrightOutlined';

function Profile ()
{
    return (
        <div className='profile'>
            <div className='all_up_div' >

                <div className='up_div'>
                    <div className='profile_picture_container'>
                        <img src='me.jpg' alt='' className='profile_picture' />
                    </div>
                    <div className='information'>
                        <div className='first_line'>
                            <p>__bruce_the_1__</p>
                            <button className='edit_profile'>edit Profile</button>
                            <img src='settings.png' alt='' className='settings_icon_image' />
                        </div>
                        <p>
                            <span className='only'><strong>1</strong> post</span>
                            <span><strong>1.3M</strong> followers</span>
                            <span><strong>209</strong> following</span>
                        </p>
                        <p><strong>Asante Bruce</strong></p>
                    </div>
                </div>
            </div>
            <div className='down_div'>
                <div className='down_nav_bar'>
                    <ul className='nav_bar' type="none">
                        <li><Apps fontSize='small' className='nav_bar_icons' />POSTS</li>
                        <li><BookmarkIcon fontSize='small' className='nav_bar_icons' />SAVED</li>
                        <li><AssignmentIndOutlinedIcon fontSize='small' className='nav_bar_icons' />TAGGED</li>
                    </ul>
                </div>
                <div className='post_picture_container'>

                    <img src='me.jpg' className='post_picture' alt='' />
                    <FileCopyIcon className='icon_on_photo' />
                </div>
            </div>
            <p className='down_top_paragraph'>
                <span> Meta</span>
                <span>About</span>
                <span>Blog</span>
                <span>Jobs</span>
                <span>Help</span>
                <span>API</span>
                <span>Privacy</span>
                <span>Terms</span>
                <span>Top Accounts</span>
                <span>Hashtags</span>
                <span>Locations</span>
                <span>Instagram Lite</span>

            </p>
            <p className='down_paragraph'>
                <span>English<KeyboardArrowDownOutlinedIcon className='down_paragraph_icon' fontSize='small' /></span>
                <span><CopyrightOutlinedIcon className='down_paragraph_icon' fontSize='small' /> 2022 Instagram from Meta</span>

            </p>

        </div>
    )
}

export default Profile
