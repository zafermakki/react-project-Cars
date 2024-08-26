import React from 'react'
import "./carsInformation.css"
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import { Button } from '@mui/material';
import l1 from "../../logo/bmwlogo.jpg";
import l2 from "../../logo/mercedes.jpg";
import l3 from "../../logo/rolls.jpg";
import l4 from "../../logo/audi.jpg";
import l5 from "../../logo/mazda.jpg";
import l6 from "../../logo/dodge.png";
import l7 from "../../logo/lamborghini.jpg";
const CarsInformation = () => {

  return (
    <div className='main'>
        <div>
            <div >
                <h2 className='bh2' style={{color: "#2196f3"}}>BMW</h2> 
                <p>
                  - BMW is a German car company founded in 1916.<br/>
                  - It is one of the most famous luxury and sports car brands.<br/>
                  - BMW offers a wide range of models in various categories, from sedans to sports utility vehicles.
                  <div className='cars'>
                      <p>- To visit offical BMW website <SwipeRightAltIcon sx={{color: "#2196f3"}}/>
                        <a href='https://www.bmw.com' target="_blank" rel='nonoewke'>
                            <Button variant="contained" sx={{marginLeft:"10px"}}>
                                CLick
                            </Button> 
                        </a>
                      </p>
                      <img className='l' src={l1} />
                  </div>
                 
                </p>
            </div>
            <hr/>
            <div >
                <h2 className='mh2' style={{color: "#2196f3"}}>MERCEDES</h2>
                <p>
                    - Mercedes-Benz is a German car company founded in 1926.<br/>
                    - It is known for producing high-quality luxury and premium cars.<br/>
                    - Mercedes-Benz is famous for offering luxurious, high-performance cars that combine performance and comfort.
                    <div className='cars'>
                    <p>- To visit offical MERCEDES website <SwipeRightAltIcon sx={{color: "#2196f3"}}/>
                    <a href='https://www.mercedes-benz.com' target="_blank" rel='nonoewke'>
                        <Button variant="contained" sx={{marginLeft:"10px"}}>
                            CLick
                        </Button> 
                     </a>
                  </p>
                  <img className='l' src={l2} />
                  </div>
                </p>
            </div>
            <hr/>
            <div >
                <h2 className='rh2' style={{color: "#2196f3"}}>ROLLS ROYCE</h2>
                <p>
                  - Rolls-Royce is a British car company founded in 1904.<br/>
                  - It is one of the most famous luxury and ultra-luxury car brands.<br/>
                  - Rolls-Royce is known for designing luxurious cars tailored for the upper echelons of society.
                  <div className='cars'>
                  <p>- To visit offical ROLLS ROYCE website <SwipeRightAltIcon sx={{color: "#2196f3"}}/>
                    <a href='https://www.rolls-roycemotorcars.com' target="_blank" rel='nonoewke'>
                        <Button variant="contained" sx={{marginLeft:"10px"}}>
                            CLick
                        </Button> 
                     </a>
                  </p>
                  <img className='l' src={l3} />
                  </div>
                </p>
            </div>
            <hr/>
            <div >
                <h2 className='ah2' style={{color: "#2196f3"}}>AUDI</h2>
                <p>
                  - Audi is a German car company founded in 1909.<br/>
                  - It is part of the Volkswagen Group and offers a diverse range of cars in different categories and styles.<br/>
                  - Audi is known for providing high-quality cars, elegant design, and innovative technology.
                  <div className='cars'>
                  <p>- To visit offical AUDI website <SwipeRightAltIcon sx={{color: "#2196f3"}}/>
                    <a href='https://www.audi.com' target="_blank" rel='nonoewke'>
                        <Button variant="contained" sx={{marginLeft:"10px"}}>
                            CLick
                        </Button> 
                     </a>
                  </p>
                  <img className='l' src={l4} />
                  </div>
                </p>
            </div>
            <hr/>
            <div >
                <h2 className='mzh2' style={{color: "#2196f3"}}>MAZDA</h2>
                <p>
                  - Mazda is a Japanese car company founded in 1920.<br/>
                  - Mazda is a globally recognized brand that offers a variety of cars in different categories.<br/>
                  - Mazda is known for designing sporty cars with dynamic performance.
                  <div className='cars'>
                  <p>- To visit offical MAZDA website <SwipeRightAltIcon sx={{color: "#2196f3"}}/>
                    <a href='https://www.mazda.com' target="_blank" rel='nonoewke'>
                        <Button variant="contained" sx={{marginLeft:"10px"}}>
                            CLick
                        </Button> 
                     </a>
                  </p>
                  <img className='l' src={l5} />
                  </div>
                </p>
            </div>
            <hr/>
            <div >
                <h2 className='dh2' style={{color: "#2196f3"}}>DODGE CHALLENGER</h2>
                <p>
                  - The Dodge Challenger is a sports car model from the Dodge division of Chrysler.<br/>
                  - The Dodge Challenger is a classic American car known for its powerful performance and distinctive design.<br/>
                  - The Dodge Challenger is available with a variety of engines and versions to suit different driver needs.
                  <div className='cars'>
                  <p>- To visit offical DODGE CHALLENGER website <SwipeRightAltIcon sx={{color: "#2196f3"}}/>
                    <a href='https://www.dodge/challenger.html.com' target="_blank" rel='nonoewke'>
                        <Button variant="contained" sx={{marginLeft:"10px"}}>
                            CLick
                        </Button> 
                     </a>
                  </p>
                  <img className='l' src={l6} />
                  </div>
                </p>
            </div>
            <hr/>
            <div >
                <h2 className='lh2' style={{color: "#2196f3"}}>LAMBORGHINI</h2>
                <p>
                    - Lamborghini is an Italian company that manufactures high-performance sports cars.<br/>
                    - Founded in 1963, Lamborghini is known for producing high-performance sports cars like the Aventador and Huracan.<br/>
                    - Lamborghini is a symbol of wealth and high performance in the automotive industry.
                    <div className='cars'>
                    <p>- To visit offical LAMBORGHINI website <SwipeRightAltIcon sx={{color: "#2196f3"}}/>
                    <a href='https://www.lamborghini.com' target="_blank" rel='nonoewke'>
                        <Button variant="contained" sx={{marginLeft:"10px"}}>
                            CLick
                        </Button> 
                     </a>
                  </p>
                  <img className='l' src={l7} />
                  </div>
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default CarsInformation