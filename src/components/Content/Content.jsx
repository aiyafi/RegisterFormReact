import React, { useState } from 'react';
import './content.css';

function Content() {
    var [Name, SetName] = useState('');
    var [Email, SetEmail] = useState('');
    var [Password, SetPassword] = useState('');

    var HANDLE_NAME_CHANGE = (event) => {
        SetName(event.target.value);
    };

    var HANDLE_EMAIL_CHANGE = (event) => {
        SetEmail(event.target.value);
    };

    var HANDLE_PASSWORD_CHANGE = (event) => {
        SetPassword(event.target.value);
    };

    var HANDLE_SUBMIT_FORM = (event) => {
        event.preventDefault();

        var RegisterFormData = {
            Nama: Name,
            Email: Email,
            Password: Password
        };

        console.log(JSON.stringify(RegisterFormData));
    };

    return (
        <div>
            <div className="container noselect">
                <div className="canvas">
                    <div className="tracker tr-1"></div>
                    <div className="tracker tr-2"></div>
                    <div className="tracker tr-3"></div>
                    <div className="tracker tr-4"></div>
                    <div className="tracker tr-5"></div>

                    <div className="tracker tr-6"></div>
                    <div className="tracker tr-10"></div>
                    <div className="tracker tr-11"></div>

                    <div className="tracker tr-15"></div>
                    <div className="tracker tr-16"></div>
                    <div className="tracker tr-20"></div>

                    <div className="tracker tr-21"></div>
                    <div className="tracker tr-22"></div>
                    <div className="tracker tr-23"></div>

                    <div className="tracker tr-25"></div>

                    <div id="card">
                        <div className="form-box">
                            <h2>Get started</h2>
                            <p className="create-acc">Create your account now</p>
                            <form onSubmit={HANDLE_SUBMIT_FORM}>
                                <div className="input-box">
                                    <span className="icon"></span>
                                    <input
                                        type="text"
                                        required
                                        value={Name}
                                        onChange={HANDLE_NAME_CHANGE}
                                    />
                                    <label>Name</label>
                                </div>
                                <div className="input-box">
                                    <span className="icon"></span>
                                    <input
                                        type="email"
                                        required
                                        value={Email}
                                        onChange={HANDLE_EMAIL_CHANGE}
                                    />
                                    <label>Email</label>
                                </div>
                                <div className="input-box">
                                    <span className="icon"></span>
                                    <input
                                        type="password"
                                        required
                                        value={Password}
                                        onChange={HANDLE_PASSWORD_CHANGE}
                                    />
                                    <label>Password</label>
                                </div>

                                <button>
                                    <span className="button-login">Register</span>
                                </button>

                                <div className="login-regist">
                                    <p>
                                        Already have an account?
                                        <a href="#" className="register-link">
                                            Login
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
