import logogImg from '../assets/quiz-logo.png';

export default function Header(){
    return <header>
        <img src={logogImg} alt="quiz-log o" />
        <h1>React Quiz</h1>
    </header>
}