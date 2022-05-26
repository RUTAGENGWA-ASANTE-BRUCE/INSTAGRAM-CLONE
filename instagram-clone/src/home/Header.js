import React, { useState } from 'react'
// import "../../node_modules/bootstrap/dist/css/bootstrap-reboot.rtl.css"
import { Link } from 'react-router-dom';
import "./Header.css"
import { css } from "@emotion/css"
import CloseIcon from '@material-ui/icons/Close';
// @ts-ignore
import ig_logo from "./instagram.png"
import HomeIcon from "@material-ui/icons/Home"
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
// @ts-ignore
import headerProfile from "C:/Users/pc/Pictures/Saved Pictures/hello.jpg"
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined';
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';
function Header ()
{

    const [display, setDisplay] = useState("none")
    const hide = () =>
    {
        setDisplay("none")
        setDisplay_notifications("none")
        setDisplay_dropdown("none")
    }
    const show = () =>
    {
        setDisplay("flex")
        setDisplay_dropdown("none")
        setDisplay_notifications("none")
    }

    const [display_dropdown, setDisplay_dropdown] = useState("none")
    var number = 0
    const hid_dropdown = () =>
    {

        setDisplay_dropdown("none")
    }
    const show_dropdown = () =>
    {

        if (number % 2 === 0) {
            number = number + 1
            setDisplay_dropdown("block")
            setDisplay_notifications("none")

        }
        else {
            hid_dropdown()
        }

    }


    const card = css`padding: 365px;
    background-color: rgb(0,0,0,0.8);
    font-size: 24px;
    z-index: 1;
    display: ${display};
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 200px;
    position: fixed;
    
    border-radius: 4px;
  `
    const dropdown = css`
    position: absolute;
    z-index: 1;
    display: ${display_dropdown};
    width: 235px;
    box-shadow: 0.5px 2px 8px 4px rgba(0,0, 0, 0.1);
    border:1px solid lightgray;
    margin-left: 705px;
    background-color: white;
    margin-top: 225px;
    border-radius: 5px;
    p{
        flex: 1;
        display: flex;
        flex-direction: row;
        text-align: left;
        padding: 5px;
        font-size: small;
    }
    p:hover{
     background-color: lightgray
    }
    `
    const dropdown_likes = css`
    position: absolute;
    z-index: 1;
    display: flex;
    flex: 1;
    overflow: scroll;
    
    flex-direction: column;
    width: 435px;
    box-shadow: 0.5px 2px 8px 4px rgba(0,0, 0, 0.1);
    border:1px solid lightgray;
    background-color: white;
    margin-right: 445px;
    margin-top: 18px;
    border-radius: 5px;
    ::-webkit-scrollbar{
        display: none;
      }
    
    direction: ltr;`
    const up_arrow_likes = css`
    right: 519px;
    top: 35px;
    position: absolute;`
    const [display_notifications, setDisplay_notifications] = useState("none")
    var number2 = 0
    const hid_notifications = () =>
    {

        setDisplay_notifications("none")
    }
    const show_notifications = () =>
    {

        if (number2 % 2 === 0) {
            number2 = number2 + 1
            setDisplay_notifications("block")
            setDisplay_dropdown("none")

        }
        else {
            hid_notifications()
        }

    }

    const notifications = css`
    display:  ${display_notifications};
    direction: rtl;`

    const searches = css`
    position: absolute;
    z-index: 1;
    display: flex;
    flex: 1;
    overflow: scroll;
    width: 355px;
    box-shadow: 0.5px 2px 8px 4px rgba(0,0, 0, 0.1);
    border:1px solid lightgray;
    ::-webkit-scrollbar{
        display: none;
      }
    margin-top: 418px;
    margin-right: 65px;
    height: 350px;
    background-color: white;

    `
    const dropdown_searches = css`
    position: absolute;
    z-index: 1;
    flex-direction: column;
    width: inherit;
    display: flex;
    flex: 1;
    margin-top: 5px;

    `
    const [displaySearches, setDisplaySearches] = useState("none")
    var number3 = 0
    const hidSearches = () =>
    {

        setDisplaySearches("none")
    }
    const showSearches = () =>
    {

        if (number3 % 2 === 0) {
            number3 = number3 + 1
            setDisplaySearches("block")
            setDisplay_notifications("none")
            setDisplay_dropdown("none")

        }
        else {
            hidSearches()
        }

    }
    const all_searches = css`
    display: ${displaySearches};
    position: absolute;
    background-color: green;

    margin-bottom: 770px;
    margin-right: 420px;
    `

    const up_arrow_search = css`
    top: 40vh;
    left: 150px;
    position: absolute;
    `
    return (
        <div className='header'>
            <div className='header_middle'>
                <img src={ig_logo} className='instagram_logo' alt='' />
                <input type={"search"} name="firstName" className='header_text' onClick={showSearches}></input>

            </div>

            <div className='header_icons' >
                <Link to={"/"}>
                    <HomeIcon className='inside_icons' />
                </Link>
                <Link to={"/messages"}><img src='messenger.png' alt='' className='messageIcon' /></Link>


                <button className='create_post_button' onClick={show}>

                    <AddBoxOutlinedIcon className='inside_icons' />
                </button>


                <Link to={"/explore"} >
                    <ExploreOutlinedIcon className='inside_icons' /></Link>
                <button className="favorite_button" onClick={show_notifications}>

                    <FavoriteBorderOutlinedIcon className='inside_icons' />
                </button>
                <button className='profile_icon' onClick={show_dropdown}>

                    <svg width={32} height={32} className='small_profile_picture'>
                        <clipPath id='headProfile' >
                            <circle cx={15} cy={15} r="10" stroke='rgb(128, 20, 20)' stroke-width={1} fill='gray' />

                        </clipPath>
                        <image clip-path='url(#headProfile)' xlinkHref={headerProfile} width={32} height={32} />

                    </svg>
                </button>
            </div>
            <div
                className={card}>
                <button className='close_button' onClick={hide} >

                    <CloseIcon className='close_icon' fontSize='large' />
                </button>
                <div className='post_container'>
                    <h6>Create new post</h6>
                    <div className='myIcons'>
                        <img src='pht.png' alt='' className='image_icon' dir='rtl' />
                        <img src='play.png' alt='' className='play_icon' />
                    </div>
                    <p >Drag photos and videos here</p>
                    <button className='start_create_post'>select from computer</button>
                </div>
            </div>

            <div className={dropdown}>
                <Link to={"/profile"} className='profile_link' >

                    <p><AccountCircleRoundedIcon fontSize='small' className='dropdown_icons' />Profiles</p>
                </Link>
                <p><BookmarkBorderOutlinedIcon fontSize='small' className='dropdown_icons' />Saved</p>
                <p><img src='settings.png' alt='' width={16} height={16} className='settings_icon dropdown_icons' />Settings</p>
                <p><AutorenewOutlinedIcon fontSize='small' className='dropdown_icons private_icon' />Switch Accounts</p>
                <p className='dropdown_icons logout'>Log Out</p>
                <ArrowDropUpOutlinedIcon className="up_arrow" fontSize='large' />

            </div>

            <div className={notifications}>

                <div className={dropdown_likes}>
                    <div className='each_notification'>

                        <img src='sister.jpg' alt='' className='likers_photo' />

                        <p><strong> Karamage Yves</strong> started following you. <span className='day_when_done'>2d</span></p>
                        <button className='follow_status_button'><strong>Following</strong></button>
                    </div>
                    <div className='each_notification'>

                        <img src='sister.jpg' alt='' className='likers_photo' />

                        <p><strong> Karamage Yves</strong> likes your post. <span className='day_when_done'>2d</span></p>
                        <img src='me.jpg' alt='' height="35px" width="35px" className='liked_photo' />
                    </div>
                    <div className='each_notification'>

                        <img src='sister.jpg' alt='' className='likers_photo' />

                        <p><strong> Karamage Yves</strong> started following you. <span className='day_when_done'>2d</span></p>
                        <button className='follow_status_button'><strong>Following</strong></button>
                    </div>
                    <div className='each_notification'>

                        <img src='sister.jpg' alt='' className='likers_photo' />

                        <p><strong> Karamage Yves</strong> likes your post. <span className='day_when_done'>2d</span></p>
                        <img src='me.jpg' alt='' height="35px" width="35px" className='liked_photo' />
                    </div>
                </div>
                <ArrowDropUpOutlinedIcon className={up_arrow_likes} fontSize='large' />
            </div>

            <div className={all_searches}>
                <ArrowDropUpOutlinedIcon className={up_arrow_search} fontSize='large' />

                <div className={searches}>

                    <div className={dropdown_searches}>
                        <p className='descriptions'>
                            <strong>Recent</strong>  <span>Clear All</span>
                        </p>
                        <div className='each_searched'>
                            <div className='searched_photo_info'>
                                <div className='searched_photo_container'>

                                    <img src='sister.jpg' alt='' className='searched_photo' />
                                </div>
                                <div className='searched_info'>

                                    <p><strong> Karamage Yves </strong></p>
                                    <p className='day_when_done'>papa cyangwe </p>
                                </div>
                            </div>
                            <CloseIcon className='remove_icon' />
                        </div>
                        <div className='each_searched'>
                            <div className='searched_photo_info'>
                                <div className='searched_photo_container'>

                                    <img src='sister.jpg' alt='' className='searched_photo' />
                                </div>
                                <div className='searched_info'>

                                    <p className='profile_name_only'><strong> Karamage Yves </strong></p>
                                </div>
                            </div>
                            <CloseIcon className='remove_icon' />
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
