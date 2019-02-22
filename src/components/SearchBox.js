import React from 'react';

function SearchBox() {
    return (
        <>
            {/*Display: Grid*/}
            <div className="gridContainer">
                <div className="search">
                    <input type="text"
                           className="input-box"
                           placeholder="Search"/>
                    <button className="search-btn">SEARCH</button>
                </div>
                <div className="search">
                    <input type="text"
                           className="input-box"
                           placeholder="Why?"/>
                    <button className="search-btn">GO</button>
                </div>
            </div>
            <hr/>
            {/*Display: Flex*/}
            <div className="gridContainer">
                <div className="search-2">
                    <input type="text"
                           className="input-box"
                           placeholder="Search"/>
                    <button className="search-btn">SEARCH</button>
                </div>
                <div className="search-2">
                    <input type="text"
                           className="input-box"
                           placeholder="Why?"/>
                    <button className="search-btn">GO</button>
                </div>
            </div>
        </>
    );
}

export default SearchBox;