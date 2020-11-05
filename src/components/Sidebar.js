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
            <div className="properties-wrapper">
                <h3>ביאליק</h3>
                <div>
                    <Button color={active.includes(1) ?  'primary': 'secondary'} onClick={()=>toggleActive(1)} style={{margin: 5, fontSize: 25}}>1</Button>
                    <Button color={active.includes(2) ?  'primary': 'secondary'}onClick={()=>toggleActive(2)} style={{margin: 5, fontSize: 25}}>2</Button>
                    <Button color={active.includes(3) ?  'primary': 'secondary'}onClick={()=>toggleActive(3)} style={{margin: 5, fontSize: 25}}>3</Button>
                    <Button color={active.includes(4) ?  'primary': 'secondary'}onClick={()=>toggleActive(4)} style={{margin: 5, fontSize: 25}}>4</Button>
                    <Button color={active.includes(5) ?  'primary': 'secondary'}onClick={()=>toggleActive(5)} style={{margin: 5, fontSize: 25}}>5</Button>
                    <Button color={active.includes(6) ?  'primary': 'secondary'}onClick={()=>toggleActive(6)} style={{margin: 5, fontSize: 25}}>6</Button>
                    <Button color={active.includes(7) ?  'primary': 'secondary'}onClick={()=>toggleActive(6)} style={{margin: 5, fontSize: 25}}>7</Button>
                </div>
            </div>
            <div>
                <h3>Categories</h3>
                <div className="categories-wrapper">
                    <span
                        className="category"
                        onClick={()=>toggleActive('c2')}
                        style={{backgroundColor: active.includes('c2') ? '#2569d9': '#5a6268'}} >
                        cat 23
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('c1')}
                        style={{backgroundColor: active.includes('c1') ? '#2569d9': '#5a6268'}} >
                        cat 1
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('c3')}
                        style={{backgroundColor: active.includes('c3') ? '#2569d9': '#5a6268'}} >
                        cat 3
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('c4')}
                        style={{backgroundColor: active.includes('c4') ? '#2569d9': '#5a6268'}} >
                        cat 4
                    </span>
                    <span
                        className="category"
                        onClick={()=>toggleActive('c5')}
                        style={{backgroundColor: active.includes('c5') ? '#2569d9': '#5a6268'}} >
                        cat 5
                    </span>
                </div>
            </div>
            <div className="whatWrapper">
                <div className="what">
                    <h3>JU</h3>
                    <div className="categories-wrapper">
                        <span
                            className="category"
                            onClick={()=>toggleActive('what 12')}
                            style={{backgroundColor: active.includes('what 12') ? '#2569d9': '#5a6268'}} >
                            cat 23
                        </span>
                            <span
                                className="category"
                                onClick={()=>toggleActive('what 13')}
                                style={{backgroundColor: active.includes('what 13') ? '#2569d9': '#5a6268'}} >
                            cat 1
                        </span>
                            <span
                                className="category"
                                onClick={()=>toggleActive('what 14')}
                                style={{backgroundColor: active.includes('what 14') ? '#2569d9': '#5a6268'}} >
                            cat 3
                        </span>
                    </div>
                </div>
                <div className="what">
                    <h3>AAA</h3>
                    <div className="categories-wrapper">
                        <span
                            className="category"
                            onClick={()=>toggleActive('what 1')}
                            style={{backgroundColor: active.includes('what 1') ? '#2569d9': '#5a6268'}} >
                            cat 23
                        </span>
                        <span
                            className="category"
                            onClick={()=>toggleActive('what 2')}
                            style={{backgroundColor: active.includes('what 2') ? '#2569d9': '#5a6268'}} >
                            cat 1
                        </span>
                        <span
                            className="category"
                            onClick={()=>toggleActive('what 3')}
                            style={{backgroundColor: active.includes('what 3') ? '#2569d9': '#5a6268'}} >
                            cat 3
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <h3>NoIdea</h3>
            </div>
            <div>
                <h3>HoIdea</h3>
            </div>
        </div>
    )
}
export default Sidebar;
