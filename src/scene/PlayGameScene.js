import React, { useState, useEffect } from 'react';

import Champions from '../resource/champion.json'

const PlayGameScene = () => {
    const [championList, setChampionList] = useState([]); //chamName id num skinName
    const [inputField, setInputField] = useState();
    const [score, setScore] = useState(0);
    const [stage, setStage] = useState(0);
    const [timer, setTimer] = useState();

    const playNumber = 10;
    const playTime = 10000;

    useEffect(() => {
        const GameInit = () => {
            const championNumber = 162;
            var cl = [];
            for (var i = 0; i < playNumber; i++) {
                const chamRan = Math.floor(Math.random() * championNumber);
                const skinRam = Math.floor(Math.random() * Champions[Object.keys(Champions)[chamRan]].skins.length);
                const enName = Object.keys(Champions)[chamRan];
                const korName = Champions[Object.keys(Champions)[chamRan]].name;
                const skinNum = Champions[Object.keys(Champions)[chamRan]].skins[skinRam].num;
                const skinName = Champions[Object.keys(Champions)[chamRan]].skins[skinRam].name;

                const clitem = { enName, korName, skinNum, skinName }
                cl = [clitem, ...cl];
            }

            setChampionList(cl);
        };
        GameInit();
        StageStart();
    }, [])

    const StageStart = () => {
        const standardTime = new Date();
        const getTimer = setInterval(() => {
            const currentTime = new Date();
            setTimer(playTime - (currentTime.getTime() - standardTime.getTime()));
            if (playTime - (currentTime.getTime() - standardTime.getTime()) < 0) {
                clearInterval(getTimer);
            }
        }, 100)
    }
    const InputAnswer = () => {
        if (championList[stage].korName === inputField) {
            console.log('정답');
            setScore(timer);
            StageStart();
        } else {
            console.log("오답")
        }
    }

    return (
        <div className="h-screen w-screen flex justify-center justify-items-center items-center">
            {/* background */}
            {/* content */}
            <div className="border-solid border-2 border-sky-500 w-96 h-96 flex justify-center justify-items-center items-center">
                <div>
                    <div></div>
                </div>

                <div className="flex flex-col">
                    <p>stage : {stage}</p>
                    {championList[stage].korName}
                    <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championList[stage].enName}_${championList[stage].skinNum}.jpg`} alt="챔피언" />
                    {timer}
                    <input type="text" onChange={(e) => { setInputField(e.target.value) }} />
                    <button onClick={() => InputAnswer()}>버튼</button>
                </div>
            </div>
        </div>
    )
}

export default PlayGameScene;
