import React, {useState} from "react";

function HomePage() {
    const [rangeSlider, setRangeSlider] = useState(0);
    const [width, setWidth] = useState('0%');
    const toggleWidth = () => {
        if (width === '0%') setWidth('40%')
        else if (width === '40%') setWidth('0%')
    }
    return (
        <div style={{marginBottom: 30, display: 'flex', flexDirection: 'column'}}>
            <div className="top-filtering">
                <div className="textBackgroundColor">
                    <button className="btn cbtn-bg-black">א</button>
                    <button className="btn cbtn-bg-white">א</button>
                </div>
                <div className="range-slider">
                    <span style={{fontSize: "1.5rem"}}>א  </span> <span className="float-right" style={{marginTop: "0.6rem"}}>א  </span>
                    <input onChange={e=>setRangeSlider(e.target.value)} className="range-slider__range" type="range" value={rangeSlider} min="0" max="500" />

                </div>
                <div className="search">
                    <input type="search" className="form-control" placeholder="placeholder" />
                </div>
                <div className="filtering-open">
                    <a href="#"><span onClick={()=>toggleWidth()} className="material-icons">search</span></a>
                </div>
            </div>
            <div className="content">
                <div className="home-contents-wrapper">
                    <div className="home-contents">
                        <h1>הלכתי לחפש סנאי ביער ביאליק </h1>
                        <div style={{backgroundColor: "#e4e4e4",marginRight: "5rem"}}>
                            <span > נקה סינון  <a href="#"><span className="material-icons">south</span></a> </span>
                            <span>מאפיינים  </span> <span>מאפיינים  </span>
                        </div>
                    </div>
                    <div className="home-contents">
                        <h1>הלכתי לחפש סנאי ביער ביאליק </h1>
                        <div style={{backgroundColor: "#e4e4e4",marginRight: "5rem"}}>
                            <span > נקה סינון  <a href="#"><span className="material-icons">south</span></a> </span>
                            <span>מאפיינים  </span> <span>מאפיינים  </span>
                        </div>
                    </div>
                    <div className="home-contents">
                        <h1>הלכתי לחפש סנאי ביער ביאליק </h1>
                        <div style={{backgroundColor: "#e4e4e4",marginRight: "5rem"}}>
                            <span > נקה סינון  <a href="#"><span className="material-icons">south</span></a> </span>
                            <span>מאפיינים  </span> <span>מאפיינים  </span>
                        </div>
                    </div>
                    <div className="home-contents">
                        <h1>הלכתי לחפש סנאי ביער ביאליק </h1>
                        <div style={{backgroundColor: "#e4e4e4",marginRight: "5rem"}}>
                            <span > נקה סינון  <a href="#"><span className="material-icons">south</span></a> </span>
                            <span>מאפיינים  </span> <span>מאפיינים  </span>
                        </div>
                    </div>
                </div>
                <div style={{width: width}} className="slider-wrapper">
                    <h1>Slider</h1>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
