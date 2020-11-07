import React, {useState} from 'react';
import {Button} from "reactstrap/es";

const Sidebar = () => {
    const [active, setActive] = useState([])

    const toggleActive = (id) => {
        console.log(active.includes(id))
        if (!active.includes(id)){
            setActive(prevState => {
                return[
                    ...prevState,
                    id
                ]
            })
        }else {
            setActive(prevState => {
                const index = prevState.indexOf(id);
                if(index > -1) return  prevState.splice(index, 1);
                return prevState

            })
        }
       // setActive(prevState => prevState.includes(id) ? prevState.slice(prevState.indexOf(id), 1): prevState.push(id))
    }
    console.log(active.includes('c1'))
    return(
        <div className="sideBar-content">
            <div className="featured-wrapper">
                <h3>Featured</h3>
                <div className="featured-Item-wrapper">
                    <div className="featuredItemContent">
                        <div
                            className="featuredItem"
                            onClick={()=>toggleActive('allFonts')}
                            style={{
                                backgroundColor: active.includes('allFonts') ?  '#00adee': '#6c6d70'
                            }}>
                            א
                        </div>
                        <p>All Fonts</p>
                    </div>
                    <div className="featuredItemContent">
                        <div
                            className="featuredItem"
                            onClick={()=>toggleActive('serif')}
                            style={{
                                fontFamily: "Serif",
                                backgroundColor: active.includes('serif') ?  '#00adee': '#6c6d70'
                            }}>
                            א
                        </div>
                        <p>Sefif</p>
                    </div>
                    <div className="featuredItemContent">
                        <div
                            className="featuredItem"
                            onClick={()=>toggleActive('san-serif')}
                            style={{
                                fontFamily: "San-serif",
                                backgroundColor: active.includes('san-serif') ?  '#00adee': '#6c6d70'
                            }}>
                            א
                        </div>
                        <p>San-serif</p>
                    </div>
                    <div className="featuredItemContent">
                        <div
                            className="featuredItem"
                            onClick={()=>toggleActive('script')}
                            style={{
                                fontFamily: "Script",
                                backgroundColor: active.includes('script') ?  '#00adee': '#6c6d70'
                            }}>
                            א
                        </div>
                        <p>Script</p>
                    </div>
                    <div className="featuredItemContent">
                        <div
                            className="featuredItem"
                            onClick={()=>toggleActive('disalay')}
                            style={{
                                fontFamily: "disalay",
                                backgroundColor: active.includes('disalay') ?  '#00adee': '#6c6d70'
                            }}>
                            א
                        </div>
                        <p>Script</p>
                    </div>
                    <div className="featuredItemContent">
                        <div
                            className="featuredItem"
                            onClick={()=>toggleActive('graphic')}
                            style={{
                                fontFamily: "graphic",
                                backgroundColor: active.includes('graphic') ?  '#00adee': '#6c6d70'
                            }}>
                            <span style={{fontSize: 40}} className="material-icons">facebook</span>
                        </div>
                        <p>graphic</p>
                    </div>
                    <div className="featuredItemContent">
                        <div
                            className="featuredItem"
                            onClick={()=>toggleActive('bilingual')}
                            style={{
                                fontFamily: "bilingual",
                                backgroundColor: active.includes('bilingual') ?  '#00adee': '#6c6d70'
                            }}>
                            aא
                        </div>
                        <p>bilingual</p>
                    </div>
                </div>
            </div>
            <div>
                <h3>Categories</h3>
                <div className="categories-wrapper">
                    <span
                        className="category"
                        onClick={()=>toggleActive('headlines')}
                        style={{backgroundColor: active.includes('headlines') ? '#00adee': '#6c6d70'}} >
                        headlines
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('text')}
                        style={{backgroundColor: active.includes('text') ? '#00adee': '#6c6d70'}} >
                        text
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('formal')}
                        style={{backgroundColor: active.includes('formal') ? '#00adee': '#6c6d70'}} >
                        formal
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('biblical')}
                        style={{backgroundColor: active.includes('biblical') ? '#00adee': '#6c6d70'}} >
                        biblical
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('retro')}
                        style={{backgroundColor: active.includes('retro') ? '#00adee': '#6c6d70'}} >
                        retro
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('traditional')}
                        style={{backgroundColor: active.includes('traditional') ? '#00adee': '#6c6d70'}} >
                            traditional
                        </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('avcient')}
                        style={{backgroundColor: active.includes('avcient') ? '#00adee': '#6c6d70'}} >
                            avcient
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('techno')}
                        style={{backgroundColor: active.includes('techno') ? '#00adee': '#6c6d70'}} >
                            techno
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('easy')}
                        style={{backgroundColor: active.includes('easy') ? '#00adee': '#6c6d70'}} >
                            easy
                    </span>
                </div>
            </div>
            <div>
                <h3>Weight</h3>
                <div className="categories-wrapper">
                    <span
                        className="weightItem"
                        onClick={()=>toggleActive('lighter')}
                        style={{
                            fontWeight: 'lighter',
                            backgroundColor: active.includes('lighter') ? '#00adee': '#6c6d70'}} >
                        א
                    </span>
                    <span
                        className="weightItem"
                        onClick={()=>toggleActive('normal')}
                        style={{
                            fontWeight: 'normal',
                            backgroundColor: active.includes('normal') ? '#00adee': '#6c6d70'
                        }} >
                        א
                    </span>
                    <span
                        className="weightItem"
                        onClick={()=>toggleActive('bold')}
                        style={{
                            fontWeight: 'bold',
                            backgroundColor: active.includes('bold') ? '#00adee': '#6c6d70'
                        }} >
                        א
                    </span>
                    <span
                        className="weightItem"
                        onClick={()=>toggleActive('bolder')}
                        style={{
                            fontWeight: 'bolder',
                            backgroundColor: active.includes('bolder') ? '#00adee': '#6c6d70'
                        }} >
                        א
                    </span>
                </div>
            </div>
            <div>
                <h3>Script</h3>
                <div className="categories-wrapper">
                    <span
                        className="category"
                        onClick={()=>toggleActive('Hebrew')}
                        style={{backgroundColor: active.includes('Hebrew') ? '#00adee': '#6c6d70'}} >
                        Hebrew
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('Latin')}
                        style={{backgroundColor: active.includes('Latin') ? '#00adee': '#6c6d70'}} >
                        Latin
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('Cyrillic')}
                        style={{backgroundColor: active.includes('Cyrillic') ? '#00adee': '#6c6d70'}} >
                        Cyrillic
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('Arabic')}
                        style={{backgroundColor: active.includes('Arabic') ? '#00adee': '#6c6d70'}} >
                        Arabic
                    </span>
                </div>
            </div>
            <div>
                <h3>Use</h3>
                <div className="categories-wrapper">
                    <span
                        className="category"
                        onClick={()=>toggleActive('desktop')}
                        style={{backgroundColor: active.includes('desktop') ? '#00adee': '#6c6d70'}} >
                        desktop
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('web')}
                        style={{backgroundColor: active.includes('web') ? '#00adee': '#6c6d70'}} >
                        web
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('app')}
                        style={{backgroundColor: active.includes('app') ? '#00adee': '#6c6d70'}} >
                        app
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('desktopPro')}
                        style={{backgroundColor: active.includes('desktopPro') ? '#00adee': '#6c6d70'}} >
                        desktop pro
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('webPro')}
                        style={{backgroundColor: active.includes('webPro') ? '#00adee': '#6c6d70'}} >
                        web pro
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('cantilation')}
                        style={{backgroundColor: active.includes('cantilation') ? '#00adee': '#6c6d70'}} >
                            cantilation
                        </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('desktop world')}
                        style={{backgroundColor: active.includes('desktop world') ? '#00adee': '#6c6d70'}} >
                            desktop world
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('webWorld')}
                        style={{backgroundColor: active.includes('webWorld') ? '#00adee': '#6c6d70'}} >
                            web world
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;
