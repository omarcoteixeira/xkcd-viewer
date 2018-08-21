import React, { Component } from 'react';
import Comic from './Comic';

class ComicNavigation extends Component {
    componentWillMount() {
        const size = 10;
        this.comics = [...Array(size)].map((e) => <Comic></Comic>)
    }

    render() {
        return (
            <div>
               <span>{this.comics}</span>
            </div>
        );
    }
}

export default ComicNavigation;