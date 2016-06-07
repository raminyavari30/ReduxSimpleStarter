import _ from 'lodash';
//assign library to variable React
import React, {Component} from 'react';
//Create a new component. This component should 
//produce some HTML
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDPMMAFiHqhxmuZvrZ7-JDy-i7mKUAwAqY';

class App extends Component{
  constructor(props){
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };
    this.videoSearch('Stephen Curry highlights');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term},(videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }


  render() {  
    //debounce calls the passed in function once every secondParam ms
    const videoSearch = _.debounce(term => {this.videoSearch(term) }, 300)

    return (
      <div> 
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
         onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
         videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


// Take this component's generated
//HTML and put it on the page
//(in the DOM)

