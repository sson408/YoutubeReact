import React from 'react';


const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading......</div>;
    }
    //const VideoId = video.snippet.channelId; //I think it is same as    const VideoId = video.id.VideoId; let me try it next time
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    //const VideoUrl = 'https://www.youtube.com/embed/' + VideoId;  //same as before

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive  embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

            <div className="details" >
                <div> {video.snippet.title}  </div>
                <div> {video.snippet.description} </div>
            </div>
        </div>


    );
};
export default VideoDetail;