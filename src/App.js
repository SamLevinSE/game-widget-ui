import React, {Component} from 'react';
import './App.css';
import SearchBox from "./components/SearchBox";
import Tags from "./components/Tags";
import Widget from "./components/Widget";

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        return (
            <div className="App">
                <SearchBox/>
                <Tags tags={this.state.tags}/>
                <Widget/>
            </div>
        );
    }
}

export default App;
