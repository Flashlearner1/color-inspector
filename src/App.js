
import Square from './Square';
import Field from './Field';
import { useState } from 'react';


function App() {
  const [colorValue, setcolorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <Square 
      colorValue={colorValue}
      hexValue={hexValue}
      isDarkText={isDarkText}
      />
      <Field 
      colorValue={colorValue}
      setcolorValue={setcolorValue}
      setHexValue={setHexValue}
      isDarkText={isDarkText}
      setIsDarkText={setIsDarkText}
      />
      
    </div>
  );
}

export default App;
