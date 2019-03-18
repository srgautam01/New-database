import React, {Component} from 'react';
import './category.css';
import {Link} from 'react-router-dom';
class Category extends Component{
    constructor(props) {
        super(props)

    }
    render() {
        const { categoryName } = this.props.match.params;

        console.log(categoryName);

        return (
            <div className={"Category"}>
                <h1>I am category page showing listings of {categoryName}s.</h1>
            </div>
        )
    }
}

export default Category;