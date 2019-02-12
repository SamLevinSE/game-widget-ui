import React from 'react';

const Menu = (props) => {
    const tags = props.tags;
    let clickEvent = () => {
        //TODO: change the state for the active tag
        console.log("clicked");
    };

    // 800 px
    const smallScreen = window.innerWidth < 800;
    let unActiveTags = [];
    let activeTags;
    const activeBtn = tags.map(tag => {
        if (!tag.active) {
            unActiveTags.push(tag.title)
        } else {
            activeTags = tag.title
        }
    });

    let showHide = "none";
    const changeStyle = () => {
        console.log(showHide);
        if (showHide === "none") {
            return showHide = "block"
        } else {
            return showHide = "none"
        }
    };


    // 1300 px
    const listItem = tags.map((tag) => (
        <button
            style={tag.active ? {color: "white", backgroundColor: "#666666"} : {}}
            className="btn"
            key={tag.id}
            onClick={tag.active && smallScreen ? changeStyle : clickEvent}
            >
            {tag.title}
        </button>
    ));

    // Component return
    return (
        <>
            <div className="tagsSection">
                {listItem}
            </div>
            <div className="gridTags">
                {listItem}
            </div>
        </>
    );
};

export default Menu;
