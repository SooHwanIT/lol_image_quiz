import Logo from "../component/start/Logo";
import StartButton from "../component/start/StartButton";
import Info from "../component/start/Info";

const StartScene = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-between items-center">
            {/* logo */}
            <Logo></Logo>

            {/* start button */}
            <StartButton></StartButton>

            {/* info text */}
            <Info></Info>

        </div>
    )
}
export default StartScene;