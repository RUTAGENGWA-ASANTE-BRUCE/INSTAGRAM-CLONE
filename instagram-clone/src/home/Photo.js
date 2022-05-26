import React from 'react'
import "./Photo.css"
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined"

function Photo ({ photoProfileName, photoLocationNickName, photoLikedBy, photoProfilePicture, photoLikedByProfilePicture, myImage })
{
    return (
        <div className='photo_container'>
            <div className='profile_up'>
                <svg width={70} height={70} className='profile_picture_container_up'>
                    <clipPath id='bigProfile'>
                        <circle cx={20} cy={30} r="15" stroke='rgb(128, 20, 20)' stroke-width={2} fill='gray' />

                    </clipPath>
                    <image clip-path="url(#bigProfile)" xlinkHref={photoProfilePicture} width={70} height={70} />
                </svg>
                <div className="profile_up_info">
                    <h4>{photoProfileName}</h4>
                    <p>{photoLocationNickName}</p>
                </div>
            </div>
            <img className='photo' src={myImage} alt='' />
            <div className='swipe_buttons'>
                <div className='swipe_buttons_icons'>
                    <div>

                        <FavoriteOutlinedIcon className='icons' />
                        <AddCommentOutlinedIcon className='icons' />
                        <SendOutlinedIcon className='icons' />
                    </div>
                    <p>    </p>
                    <BookmarkBorderOutlinedIcon className='book_mark_icon' />
                </div>
                <div className='profile_down'>
                    <div className='liked_by'>

                        <svg width={30} height={30} className='profile_picture_container_down'>
                            <clipPath id='smallProfile'>
                                <circle cx={17} cy={15} r="8" stroke='rgb(128, 20, 20)' stroke-width={1} fill='gray' />

                            </clipPath>
                            <image clip-path='url(#smallProfile)' xlinkHref={photoLikedByProfilePicture} width={35} height={35} />
                        </svg>
                        <p className='text1'>Liked By {photoLikedBy}</p>
                    </div>
                    <p className='text2'>{photoProfileName} oficcial </p>
                </div>
                <div className='comment'>
                    <EmojiEmotionsOutlinedIcon className='emoji' />
                    <textarea name='comment' rows={1} cols={10} className='comment_text' placeholder='Add a comment...' />
                    <p className='post_text'>Post</p>
                </div>
            </div>

        </div>

    )
}

export default Photo
