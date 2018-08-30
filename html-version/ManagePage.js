import React, { Component } from 'react'
import SiteNav from './SiteNav'

class Manage page extends Component  {
render () {
return (
    <div>

    <nav class="nav">



<div class="vl">&nbsp;</div>

<div>Preview</div>

</nav>


<main>

<section>
    <h2 style="font-size:30px; text-decoration: underline">Shows</h2>
    <div class="box">

        <button onclick="clickedSweetChoppers()"style="font-size:25px;">Sweet Choppers</button>
        <button onclick="clickedDelete()" class="circle">-</button>


    </div>
    <div class="box2">
        <button onclick="clickedFloNation()" style="font-size:25px;">Flonation</button>
        <button onclick="clickedDelete()" class="circle">-</button>
    </div>
</section>

<section>
    <form>
        <h2 style="font-size:30px">New/Edit</h2>
        <div><label>Name:</label>
        <input type="text">
        </div>
        <div><label>Rating:</label>
        <input type="text"></div>
        <div><label>Image URL:</label>
        <input type="text"></div>
        <button onclick="clickedSubmit()">submit</button>
    </form>
</section>



</main>
<footer>
    &copy;
    <span>copyright</span> <span>2018</span> <span>Josh Brackett</span>
</footer>

        
    </div>
)

}
}