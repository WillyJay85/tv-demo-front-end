import React, { Component } from 'react';
import SiteNav from './SiteNav'
import Show from './Show'
import './ManagePage.css'
class ManagePage extends Component {
    showSelected = () => {
        return (console.log("showSelected"))
    }
    showDeleted = () => {
        return (console.log('showDeleted'))
    }
    allowDelete = true
    render() {
        return (
            <div>
                <SiteNav />
                <main>
                    <section>
                        <h2 >Shows</h2>
                        <div className="box">
                            <Show selecthandler={this.showSelected} Name="Sweet Choppers" />
                            <button deletehandler={this.showDeleted} onClick= "clickedDelete()" />
                            <div className="box2">
                                <Show selecthandler={this.showSelected} Name="Flonation"  />
                                <button deletehandler={this.showDeleted} onClick="clickedDelete()" />
                            </div>
                        </div>
                    </section>
                    <section>
                        <form>
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
                            <button onClick="clickedSubmit()">submit</button>
                        </form>
                    </section>
                </main>
            </div>
        )
    }
}

export default ManagePage
