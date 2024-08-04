import React from 'react'
import Upimg from "./css/image1.png"
const register = () => {

  const handleShare = async () => {
    navigator.share("hello");
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Example Image',
          text: 'Check out this image!',
          url: `https://aibaljose.github.io/CreSuit/img/play_store_512.png`,
        });
        console.log('Image shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Web Share API is not supported in your browser.');
    }}
  return (
    <div className='register'>
        <button className='share' onClick={handleShare}>Share Ticket</button>
      <div className="cardregi">
    
      {/* <img src={Upimg} alt="" />
      <p>Hey Juniors! Are you ready to kick off your college journey with a bang? Join us for JAM – Jesus And Me – an incredible day dedicated to fun, faith, and forging new friendships! Dive into a variety of exciting activities designed to uplift and inspire. Experience powerful moments of prayer and adoration, and discover the joy of connecting with Christ in a whole new way. This is your chance to start the year with a heart full of positivity and a spirit ready to soar. Keep an eye out for more details – this is one event you definitely don't want to miss! 🌟🙏🎶</p> */}
      </div>
      
   
    </div>
  )
}

export default register
