import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
      try {
        const response = await axios.post(`http://localhost:3000/signup`, data);
        console.log(response);
      } catch (error) {
        console.log('error', error)
      }
    };
  return (
    <div>
        <h2>Đăng ký</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Email' type="email" {...register('email')}/>
            <input placeholder='Password' type="password" {...register('password')} />
            <p>Bạn đã có tài khoản ? <Link className="nav-link" to="/sigins">Đăng nhập</Link></p>
            <button>SignUp</button>
            
        </form>
    </div>
  )
}

export default Signup