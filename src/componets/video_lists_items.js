import React from 'react';


const VideoListItem = ({video, onSelectVideo}) => {

    const imageURL = video.snippet.thumbnails.default.url;

    const title = video.snippet.title

    console.log(video);

    return(
        <li onClick={()=>{onSelectVideo(video)}} className="list-group-item">

                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imageURL}/>
                    </div>

                    <div className="media-body">
                        <div className="media-heading">

                            {title}
                        
                        </div>
                    </div>
            
                </div> 
        </li>
    );
}

export default VideoListItem;


