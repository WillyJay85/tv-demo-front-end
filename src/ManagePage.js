import React, { Component } from 'react';
import SiteNav from './SiteNav'
import Show from './Show'
import './ManagePage.css'
class ManagePage extends Component {
    savedTvShow = () => {
        console.log('Saved TV Show')
    }
    showSelected = () => {
        console.log('Show Selected')
    }
    showDeleted = () => {
        console.log('Show Deleted')
    }
    allowDelete = true
    render() {
        return (
            <div>
                <SiteNav />
                <main>
                    <section>
                        <h2 >Shows</h2>
                       
                            <Show selectHandler={this.showSelected} deleteHandler={this.showDeleted} Name="Sweet Choppers" allowDelete={true}/>
                            <Show selectHandler={this.showSelected} deleteHandler={this.showDeleted} Name="Flonation"  allowDelete={true}/>                          
                       
                    </section>
                    <section>
                       
                            <h2>New/Edit</h2>
                            <div>
                                <label>Name:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Rating:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Image URL:</label>
                                <input type="text" />
                            </div>
                            <button onClick={this.savedTvShow}>submit</button>
                        
                    </section>
                </main>
            </div>
        )
    }
}

export default ManagePage
