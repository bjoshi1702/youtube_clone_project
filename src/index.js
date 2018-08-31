import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBMgJQAroWp5e-1c_wnW_O3UiPvRoK51iU';


// create new component and this component should produce some HTML

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('surfboards');

	}

	videoSearch(term) {

		YTSearch({key: API_KEY, term: term}, (videos) => {
		this.setState({ 
			videos: videos ,
			selectedVideo: videos[0]

		});
	
		// the above line will result in this.setState({ videos: videos }) - we can use when key and property are the same variable name


		});

	}

	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={ term => this.videoSearch(term)}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
				videos= {this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));



// 

// second argument is a reference to an existing DOM node on the page.

// const means this is a final value for this variable. We can not change it.
// We write many components but none of them actually automatically get inserted into HTML document. So, we have to tell react to take this component and show them into HTML document.
// Take this component's generated HTML and put it on the page (in the DOM)


