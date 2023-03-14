import { useState } from "react";
import { auth } from "../../contexts/fbconfig";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from 'react-router-dom';

export function SignUp() {
    const { novoUsuario } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    
    const validateForm = () => {
        if(password.length < 8 || password.length > 12) {
            setPassword("");
            setConfPassword("");
        }
        document.querySelector(".signUp").classList.add("was-validated");
        novoUsuario(auth, email, password);
    }

    return (
        <article className="m-5">
            <form className="signUp">
                <h2>Sign Up</h2>
                <p>Fill up all the fields.</p>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <div className="input-group has-validation" >
                        <input 
                            type="email"
                            name="email"
                            placeholder="Type your E-mail"
                            id="email__signup"
                            value={email}
                            onChange={(e) => [setEmail(e.target.value)]}
                            className="form-control"
                            required
                        />
                        <div className="invalid-feedback">
                            Please enter a valid e-mail.
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="input-group has-validation" >
                        <input 
                            type="password"
                            name="password"
                            placeholder="Type your password"
                            autoComplete="on"
                            id="password"
                            value={password}
                            onChange={(e) => [setPassword(e.target.value)]}
                            className="form-control"
                            required
                        />
                        <div className="invalid-feedback">
                            Password must be 8-12 characters.
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmar__password" className="form-label">Confirm your password</label>
                    <div className="input-group has-validation" >
                        <input
                            type="password"
                            name="confirmar__password"
                            placeholder="Confirm your password"
                            autoComplete="on"
                            id="confirmar__password"
                            value={confPassword}
                            onChange={(e) => [setConfPassword(e.target.value)]}
                            className="form-control"
                            required
                        />
                        <div className="invalid-feedback">
                            Password must be 8-12 characters.
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <button type="button" onClick={validateForm} className="btn btn-outline-primary">Enter</button>
                    <p>Already have an account? <Link to={"/signin"}>Sign in</Link></p>
                </div>
            </form>
        </article>
    )
}