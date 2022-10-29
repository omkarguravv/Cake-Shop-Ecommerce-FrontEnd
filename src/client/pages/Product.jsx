import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Product() {
    const [cakes, setCakes] = useState([])

    useEffect(() => {
        axios.get('https://wowcakes.herokuapp.com/api/product/get')
            .then(res => {
                console.log(res.data);
                setCakes(res.data.products)

            }).catch(err => {
                console.log(err);
            })

    }, [])



    return (
        <>
            <h1>omkar</h1>
            {cakes.map((cake, id) => {
                return (
                    <h1>
                        {cake.name}
                    </h1>
                )
            })}

        </>
    )
}

export default Product
