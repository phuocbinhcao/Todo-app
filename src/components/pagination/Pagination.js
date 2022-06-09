import React, { Component } from 'react';
import '../../styles/pagination.scss'

class Pagination extends Component {
    render() {
        return (
            <div className="pagin">
                <button><i className="fa-solid fa-angle-left"></i></button>
                <div className="pagin__number">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                <button><i className="fa-solid fa-angle-right"></i></button>
            </div>
        );
    }
}

export default Pagination;