import React from 'react';
import VideoListItem from './video_list_item';

// The VideoList component is a FUNCTIONAL based component, because it dont have any concept of state.
// The props parameter contains whatever the parent components sendt in as a property when calling (instantiating) this component.
// The line "<VideoList videos={this.state.videos} />" back in index.js instantiates an instanse of VideoList,
//   and sends in a property named "videos". This property, with that exact name, becomes available in the props parameter,
//   like "props.videos".
//
// es6 syntax: const VideoList = (props) => { bla, bla, bla }
// is equsl to
// es5 syntax: const VideoList = function(props) {bla, bla, bla }

const VideoList = (props) => {

   // The map function iterates over the array of videos, and for each row calls the provided call-back function.
   // The fat-arrow callback function calls / instantantiates the VideoListItem component, one for each element in the props.videos arary.
   // Whenever we are rendering an array of elements of the same type, each elements must have a "key" property, so that React
   // can be optimized to only re-render the necessary elements when someting is changed. (aka. card in a stock example).
   // notice the "<" and ">"" in the return statement, which is acutally instantiating an object of the VideoListItem component.
   // The props.onVideoSelect callback function is sendt in a a property from the App component, we simply add is as a property
   //   when calling/instantiating the VideoListItem component.
   const videoItems = props.videos.map( (video) => {
      return (
         <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video} />
      )
   } );

   // React is smart enough to recognise that the videoItems is an array / list,
   // so it will try to render this list (of jsx-objects in our case, containing the html-output from the VideoListItem component),
   // so no need to iterate over the array like videoItems.forEach().
   return (
      <ul className="col-md-4 list-group">
         {videoItems}
      </ul>
   );
};

export default VideoList;
