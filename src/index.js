import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = "AIzaSyD0SrCNNFbiUFanEbk8ZGpYCSdmcjSAEY0";

// The App component is a React CLASS based component, because it needs to have a concept of state.
class App extends Component  {
   constructor(props) {
      super(props);

      // Initialization of the state object.
      this.state = {
         videos: [],
         selectedVideo: null
      };

      // Initial search.
      this.videoSearch('cats');
   }

   videoSearch(term) {
      // The YTSearch method, takes two parameter. API_KEY and a callback function with the results from the youtube search.
      // The callback is here difined with the es6 fat arrow function syntax.
      // The fat arrow is the same as writing
      //    function(videos) {
      //       this.setState({});
      //    }
      YTSearch({ key: API_KEY, term: term }, (videos) => {
         this.setState({
            videos: videos,
            selectedVideo: videos[0]
         });
      });

   }

   render() {
      // Use of lodash debounce method, that ensures that the function in the first parameter is only called every 300 ms.
      const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300 );

      return (
         <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
               onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
               videos={this.state.videos} />
         </div>
      )
   }
}

// Take this component's generated HTML and put in on the page (in the DOM).
// The <App /> instantiates an object of the App components, like calling new App(),
//    which means that the constructor of the App class is called (automatically).
ReactDOM.render( <App />, document.querySelector('.container') );

// Downwords dataflow: - Only the most parent component in an application should be responsible for fetching information
