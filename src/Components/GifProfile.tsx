import React from 'react';

function GifProfile() {
  return (
    <>
      <div className='img_profile' style={{margin: "25px"}}></div>
      <div className='img_profile_wrap'>
        <img className='cv_profile' src='/cv.png' alt='profile'></img>
        <div className='prof_gif'>
        <img src='/gif1.gif' alt='gif1' className='gif-image top-left' />
        </div>
        <div className='prof_gif2'>
        <img src='/gif2.gif' alt='gif2' className='gif-image top-right' />
        </div>
        <div className='prof_gif3'>
        <img src='/gif3.gif' alt='gif3' className='gif-image bottom-left' />
        </div>
        <div className='prof_gif4'>
        <img src='/gif4.gif' alt='gif4' className='gif-image bottom-right' />
        </div>
      </div>
    </>
  );
}

export default GifProfile