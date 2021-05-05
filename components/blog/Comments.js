import React, { Component } from "react";

export default class Comments extends Component {

    constructor(props) {
        super(props);
        this.commentBox = React.createRef();
    }

    componentDidMount() {
        let colorMode = localStorage.getItem('chakra-ui-color-mode');
        const utteranceTheme = colorMode === "dark" ? "github-dark" : "github-light";
        let scriptEl = document.createElement("script");
        scriptEl.setAttribute("src", "https://utteranc.es/client.js");
        scriptEl.setAttribute("crossorigin", "anonymous");
        scriptEl.setAttribute("async", true);
        scriptEl.setAttribute("repo", "bjcarlson42/comments-benjamincarlson.io");
        scriptEl.setAttribute("issue-term", "og:title");
        scriptEl.setAttribute("theme", utteranceTheme);
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