import axios from "axios";
import { useEffect, useState } from "react";
import React, { PureComponent } from 'react';
import { BarChart, Bar,  XAxis, YAxis,  Tooltip } from 'recharts';
import { Audio, Circles } from 'react-loader-spinner';



const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phoneWithFakeData = phoneData.map(phone =>{
                const obj ={
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            setPhones(phoneWithFakeData)
            setLoading(false)
        })
    })
    return (
        <div>
            <h2 className="text-5xl">Phones:{phones.length}</h2>
            {loading && <div className="text-3xl text-center ml-12">
                <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
                />
                  render(<Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />)
                </div>}
            
            <BarChart width={1200} height={400} data={phones}>
            
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name"></XAxis>
            <YAxis dataKey=""></YAxis>
            <Tooltip></Tooltip>
             </BarChart>
             
            
        </div>
    );
};

export default Phones;