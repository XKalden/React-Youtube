import React, {Component} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';

import YSearch from 'youtube-api-search';

import SearchBar from './componets/search_bar';
import VideoList from './componets/video_lists';
import VideoDetail from './componets/video_details';


const API_KEY = 'AIzaSyCeCHsOhGIK_ZJMJX4VPzFsLwtHB0pX3uc';

// Create new componente

// some HTML
class App extends Component  {
    constructor(props){
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        // youtube Search Ajax
        this.videoSearch('zoo')
    }

    videoSearch(term){
        YSearch({key: API_KEY, term: term}, videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }





    render(){
        // lodash
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>

                <VideoList 
                    videos={this.state.videos}
                    onSelectVideo={selectedVideo => this.setState({selectedVideo})} />
            </div>
        );
    }
}


// Take this componet's genereate HTML and put it


ReactDOM.render(<App/>, document.getElementById('root'));


// On the page (in the DOM)

