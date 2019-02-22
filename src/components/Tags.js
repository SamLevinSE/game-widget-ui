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
            displaying: "none",
        }
    }

    // This method will be called each time user clicked on a button and will change the style and state (active tag)
    onClickBtn = (tag) => {
        if (this.state.smallScreen) {
            if (tag.id === this.state.activeTags.id) {
                this.getStyles();
            } else {
                this.getStyles();
                this.setState({activeTags: tag});
            }
        } else {
            this.setState({activeTags: tag});
        }
    };

    // This method will be called from the onClickBtn method for changing the state
    getStyles = () => {
        if (this.state.displaying === "none") {
            this.setState({displaying: "inline-block"})
        } else {
            this.setState({displaying: "none"})
        }
    };

    // This method will add the "->" before the title of active tag in small screen
    activeTag = (title) => {
        if (title === this.state.activeTags.title && this.state.smallScreen) {
            return this.state.displaying === "none" ? `\xa0\xa0\xa0\xa0\xa0\xa0${title}` : "->\xa0" + title
        } else if (title !== this.state.activeTags.title && this.state.smallScreen) {
            return this.state.displaying === "none" ? title : `\xa0\xa0\xa0\xa0\xa0\xa0${title}`
        } else {
            return title
        }

    };

    // This method will add the "->" before the title of active tag in small screen
    classTag = (title) => {
        if (title === this.state.activeTags.title && this.state.smallScreen) {
            return "activeSmallTag"
        } else if (title === this.state.activeTags.title && !this.state.smallScreen) {
            return "activeTag"
        } else {
            return "tag"
        }

    };

    render() {
        const {tags, activeTags, smallScreen, displaying} = this.state;

        // 1300 px
        const listItem = tags.map((tag) => (
            <button
                style={tag.title !== activeTags.title && smallScreen ? {display: displaying} : {display: "inline-block"}}
                className={tag.title === activeTags.title && !smallScreen ? "activeTag" : "btn"}
                key={tag.id}
                onClick={this.onClickBtn.bind(this, tag)}>
                {this.activeTag(tag.title)}
            </button>
        ));

        return (
            <>
                <div className="tagsSection"> {/* screens > 800px */}
                    {listItem}
                </div>
                <div className="gridTags"> {/* screens < 800px */}
                    {listItem}
                </div>
            </>
        );
    }
}

export default Tags;
