import './App.css';
import focusImage from './image.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={focusImage} className="image" alt="도무지 집중이 되지가 않아" style={{ maxWidth: '50%', height: 'auto', borderRadius: '10px' }} />
        <p>
          안녕하세요. 22300681 정예원의 react입니다.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
