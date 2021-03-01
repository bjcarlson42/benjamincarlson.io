import React, { Component } from "react"
import { useColorMode } from '@chakra-ui/react'
export default class Comments extends Component {

    componentDidMount() {
        let script = document.createElement("script")
        let anchor = document.getElementById("inject-comments-for-uterances")
        script.setAttribute("src", "https://utteranc.es/client.js")
        script.setAttribute("crossorigin", "anonymous")
        script.setAttribute("async", true)
        script.setAttribute("repo", "bjcarlson42/comments-benjamincarlson.io")
        script.setAttribute("issue-term", "url")
        script.setAttribute("theme", "github-light")
        anchor.appendChild(script);
    }

    render() {
        return (
            <div id="inject-comments-for-uterances"></div>
        )
    }
}