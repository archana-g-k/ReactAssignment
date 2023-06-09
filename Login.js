import  React,{ useState } from 'react';
import LoginDetails from './LoginDetails.json';

function Login(props){
    const [formData,setFormData]= useState({
        email:'',
        password:''
});
console.log(props);
    const{email,password}=formData;
    function handleChange(e){
     e.preventDefault();
     const{name,value}=e.target;
     setFormData({...formData,[name]:value});
     console.log(formData);
    }
    function handleSubmit(e){
e.preventDefault();
console.log(e.target[0].value);
console.log(e.target[1].value);
if(LoginDetails.email===email && LoginDetails.password===password){
    props.updateState(true);
}

    }
    return(
        <div>
            <form onSubmit={handleSubmit} className="login-form">
                <h3>Login</h3>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id ="email" onChange={handleChange} value={email}/>
                </div>
                <div>
                <label htmlFor="password">Password</label>
                    <input type="password" name="password" id ="password" onChange={handleChange} value={password}/>
                </div>
                <button type="submit" onCl>Login</button>
            </form>
        </div>
    )
}
export default Login;
