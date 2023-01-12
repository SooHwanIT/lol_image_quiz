import { useState, useEffect } from "react";
import axios from 'axios';
import React from "react";

const ImageData: React.FC = () => {
    const [data, setData] = useState();
    const [count, setCount] = useState(1);
    const apikey = "RGAPI-6a000527-0b03-4218-9847-bb11eb5d1fed"
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.23.1/data/ko_KR/champion.json`);
            var arr = {};
            for (const [key, value] of Object.entries(res.data.data)) {
                const res2 = await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.23.1/data/ko_KR/champion/${key}.json`);
                // setData([{ id: key, skins: res2.data.data[key].skins, name: res2.data.data[key].name }, ...data])
                const d = { skins: res2.data.data[key].skins, name: res2.data.data[key].name }
                arr[key] = d;
            }
            return arr;
        }
        fetchData().then((res) => {
            // console.dir(res);
            console.log(JSON.stringify(res));
            setData(res);
        });
    }, []);
    return (
        <div>
            <img style={{ transform: `scale(${2})` }} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_${count}.jpg?api_key=${apikey}`} alt="lol_champion" />
            {/* {data} */}
        </div>
    )
}
export default ImageData;