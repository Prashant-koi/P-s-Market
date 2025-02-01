import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/register", {username, password})
        .then(result => {console.log(result)
        navigate("/login")
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div className="grid place-items-center h-[calc(100vh-6rem)] mt-8 bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white border-4 border-gray-300 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
                <form className="space-y-4" onSubmit={handelSubmit}>
                    <div>
                        <input 
                            className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"   
                            type="text" 
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <input 
                            className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button 
                        className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors font-medium"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}