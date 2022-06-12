import './quiz-link.styles.scss';


const QuizLink = ({ quiz }) => {
    return (
        <li className="quiz-link">
            <span className="quiz-name">{quiz.title}</span>
            <span className="quiz-status">{quiz.status}</span>
        </li>
    )
}

export default QuizLink;



