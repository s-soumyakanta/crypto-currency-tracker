import { React, useEffect, useState } from "react";
import axios from "axios";




export default function CoinTable() {
    const [apiData, setApiData] = useState([])
    const [coinSearch, setCoinSearch] = useState("")

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h")
            .then(res => setApiData(res.data))
    }, []
    )
    const handleChange = (e) => {
        setCoinSearch(e.target.value)
    }

    const searchedCoinName = apiData.filter(coinName => {
        return (
            coinName.name.toLowerCase().includes(coinSearch.toLocaleLowerCase())
        )
    })
    console.log(apiData)
    return (
        <div className="my-12 flex  flex-col px-4 ">
            <div className=" border-solid border-2  border-slate-300 mx-auto  rounded h-10 w-3/5 py-1.5 md:w-2/6 md:my-12  ">
                <form>
                    <input type="text" onChange={handleChange} value={coinSearch} placeholder="Search a Currency..." className="bg-inherit focus:outline-none w-full " />
                </form>

            </div>
            <div className=" py-8 overflow-x-scroll md:scroll-smooth md:flex md:justify-center ">
                <table className="mx-auto">

                    <thead className="space-x-8 space-y-12 ">
                        <tr className="text-sm md:text-base">
                            {/* <th>Rank</th>   */}
                            <th>Coin</th>
                            <th>Current Price</th>
                            <th>24h%</th>
                            <th>24h High</th>
                            <th>24h Low</th>
                            <th>Market Cap</th>

                        </tr>
                    </thead>
                    <tbody >

                        {
                            searchedCoinName.map((data) => {
                                return (
                                    <tr className="text-sm text-center  md:text-base ">
                                        {/* <td>{data.market_cap_rank}</td> */}
                                        <td className="flex flex-row items-center w-32 text-start"><div className="flex items-center "><img src={data.image} alt={data.name} className="w-8" /></div><div className="flex flex-col my-4 "><div className="flex flex-row items-center justify-evenly"><p>{data.market_cap_rank}</p><p className="text-xs">{data.symbol.toUpperCase()}</p></div><div><h1 className="text-sm px-4">{data.name}</h1></div></div></td>
                                        <td>&#36;{data.current_price
                                        }</td>

                                        {data.price_change_percentage_24h >0 ?

                                        <td className="text-green-500">{data.price_change_percentage_24h.toPrecision(2)}&#37;</td>:
                                        <td className="text-red-500">{data.price_change_percentage_24h.toPrecision(2)}&#37;</td>
                                        }


                                        <td className="text-green-600">&#36;{data.high_24h}</td>
                                        <td className="text-red-600">&#36;{data.low_24h}</td>
                                        <td>&#36;{data.market_cap
                                        }</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}