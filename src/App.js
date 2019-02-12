import React, {Component} from 'react';
import './App.css';
import SearchBox from "./components/SearchBox";
import Menu from "./components/Menu";
import Widget from "./components/Widget";

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            "tags": [
                {"id": 1, "active": false, "title": "World Of Tanks"},
                {"id": 2, "active": true, "title": "World Of Warplanes"},
                {"id": 3, "active": false, "title": "World Of Warship"},
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <SearchBox/>
                <Menu tags={this.state.tags}/>
                <Widget/>
            </div>
        );
    }
}

export default App;
