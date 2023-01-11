
const QuizImage = (img, time) => {
    return (
        <div className="w-76 h-full bg-glay-100 ">
            <p>{time}</p>
            <img src={img}></img>
        </div>
    )
}
export default QuizImage