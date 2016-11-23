import React from 'react';

// The VideoListItem component is a FUNCTIONAL based component, because it don't have any concept of state.
// The props.video contains one single video, because this was sendt in as the property "video" back in the
// parent "video_list.js" file, aka the "return <VideoListItem video={video} />".

// es6 syntax sugar, the es5 synax
// const VideoListItem = (props) => {
//    var video = props.video
// }
// is the same as es6 syntax
// const VideoListItem = ({video}) => {
//      // inside here we now have acces to the video variable, coming from props.video parameter.
// }
// The onVideoSelect callback function received as a property from the VideoList component.
//   The VideoList component received it as a property from the App Component.
//   It is rare to send callbacks like this more than 2 levels deep.
const VideoListItem = ({video, onVideoSelect}) => {
   //console.log(video);
   const imageUrl = video.snippet.thumbnails.default.url;

   return (
      <li onClick={ () =>onVideoSelect(video) } className="list-group-item">
         <div className= "video-list media">
            <div className="media-left">
               <img className="media-object" src={imageUrl}/>
            </div>

            <div className="media-body">
               <div className="media-heading">{video.snippet.title}</div>
            </div>
         </div>
      </li>
   );
};

export default VideoListItem;

// Try copy paste some jsx code (line 7) into
// https://babeljs.io/repl/#?experimental=false&evaluate=true&loose=false&spec=false&code=
// To see how the transpiler transforms the es6 code to es5.
