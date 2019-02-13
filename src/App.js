import React, {Component} from 'react';
import SearchBox from "./components/SearchBox";
import Tags from "./components/Tags";
import Widget from "./components/Widget";
import './App.css';
import "./components/style.css";

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        return (
            <div className="App">
                <SearchBox/>
                <Tags/>
                <Widget/>
            </div>
        );
    }
}

export default App;
