import React from 'react';

const DownloadAds = () => {

    const downloadImgStyle = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]'

  return (
    <div className='download'>
        <div className="download-images flex">
            <img src={require("../images/App Store.png")} alt="ios" className={downloadImgStyle + ` mr-[2rem]`}/>
            <img src={require("../images/Google Play.png")} alt="android" className={downloadImgStyle}/>
        </div>
    </div>
  )
}

export default DownloadAds