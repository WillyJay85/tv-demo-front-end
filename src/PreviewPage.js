import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SiteNav from './SiteNav'
import Show from './Show'
class PreviewPage extends Component {

    static propTypes = {
        show: PropTypes.object.isRequired,
        tvShows: PropTypes.array.isRequired

    }
    state = {
        showSelected: {
          name: '',
          rating: '',
          imageUrl: ''
        }
      }
    renderShows = () => {
        const filteredTVShows = this.props.tvShows.filter(
            (tvShow) =>  {
                return tvShow.rating < 5
            }
        )
        return filteredTVShows.map((tvShow, i) => {
            return (
                <Show key={i} name={tvShow.name} selectHandler={this.showSelected} />
            )
            })
    }

    showSelected = () => {
        this.setState ({
            showSelected: this.props.showSelected
        })

        }
    calculateAvgRating = () => {
        if (this.props.tvShows.length < 2){
        return 0 
    }
        const sumOfRatings = this.props.tvShows.reduce(
            (prevValue, currentValue, i) => {
                return (prevValue.rating || prevValue) + currentValue.rating
                
            }
        )
        const avgRating = sumOfRatings / this.props.tvShows.length
        return Math.round(avgRating *10) /10
    }

    render() {
        console.log(this.props.show)
        return (
            <div>
                <SiteNav />
                <main>
                    <section>


                        <h2>Shows</h2>
                        <h3>Avg Rating: {this.calculateAvgRating()}</h3>
                        {this.renderShows()}
                    </section>
                    <section>
                        <div>
                            <h2>{this.state.showSelected.name}</h2>
                            <h2>{this.state.showSelected.rating}</h2>

                            <img src={this.state.showSelected.imageUrl} alt="The show's preview pic" />
                        </div>
                    </section>
                </main>
            </div>
        )

    }
}
export default PreviewPage