import React from 'react'
import img_lineOver from '../images/line_over_transparant.png';
import img_lineOver2 from '../images/line_over_transparant.png'

const HeroLotus = () => {
  return (
    <>
      <div className="herolotus">

        <div className="circle">
          <div></div>
          <div></div>
        </div>

        <p>Lotus</p>
        <h1>Lotus</h1>

        <button className="btn">Read More</button>
        <img className="img1" src={img_lineOver} alt='line over' />
        <img className="img2" src={img_lineOver2} alt='line over' />
      </div>
    </>
  )
}

export default HeroLotus
