import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';




const API_KEY = 'AIzaSyBwCoIRLB7koQroOWAtsfnCKJarItVbypU';
//const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';




class App extends Component{
//using class in extends
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null

        };//video list
        this.videoSearch('NBA');

    }
    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            //this.setState ={ videos :videos}
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500 );
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    OnVideoSelect ={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}  />
            </div>
        );
    };

}

ReactDom.render(<App />, document.querySelector('.container')); //App is a class not a instance therefore we need create a instance ( app -><App></App>)