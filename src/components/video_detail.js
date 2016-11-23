import React from 'react';

// The VideoDetail is a React FUNCTIONAL based component, no concept of state, only receives what to render throu the props parameter.
// es6 syntax sugar: the ({video}) is the same as decalaring a variable inside the component, var video = props.video
const VideoDetail = ({video}) => {

   if (!video) {
      return <div>Loading...</div>
   }

   const videoId = video.id.videoId;
   const videoUrl = `https://www.youtube.com/embed/${videoId}`;

   return (
      <div className="video-detail col-md-8">
         <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={videoUrl}></iframe>
         </div>
         <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
         </div>

      </div>
   );
};

export default VideoDetail;
