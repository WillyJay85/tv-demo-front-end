import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SiteNav from './SiteNav'
import Show from './Show'
class PreviewPage extends Component {

    static propTypes = {
        show: PropTypes.object.isRequired

    }

    renderShows = () => {
        return (
            <Show name={this.props.show.name} selectHandler={this.props.show.showSelected} />
        )
    }

    //showSelected = () => {
        
        
        
    //}
    render() {
        console.log(this.props.show)
        return (
            <div>
                <SiteNav />
                <main>
                    <section>


                        <h2>Shows</h2>
                        {this.renderShows()}
                    </section>
                    <section>
                        <div>
                            <h2>{this.props.showSelected.name}</h2>
                            <h2>{this.props.showSelected.rating}</h2>

                            <img src={this.props.showSelected.imageUrl} alt="The show's preview pic" />
                        </div>
                    </section>
                </main>
            </div>
        )

    }
}
export default PreviewPage