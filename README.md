시작시 로고남기고 위로 올라가면서 게임화면 등장

게임화면 나올때 
1. 랜덤으로 챔피언 10 id 리스트 생성
2. 각 챔피언 별로 랜덤한 번호에 스킨 이미지 리스트 생성
3. [챔피언 한글 이름, 스킨 이미지] 형식에 배열 생성
//api에서 챔피언 스킨 이미지 데이터 불러오기 
//이미지를 미리 저장해놓는 방식은 용량이슈가 있을수도 있음 -> api 이용
//https://developer.riotgames.com/docs/lol#data-dragon_champions
//https://developer.riotgames.com/apis#tft-league-v1

map으로 완성된 배열돌리고
30초 타이머에 맞춰서 이미지 확대된 상태에서 천천히 축소시키기
30초 전에 정답을 맞추면 총 시간에 현제 시간 더하고 초기화
정답을 못맞추면 정답을 보여주고 다음으로 이동
//이미지가 랜덤한 지점에 확대되서 보여지고 점점 축소되는 로직 구현

10번이 전부 지났을때 result 페이지 에서 총 점수, 공유하기, 다시하기 보여줌
//공유하기 기능



PlayGameScene 리스트 정하기 

Answerlist
input 
quiz
score
