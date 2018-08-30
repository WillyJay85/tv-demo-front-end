import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SiteNav extends Component {
    render() {
        return (

            <nav>
                <Link to="/">ManagePage</Link>
                <div className="vl">&nbsp;</div>
                <Link to="/preview">PreviewPage</Link>
                
            </nav>
        )
    }
}
export default SiteNav