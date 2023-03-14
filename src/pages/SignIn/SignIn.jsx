import { useState, useEffect } from "react";
import { auth } from "../../contexts/fbconfig";
import { useAuth } from "../../hooks/useAuth";
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";

export function SignIn() {
    const { login } = useAuth();
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitSignIn = () => {
        document.querySelector(".signIn").classList.add("was-validated");
        login(auth, email, password);
    }

    return (
        <form className="signIn m-5">
            <h2>Sign In</h2>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <div className="input-group has-validation" >
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => [setEmail(e.target.value)]}
                        required
                        className="form-control"
                    />
                    <div className="invalid-feedback">
                        Please check your e-mail.
                    </div>
                </div> 
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group has-validation">
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        autoComplete="on"
                        value={password}
                        onChange={(e) => [setPassword(e.target.value)]}
                        required
                        className="form-control"
                    />
                    <div className="invalid-feedback">
                        Please check your password.
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <button type="button" onClick={submitSignIn} className="btn btn-outline-primary">Sign In</button>
                <p>Do not have an account? <Link to={"/signup"}>Sign up</Link></p>
            </div>
        </form>
    )
}