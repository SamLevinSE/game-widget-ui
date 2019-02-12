import React, {Component} from 'react';

class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smallScreen: window.innerWidth < 800,
            tags: [
                {"id": 1, "title": "World Of Tanks"},
                {"id": 2, "title": "World Of Warplanes"},
                {"id": 3, "title": "World Of Warship"},
            ],
            activeTags: {"id": 2, "title": "World Of Warplanes"},
            displayingA: "inlineBlock",
            displayingB: "inlineBlock",
        }
    }

    onClickBtn = (tag) => {
        console.log(this.state.displayingA);
        console.log(this.state.displayingB);
        console.log(this.state.activeTags);

        if (this.state.smallScreen) {
            if (tag.id === this.state.activeTags.id) {
                this.getStyles();
                console.log("change show/hide style");
            } else {
                this.getStyles();
                this.setState({activeTags: tag});
                console.log("make this btn active");
            }
        } else {
            this.setState({activeTags: tag});
            console.log("make this btn active big screen");
        }
    };

    getStyles = () => {
        if (this.state.displayingB === "none") {
            console.log("change show");
            this.setState({displayingB: "inlineBlock"})
        } else {
            console.log("change hide");
            this.setState({displayingB: "none"})
        }
        console.log(this.state.displayingA);
        console.log(this.state.displayingB);
        console.log(this.state.activeTags);
    };

    activeTag = (title) => "-> " + title;

    render() {
        const {tags, activeTags, smallScreen, displayingA, displayingB} = this.state;

        // 1300 px
        const listItem = tags.map((tag) => (
            <button
                style={tag.title !== activeTags.title && smallScreen ? {display: displayingB} : {display: displayingA}}
                className={tag.title === activeTags.title && !smallScreen ? "activeTag" : "btn"}
                key={tag.id}
                onClick={this.onClickBtn.bind(this, tag)}>
                {tag.title === activeTags.title && smallScreen ? this.activeTag(tag.title) : tag.title}
            </button>
        ));

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
    }
}

export default Tags;
