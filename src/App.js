import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [expression, setExpression] = useState('');
  const [total, setTotal] = useState(0);
  const [btnAllClear, setBtnAllClear] = useState(false);
  const [btnClear, setBtnClear] = useState(false);
  const [btnDiv, setBtnDiv] = useState(false);
  const [btnTimes, setBtnTimes] = useState(false);
  const [btnSeven, setBtnSeven] = useState(false);
  const [btnEight, setBtnEight] = useState(false);
  const [btnNine, setBtnNine] = useState(false);
  const [btnMinus, setBtnMinus] = useState(false);
  const [btnFour, setBtnFour] = useState(false);
  const [btnFive, setBtnFive] = useState(false);
  const [btnSix, setBtnSix] = useState(false);
  const [btnPlus, setBtnPlus] = useState(false);
  const [btnOne, setBtnOne] = useState(false);
  const [btnTwo, setBtnTwo] = useState(false);
  const [btnThree, setBtnThree] = useState(false);
  const [btnEqual, setBtnEqual] = useState(false);
  const [btnZero, setBtnZero] = useState(false);
  const [btnDot, setBtnDot] = useState(false);

  const keysArray = ['/', '*', '-', '+', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

  const display = (key) => {
    setExpression(prev => prev + key);
    
    }

  
  const allClear = () => {
    setExpression('');
    setTotal(0);
    setBtnAllClear(true);
    setTimeout(() => setBtnAllClear(false), 80);

  };

  const clear = () => {
    setBtnClear(true);
    setTimeout(() => setBtnClear(false), 80);
    setExpression((prev) =>
      prev.split('').slice(0, prev.length - 1).join('')
    )
    setTotal(0);
  }

  const calculate = () => {
    setBtnEqual(true);
    setTimeout(() => setBtnEqual(false), 80);
    // eslint-disable-next-line no-eval 
    setExpression('');
    // eslint-disable-next-line no-eval 
     if (expression) setTotal(eval(expression));
  };

  const handleKeyPress = (e) => {
    const keys = () => {
      for (let i = 0; i <= keysArray.length; i++) {
        if (e.key === keysArray[i]) { display(keysArray[i]) }

        if (e.key === '/') {
          setBtnDiv(true);
          setTimeout(() => setBtnDiv(false), 80);
        }
        if (e.key === '*') {
          setBtnTimes(true);
          setTimeout(() => setBtnTimes(false), 80);
        }
        if (e.key === '7') {
          setBtnSeven(true);
          setTimeout(() => setBtnSeven(false), 80);
        }
        if (e.key === '8') {
          setBtnEight(true);
          setTimeout(() => setBtnEight(false), 80);
        }
        if (e.key === '9') {
          setBtnNine(true);
          setTimeout(() => setBtnNine(false), 80);
        }
        if (e.key === '-') {
          setBtnMinus(true);
          setTimeout(() => setBtnMinus(false), 80);
        }
        if (e.key === '4') {
          setBtnFour(true);
          setTimeout(() => setBtnFour(false), 80);
        }
        if (e.key === '5') {
          setBtnFive(true);
          setTimeout(() => setBtnFive(false), 80);
        }
        if (e.key === '6') {
          setBtnSix(true);
          setTimeout(() => setBtnSix(false), 80);
        }
        if (e.key === '+') {
          setBtnPlus(true);
          setTimeout(() => setBtnPlus(false), 80);
        }
        if (e.key === '1') {
          setBtnOne(true);
          setTimeout(() => setBtnOne(false), 80);
        }
        if (e.key === '2') {
          setBtnTwo(true);
          setTimeout(() => setBtnTwo(false), 80);
        }
        if (e.key === '3') {
          setBtnThree(true);
          setTimeout(() => setBtnThree(false), 80);
        }
        if (e.key === '0') {
          setBtnZero(true);
          setTimeout(() => setBtnZero(false), 80);
        }
        if (e.key === '.') {
          setBtnDot(true);
          setTimeout(() => setBtnDot(false), 80);
        }

      }

    }
    return (e.key === 'Escape') ? allClear() :
      (e.key === 'Backspace') ? clear() :
        (e.key === 'Enter') ? calculate() : keys()
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  })

  return (
    <div className="App">
      <div className="container">
        <div className="grid">
          <div className="dis">
            <input type="text" value={expression} placeholder='0' disabled />
            <div className="total">{total}</div>
          </div>
          <div onClick={allClear} className={`padButton AC tomato ${btnAllClear && 'opacity'} `}>AC</div>
          <div onClick={clear} className={`padButton C tomato ${btnClear && 'opacity'}`}>C</div>
          <div onClick={() => display('/')} className={`padButton div ${btnDiv && 'opacity'}`}>/</div>
          <div onClick={() => display('*')} className={`padButton times ${btnTimes && 'opacity'}`}>x</div>
          <div onClick={() => display('7')} className={`padButton seven dark-gray ${btnSeven && 'opacity'}`}>7</div>
          <div onClick={() => display('8')} className={`padButton eight dark-gray ${btnEight && 'opacity'} `}>8</div>
          <div onClick={() => display('9')} className={`padButton nine dark-gray ${btnNine && 'opacity'} `}>9</div>
          <div onClick={() => display('-')} className={`padButton minus ${btnMinus && 'opacity'}`}>-</div>
          <div onClick={() => display('4')} className={`padButton four dark-gray ${btnFour && 'opacity'}`}>4</div>
          <div onClick={() => display('5')} className={`padButton five dark-gray ${btnFive && 'opacity'}`}>5</div>
          <div onClick={() => display('6')} className={`padButton six dark-gray ${btnSix && 'opacity'}`}>6</div>
          <div onClick={() => display('+')} className={`padButton plus ${btnPlus && 'opacity'} `}>+</div>
          <div onClick={() => display('1')} className={`padButton one dark-gray ${btnOne && 'opacity'}`}>1</div>
          <div onClick={() => display('2')} className={`padButton two dark-gray ${btnTwo && 'opacity'}`}>2</div>
          <div onClick={() => display('3')} className={`padButton three dark-gray ${btnThree && 'opacity'}`}>3</div>
          <div onClick={calculate} className={`padButton equal ${btnEqual && 'opacity'}`}>=</div>
          <div onClick={() => display('0')} className={`padButton zero dark-gray ${btnZero && 'opacity'}`}>0</div>
          <div onClick={() => display('.')} className={`padButton dot dark-gray ${btnDot && 'opacity'}`}>.</div>
        </div>
      </div>
    </div>
  );
}
export default App;
