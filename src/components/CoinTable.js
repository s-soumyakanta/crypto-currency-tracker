import { React, useEffect, useState } from "react";
import axios from "axios";


export default function CoinTable() {
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h")
            .then(res => setApiData(res.data))
    }, []

    )
    return (
        <div className="container">
            <div className="serch">Serch</div>
            <div className="overflow-x-auto  block whitespace-nowrap px-2 my-4 " >
                <table>
                    <tr>
                        <th>Rank</th>
                        <th>Coin</th>
                        <th>Current Price</th>
                        <th>24h Change</th>
                        <th>Market Cap</th>
                        <th>Total Supply</th>
                        <th>Total Volume</th>

                    </tr>

                    {
                        apiData.map((data) => {
                            return (
                                <tr>
                                    <td>{data.market_cap_rank}</td>
                                    <td>{data.name}</td>
                                    <td>&#36;{data.current_price
                                    }</td>
                                    <td>{data.price_change_percentage_24h.toPrecision(2)}&#37;</td>

                                    <td>{data.market_cap
                                    }</td>

                                    <td>{data.total_supply}</td>
                                    <td>{data.total_supply}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}