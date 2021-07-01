import React, { Component } from "react";

export default class Comments extends Component {

    constructor(props) {
        super(props);
        this.commentBox = React.createRef();
    }

    componentDidMount() {
        let scriptEl = document.createElement("script");
        scriptEl.setAttribute("src", "https://giscus.app/client.js");
        scriptEl.setAttribute("data-repo", "bjcarlson42/benjamincarlson.io");
        scriptEl.setAttribute("data-repo-id", "MDEwOlJlcG9zaXRvcnkyNzI4MTAyMzA");
        scriptEl.setAttribute("data-category", "General");
        scriptEl.setAttribute("data-category-id", "MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyMDA3MjQ5");
        scriptEl.setAttribute("data-mapping", "title");
        scriptEl.setAttribute("data-reactions-enabled", "1");
        scriptEl.setAttribute("data-theme", "preferred_color_scheme");
        scriptEl.setAttribute("crossorigin", "anonymous");
        scriptEl.setAttribute("async", true);
        this.commentBox.current.appendChild(scriptEl);
    }

    render() {
        return (
            <div style={{ width: '100%' }}>
                <div ref={this.commentBox} />
            </div>
        );
    }
}
