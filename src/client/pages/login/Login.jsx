import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const intialForm = {
        username: '',
        password: '',
    };

    const [form, setForm] = useState(intialForm);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    console.log('state', {
        form,
        error,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = await postForm();

        localStorage.setItem('token', token);

        setForm(intialForm);
    };

    const postForm = async () => {
        try {
            const response = await fetch('http://localhost:4000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error);
                return;
            }

            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const handleRedirectToRegister = () => {
        navigate('/register/user');
    };

    return (
        <div className="signIn">
            <div className="signin-container">
                <form className="signin-form">
                    <h1>Sign In</h1>
                    <div className="input-groups">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            className="input"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-groups">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="text"
                            id="password"
                            className="input"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="signin-btn"
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>
                </form>
                {error && <p className="error">{error}</p>}
                <div className="new-register">
                    <p className="signin-text">No account? Create one Here!</p>
                    <button
                        type="submit"
                        className="new-register-btn"
                        onClick={handleRedirectToRegister}
                    >
                        New Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;