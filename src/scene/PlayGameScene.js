import AnswerList from "../component/playgame/AnswerList";
import QuizImage from "../component/playgame/QuizImage";
import Score from "../component/playgame/Score";

import React, { useState, useEffect } from 'react';

import Champions from '../resource/champion.json'

const PlayGameScene = () => {
    const [championList, setChampionList] = useState(); //chamName id num skinName
    const playNumber = 10;
    const testCham = [{ "enName": "Gangplank", "koName": "갱플랭크", "skinNum": 23, "skinName": "배신자 갱플랭크" }, { "enName": "RekSai", "koName": "렉사이", "skinNum": 0, "skinName": "default" }, { "enName": "Shen", "koName": "쉔", "skinNum": 4, "skinName": "핏빛달 쉔" }, { "enName": "Braum", "koName": "브라움", "skinNum": 2, "skinName": "프로레슬러 브라움" }, { "enName": "Thresh", "koName": "쓰레쉬", "skinNum": 1, "skinName": "심연의 공포 쓰레쉬" }, { "enName": "Gnar", "koName": "나르", "skinNum": 15, "skinName": "우주비행사 나르" }, { "enName": "Taliyah", "koName": "탈리야", "skinNum": 0, "skinName": "default" }, { "enName": "Aphelios", "koName": "아펠리오스", "skinNum": 18, "skinName": "EDG 아펠리오스" }, { "enName": "Rakan", "koName": "라칸", "skinNum": 18, "skinName": "아르카나 라칸" }, { "enName": "Samira", "koName": "사미라", "skinNum": 20, "skinName": "하이 눈 사미라" }]
    useEffect(() => {
        const GameStart = () => {
            const championNumber = 162;
            var cl = [];
            for (var i = 0; i < playNumber; i++) {
                const chamRan = Math.floor(Math.random() * championNumber);
                const skinRam = Math.floor(Math.random() * Champions[Object.keys(Champions)[chamRan]].skins.length);
                const enName = Object.keys(Champions)[chamRan];
                const koName = Champions[Object.keys(Champions)[chamRan]].name;
                const skinNum = Champions[Object.keys(Champions)[chamRan]].skins[skinRam].num;
                const skinName = Champions[Object.keys(Champions)[chamRan]].skins[skinRam].name;

                const clitem = { enName, koName, skinNum, skinName }
                cl = [clitem, ...cl];
            }


            setChampionList(cl);
            // console.log(JSON.stringify(cl));
            console.log(cl);
            // return cl;
        };
        GameStart();
    }, [])

    return (
        <div className="h-screen w-screen flex justify-center justify-items-center items-center">
            {/* background */}
            {/* content */}
            <div className="border-solid border-2 border-sky-500 w-96 h-96 flex justify-center justify-items-center items-center">
                <div>
                    <div></div>
                    <QuizImage></QuizImage>
                </div>

                <div className="flex flex-col">
                    <Score></Score>
                    <AnswerList answerList></AnswerList>
                    {testCham.map(i =>
                        <div>{i.enName}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PlayGameScene;
