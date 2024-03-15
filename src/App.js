
import './App.css';
import AdvanceForm from './components/AdvanceForm';
import BasicInputs from './components/BasicInputs';
import { FormHook } from './components/FormHook';
import FormUpload from './components/FormUpload';
import FormWithValidation from './components/FormWithValidation';
import OnBlurValidation from './components/OnBlurValidation';

function App() {
  return (
    <div className='bg-gray-800 min-h-screen text-white flex justify-center items-center'>
     {/* <OnBlurValidation/> */}
     {/* <BasicInputs/> */}
     <FormUpload/>
     {/* <FormWithValidation/> */}
     {/* <FormHook/> */}
    </div>
  );
}

export default App;
