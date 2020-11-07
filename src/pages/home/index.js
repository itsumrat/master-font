import React, {useState} from "react";
import Sidebar from "../../components/Sidebar";

function HomePage() {
    const element = document.getElementById(window.location.hash);
    const [rangeSlider, setRangeSlider] = useState(0);
    const [toggle, setToggle] = useState(true);
    const toggleWidth = () => {
        setToggle(prevState => !prevState)
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
                    <a href="#"><span onClick={(e)=>{
                        e.preventDefault();
                        toggleWidth();
                    }} className="material-icons">search</span></a>
                </div>
            </div>
            <div className="content">
                <div style={{width: toggle ? '80%': '100%' }} className="home-contents-wrapper">
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
                    <div className="home-contents">
                        <h1>הלכתי לחפש סנאי ביער ביאליק </h1>
                        <div style={{backgroundColor: "#e4e4e4",marginRight: "5rem"}}>
                            <span > נקה סינון  <a href="#"><span className="material-icons">south</span></a> </span>
                            <span>מאפיינים  </span> <span>מאפיינים  </span>
                        </div>
                    </div>
                </div>
                <div style={{
                    left: toggle ? '80%': '100%',
                    visibility: toggle? 'visible' : 'hidden'
                }} className="slider-wrapper">
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
