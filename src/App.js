import logo from './logo.svg';
import './App.css';
import ReciepeList from './component/ReciepeList';
import ParentComponent from './component/HOC/ParentComponent';
import ChildComponent from './component/HOC/ChildComponent';

function App() {
  return (
    // <ReciepeList/>
    <ParentComponent year="2020">
      <ChildComponent user="arjit"/>
    </ParentComponent>
  );
}

export default App;
