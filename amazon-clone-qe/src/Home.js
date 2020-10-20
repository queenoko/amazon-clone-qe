import React from 'react';
import Product from './Product';
import "./Home.css";

function Home() {
    return (
        <div className="home">
           <img 
             className="home__image"
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB406828640_.jpg"
             alt=""
          /> 

          {/* Product id. title, price. rating, image */}
          <div className="home__row">
              <Product 
                id="123456775"
                title="Comic books for children for all ages"
                price={499.98}
                rating={4}
                image="https://upload.wikimedia.org/wikipedia/commons/6/65/Fair_use_icon_-_Comics.svg"
              />

              <Product 
                id="470726469188"
                title="Washing Machine"
                price={45499.99}
                rating={5}
                image="https://upload.wikimedia.org/wikipedia/commons/b/b3/Washing_Machine_Beko.jpg"
              />
          </div>

          <div className="home__row">
              <Product 
                id="480469474728"
                title="Wrist Watch"
                price={4999.55}
                rating={3}
                image="https://upload.wikimedia.org/wikipedia/commons/a/ad/Stopwatch_Mode_in_Casio_Wristwatch.jpg"
              />

              <Product 
                id="57902175199"
                title="Speaker"
                price={7699.78}
                rating={4}
                image="https://upload.wikimedia.org/wikipedia/commons/6/67/JBL_Flip_3_bluetooth_speaker_%28DSCF2653%29.jpg"
              />

              <Product 
                id="6482315612"
                title="Iphone 11 Pro"
                price={154999.98}
                rating={2}
                image="https://upload.wikimedia.org/wikipedia/commons/9/94/IPhone_11_Pro_Midnight_Green.svg"
              />
          </div>

          <div className="home__row">
              <Product 
                id="4864887194561"
                title="Television"
                price={110969.99}
                rating={5}
                image="https://upload.wikimedia.org/wikipedia/commons/8/87/LG_smart_TV.png"
              />

          </div>

        </div>
    );
}

export default Home
