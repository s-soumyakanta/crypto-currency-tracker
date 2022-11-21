import React from "react";

export default function Footer(){
    return(
        <div className="flex justify-around  py-2 px-2 bg-sky-600  text-white font-sans">
            <p className=" text-xs md:text-base bg-sky-600">Developed by <span ><a className="bg-yellow-500" href="https://www.github.com/s-soumyakanta">S Soumyakanta </a></span></p>
            <p className=" text-sm md:text-base bg-sky-600">Powered by <span ><a className="bg-green-500" href="https://www.coingecko.com/">CoinGecko </a></span></p>
        </div>
    )
}