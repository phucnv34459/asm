import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useLocalStorage } from '../../hooks/useStorage';
import { Link } from 'react-router-dom';

const Signin = () => {
    const { register, handleSubmit } = useForm();
     const [ user , setUser] = useLocalStorage("user", {});
    const onSubmit = async (formData) => {
      try {
        const {data} = await axios.post(`http://localhost:3000/signin`,formData);
      setUser( data);

      } catch (error) {
        console.log('error', error.response.data)
      }
    };
  return (
    <div>
        {}
        <h2>Đăng Nhập</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Email' type="email" {...register('email')}/>
            <input placeholder='Password' type="password" {...register('password')} />
            <h6>Bạn chưa có tài khoản?<Link className="nav-link" to="/sigups"><p style={{color:"red"}}>Đăng ký</p></Link></h6> 
            <button>SignIn</button>
        </form>
    </div>
  )
}

export default Signin