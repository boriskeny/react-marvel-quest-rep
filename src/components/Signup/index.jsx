import React, {useState, useContext} from 'react'
import {FirebaseContext} from '../Firebase'
import {Link} from 'react-router-dom'


const Signup = (props) => {
    
    const firebase = useContext(FirebaseContext)

    const data={
        pseudo:'',
        email:'',
        password:'',
        confirmPassword:''
    }
    const [loginData, setLoginData] = useState(data)
    const [error, setError] =useState('')
    const { pseudo, email, password, confirmPassword }= loginData

    const handleChange = (e)=>{
        setLoginData({...loginData, [e.target.id]:e.target.value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        const { email, password}= loginData
        firebase.signupUser(email, password)
        .then(user => {
            setLoginData({...data})
            props.history.push('/welcome')
        })
        .catch(error=>{
            setError(error)
            setLoginData({...loginData, password:'', confirmPassword:''})
        })
    }

    //gestion erreurs
    const erreur = error!==''&& <span>{error.message}</span>

    const button = (pseudo ==='' || email === '' || password==='' || confirmPassword!==password)
    ? <button disabled>Inscription</button>
    : <button>Inscription</button>
    

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">
                </div>    
                <div className="formBoxRight">
                    <div className="formContent">
                        {erreur}
                        <h2>Inscription</h2>
                        <form onSubmit={handleSubmit} >
                            <div className="inputBox">
                                <input value={pseudo} onChange={handleChange} type="text" id="pseudo" required autoComplete="off" />
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>
                            <div className="inputBox">
                                <input value={email} onChange={handleChange} type="email" id="email" required autoComplete="off" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="inputBox">
                                <input  value={password} onChange={handleChange} type="password" id="password" required autoComplete="off" />
                                <label htmlFor="password">Mot de Passe</label>
                            </div>
                            <div className="inputBox">
                                <input  value={confirmPassword} onChange={handleChange} type="password" id="confirmPassword" required autoComplete="off" />
                                <label htmlFor="confirmPassword">Confirmez le mot de Passe</label>
                            </div>

                            {button}
                        </form>
                        <div className="linkContainer">
                            <Link to="/login" className="simpleLink">Déjà inscrit? Connectez-vous ici</Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Signup
