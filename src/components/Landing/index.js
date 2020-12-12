import React, {useRef, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
const Landing = () => {
    const refWolverine = useRef(null)

    const [btn, setBtn]= useState(false)

    const setLeftImg =()=>{
        refWolverine.current.classList.add('leftImg')
    }
    const setRightImg =()=>{
        refWolverine.current.classList.add('rightImg')
    }

    const clearImg= ()=>{
        refWolverine.current.classList.remove('rightImg')
        refWolverine.current.classList.remove('leftImg')
            
    }

    useEffect(()=>{
        refWolverine.current.classList.add('startingImg')
        setTimeout(()=>{
            refWolverine.current.classList.remove('startingImg')
            setBtn(true)
            
        },1000)
    },[])
    
    const displayBtn = btn &&(
        <>
            <div className="leftBox" onMouseOut={clearImg} onMouseOver={setLeftImg} >
                <Link to="/signup" className="btn-welcome">Inscription</Link>
            </div>
            <div className="rightBox" onMouseOut={clearImg} onMouseOver={setRightImg}>
                <Link to="/login" className="btn-welcome">Connexion</Link>
            </div>
        </>
    )

    return (
        <main ref={refWolverine} className="welcomePage">
            {displayBtn}
        </main>
    )
    
}

export default Landing
