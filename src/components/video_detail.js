import React from 'react';

const VideoDetail = ({video}) => {
  
  //if the video does not exist yet(Async issue), return Loading div
  if(!video) {
    return <div>Loading... </div>
  }

  const videoId = video.id.videoId;
  //string interpolation happening below!!! from dollar sign on
  const url = `https://www.youtube.com/embed/${videoId}`;
  //for iframes, all you need to do is provide an src with a url. Browser will go to 
  //url and provide content to iframe
  return (
    <div className='video-detail col-md-8'>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className='details'>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );

};

export default VideoDetail;