import './quizzes.styles.scss';
import QuizLink from '../quiz-link/quiz-link.component';

const Quizzes = ({ quizzes }) => {


    return (
        <div className="quizzes-container">
            < ul className="quizzes">
                {quizzes.map((quiz) => (
                    <QuizLink key={quiz.id} quiz={quiz} />
                ))
                }
            </ul>
        </div >
    )
}

export default Quizzes;