import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithHoooks } from './01-useState/CounterWithHoooks';
//import { SimpleForm } from './02.useEffect/SimpleForm';
//import { FormWithCustomHook } from './02.useEffect/FormWithCustomHook';
//import { HooksApp } from './HooksApp';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Memorize } from './06-Memos/Memorize';
//import { MemoHook } from './06-Memos/MemoHook';
//import { CallbackHoook } from './06-Memos/CallbackHoook';
//import { Padre } from './07-tarea-memo/Padre';
//import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp';

createRoot(document.getElementById('root')).render(
   <StrictMode>
   <TodoApp />
   </StrictMode>,
)
