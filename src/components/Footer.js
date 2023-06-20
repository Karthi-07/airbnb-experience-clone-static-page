import React from 'react'
import "../style/footer-style.css"
import img1 from "../items/localexport.png"
import img2 from "../items/small group.png"
import img3 from "../items/high.png"
import world from "../items/world.png"
import fb from "../items/facebook.svg"
import insta from "../items/insta.svg"
import twitter from "../items/twitter.svg"
export default function Footer() {
  return (

    <div className='main-footer'>
      <hr className='line'></hr><br></br><br></br>
       <div className='first-footer'>
          <div className='first-1'>
              Airbnb Experiences are vetted<br></br> for quality
          </div>
          <div className='first-2'>
              <div className='sub'>
                 <img src={img1} className='img-style'></img>
                 <p className='head'>Local experts</p>
                 <p>Led by locals who love where they’re from and what they do.</p>
              </div>
              <div className='sub'>
                 <img src={img2} className='img-style'></img>
                 <p className='head'>Small groups</p>
                 <p>With intimate group sizes, you’ll never get lost in the crowd.</p>
              </div>
              <div className='sub'>
               <img src={img3} className='img-style'></img>
               <p className='head'>High standards</p>
               <p>Every experience is reviewed for unique access.</p>
              </div>
          </div>
       </div>
     <br></br>
    <hr className='line'></hr>
    <br></br><br></br>
    <div className='second-footer'>
         <div className='sec-1'>
            <p className='head'>Support</p>
            <p>Help Centre</p>
            <p>AirCover</p>
            <p>Supporting people with disabilities</p>
            <p>Cancellation options</p>
            <p>Our COVID-19 Response</p>
            <p>Report a neighbourhood concern</p>
         </div>
         <div className='sec-2'>
            <p className='head'>Community</p>
            <p>Airbnb.org: disaster relief housing</p>
            <p>Combating discrimination</p>
         </div>
         <div className='sec-3'>
              <p className='head'>Hosting</p>
              <p>Airbnb your home</p>
              <p>AirCover for Hosts</p>
              <p>Explore hosting resources</p>
              <p>Visit our community forum</p>
              <p>How to host responsibly</p>
         </div>
         <div className='sec-4'>
                <p className='head'>Airbnb</p>
                <p>Newsroom</p>
                <p>Learn about new features</p>
                <p>Letter from our founders</p>
                <p>Careers</p>
                <p>Investors</p>
         </div>
      </div>
       <br></br>
       <hr className='line'></hr>
    <div className='third-footer'>
       <div className='third-1'>
          <p>© 2023 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details</p>
       </div>
       <div className='third-2'>
          <img src={world} className='last-foot'></img>
          <p className='last-head'>English (IN) ₹ INR</p>
          <img src={fb} className='last-foot'></img>
          <img src={insta} className='last-foot'></img>
          <img src={twitter} className='last-foot'></img>
       </div>
    </div>
    <hr className='line'></hr>
  </div>
  )
}

