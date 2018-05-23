import React from 'react';
import VideoListItem from './video_lists_items';


const VideoList = (props) => {


    const videoItems = props.videos.map(video => {
        return( <VideoListItem 
                    key={video.etag} 
                    video={video} 
                    onSelectVideo={props.onSelectVideo} />
            );
    });


    return (
        <ul className="col-md-4 list-group">
        {videoItems}
        
        
        </ul>
    );
};

export default VideoList;


