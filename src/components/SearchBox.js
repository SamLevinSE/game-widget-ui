import React from 'react';

function SearchBox() {
    return (
        <div className="gridContainer">
            <div className="search">
                <input type="text" placeholder="Search Box ..."/>
                <button>SEARCH</button>
            </div>
            <div className="search">
                <input type="text" placeholder="Why?"/>
                <button>Go</button>
            </div>
        </div>
    );
}

export default SearchBox;