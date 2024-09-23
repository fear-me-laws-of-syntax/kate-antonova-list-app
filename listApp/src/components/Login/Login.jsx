import './Login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Welcome to your Lists!💫 \nPlease add your 1st list by giving it a name.📋✍🏼'); 
        navigate('/');
    };

    return (
        <div className="login">
            <h1 className="login__title">Lists</h1>
            <h2 className="login__subtitle">Log In</h2>
            <form className="login__form" onSubmit={handleSubmit}>
                <label className="login__label" htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Please enter your email"
                    className="login__input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="login__label" htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Please enter your password"
                    className="login__input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className="login__button">Log In</button>
            </form>
        </div>
    );
}

export default Login;
