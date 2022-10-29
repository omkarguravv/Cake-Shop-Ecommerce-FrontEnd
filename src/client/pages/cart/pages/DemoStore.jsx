import React from "react";
import DemoHeader from "../components/DemoHeader";
import DemoProduct from "../components/DemoProduct";

const products = [
  {
    id: "1",
    title: "Luxury Cat",
    price: 1000,
    imageUrl: "http://placekitten.com/g/600/300",
    desc:
      "If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror."
  },

  {
    id: "2",
    title: "Other Cat",
    price: 1200,
    imageUrl: "http://placekitten.com/g/600/300",
    desc:
      "If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror."
  }
];


function DemoStore() {
  return (
    <>

      <DemoHeader />
      <div>
        <main>
          {products.map((product) => (
            <DemoProduct key={product.id} product={product} />
          ))}
        </main>
      </div>
    </>
  )
}

export default DemoStore
