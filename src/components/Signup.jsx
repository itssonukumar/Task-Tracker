
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Signup() {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '', name: '', country: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  


  const handleClicked=(e)=>{
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.country) {
        alert('Please fill in all fields!');
        return; 
      }
    navigate('/login')
    
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <form  className="bg-gray-200 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        
        <input
          className="w-full p-2 mb-4 border rounded"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 mb-4 border rounded"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 mb-4 border rounded"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 mb-6 border rounded"
          type="text"
          name="country"
          placeholder="Country"
          onChange={handleChange}
          required
        />
        
        <button onClick={handleClicked} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
