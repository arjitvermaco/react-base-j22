import logo from './logo.svg';
import './App.css';
import { TodoComponent } from './component/TodoComponent';

function App() {
  return (
    <div className='min-h-screen bg-gray-800 text-white flex justify-center pt-24 '>
      <TodoComponent/>
    </div>
  );
}

export default App;
