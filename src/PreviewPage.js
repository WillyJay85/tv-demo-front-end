import React, { Component } from 'react';
import SiteNav from './SiteNav'
class PreviewPage extends Component {
render (){
return (

    <div>
           <SiteNav/>



<main>
    <section>
            <h2>Shows</h2>
            <div class="box">

                    <button onclick="clickedSweetChoppers()">Sweet Choppers</button>


            </div>
            <div class="box2">
                    <button onclick="clickedFloNation()">Flonation</button>
            </div>
        </section>

        <section>
            <form>
                <div>
                <h2>Sweet Choppers</h2> 
                <img src="http://cdp.azureedge.net/products-private/prod/da0e65f9-9b7b-452e-83c5-9167b3549083/eb73d512-ad72-4fe6-9ff8-131adb9be0a2/00000000-0000-0000-0000-000000000000/18fabcb4-cdfb-452b-a8c0-c1e0f686615d/6cc85e23-3030-48d2-b531-a888010aeb0c/6000000001.jpg" alt="Honda Fury" width="900" height="600" />
           </div>
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
export default PreviewPage