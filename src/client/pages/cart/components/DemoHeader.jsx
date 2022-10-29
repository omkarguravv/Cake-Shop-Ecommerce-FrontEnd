import React from 'react'
import { Link } from "react-router-dom";
import { useCart } from "./DemoCart";
function DemoHeader() {
    const items = useCart();
    return (
        <div>
            <header className=" mb-10 ">
                <nav className=" flex space-x-4">
                    <Link className="" to="/demostore">
                        Store
                    </Link>
                    <Link className="" to="/democart">
                        Cart ({items.length})
                    </Link>
                    <Link className="" to="/">
                        home
                    </Link>
                </nav>
            </header>
        </div>
    )
}

export default DemoHeader
