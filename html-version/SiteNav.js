import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SiteNav extends Component {
    render() {
        return (

            <nav>
                <Link to="/Managepage">Managepage</Link>
                <Link to="/Previewpage">Previewpage</Link>
            </nav>
        )
    }
}
export default SiteNav