import React from "react";
// import { useState, useParams } from "react";
function Designer() {
    // const { id } = useParams();
    const items = [
        {
            id: 1,
            title: "Chocolate",
            img: "https://media.bakingo.com/chocolate.jpg?tr=w-184,dpr-1.5,q-70"
        },
        {
            id: 2,
            title: "Fruits",
            img: "https://media.bakingo.com/fruit_2.jpg?tr=w-184,dpr-1.5,q-70"
        }
        ,
        {
            id: 3,
            title: "Red Velvet",
            img: "https://media.bakingo.com/red-velvet_2.jpg?tr=w-184,dpr-1.5,q-70"
        }
        ,
        {
            id: 4,
            title: "Mango",
            img: "https://media.bakingo.com/mango_0.jpg?tr=w-184,dpr-1.5,q-70"
        }
        ,
        {
            id: 5,
            title: "Kit Kat",
            img: "https://media.bakingo.com/kit_kat_2.jpg?tr=w-184,dpr-1.5,q-70"
        }
        ,
        {
            id: 6,
            title: "Pineapple",
            img: "https://media.bakingo.com/pineapple_2.jpg?tr=w-184,dpr-1.5,q-70"
        }
        ,
        {
            id: 7,
            title: "ButterScotch",
            img: "https://media.bakingo.com/butterscotch_2.jpg?tr=w-184,dpr-1.5,q-70"
        }


    ];

    // const [flavour, setFlavour] = useState()

    // const SelectFlavour = () => {
    //     setFlavour(items.title)
    // }


    return (
        <>
            {/* <Product/> */}
            <div name="explore" className='w-full  bg-gradient[#FFFF] text-black'>
                <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full '>
                    <div className="text-center text-3xl md:text-4xl my-10 font-custom"><h1>Experience Flavours</h1></div>
                    <div className="grid gap-10 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 px-4 ">
                        {items.map(data => {
                            return (
                                <div key={data.id} onClick={() => { }} className="bg-white md:w-52  md:h-52    rounded-lg  shadow-lg hover:border-amber-400 hover:border-4 duration-400 ease-in-out items-center hover:scale-110 duration-500 ">
                                    {/* <button onClick={SelectFlavour} > */}

                                    <a href={`/productlist/${data.title}`}>
                                        <img className="mx-auto h-36 px-4 md:h-48 mt-4 lg:mt-0  md:pt-2 lg:pt-4 rounded items-center  " src={data.img} alt="Wow cakes" />
                                        <p className=' text-center text-sm font-bold   md:font-bold lg:mt-5 md:mt-2  '>{data.title}</p>
                                    </a>
                                    {/* </button> */}

                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </>
    );
}
export default Designer;