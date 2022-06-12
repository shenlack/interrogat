
import './App.css';
import Quizzes from './components/quizzes/quizzes.component';
function App() {

  const quizzes = [
    {
      'id': 1,
      'title': 'Quiz 1',
      "status": "awaiting"
    },
    {
      'id': 2,
      'title': 'Quiz 2',
      "status": "awaiting"
    },
    {
      'id': 3,
      'title': 'Quiz 3',
      "status": "awaiting"
    },
    {
      'id': 4,
      'title': 'Quiz 4',
      "status": "awaiting"
    },
    {
      'id': 5,
      'title': 'Quiz 5',
      "status": "awaiting"
    }
  ]
  return (
    <div className="App">
      <h2>This is going to be Interrogat</h2>
      <Quizzes quizzes={quizzes} />
    </div>
  );
}

export default App;
