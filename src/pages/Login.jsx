import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({setIsLoggedIn}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();
        if(email==="info@gmail.com" && password==="12345"){
            setIsLoggedIn(true);
            navigate("/dashbored");
        } else {
            setError("error");
        }
    };

    return(
        <div className="login-page">
            <div className="login-card">
                <h2>login</h2>
                <form onSubmit={handleLogin}>
                    {error && <p className="error-massage">{error}</p>}
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="info@gmail.com"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="12345"/>
                    </div>
                    <button type="submit" className="login-btn">login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;