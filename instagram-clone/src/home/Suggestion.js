import React from 'react'
import "./Suggestion.css"
import Avatar from "@material-ui/core/Avatar"

function Suggestion ({ smallProfileName, followStatus, smallProfilePicture })
{
    return (
        <div className='suggestion'>

            <Avatar src={smallProfilePicture} />
            <div className='suggestion_info'>

                <p className='suggestion_profile_name'>{smallProfileName}</p>
                <p className='suggestion_user_name'>{followStatus}</p>
            </div>
            <p className='follow'>Follow</p>

        </div>
    )
}

export default Suggestion
