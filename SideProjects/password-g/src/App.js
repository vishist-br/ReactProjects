    import React, {useState, setTimeout, useEffect} from "react";
    import {
      Card,
      CardBody,
      CardFooter,
      Typography,
      Button,
      Input,
      Slider,
      Checkbox
    } from "@material-tailwind/react";
    import './App.css';
    import {CopyToClipboard} from 'react-copy-to-clipboard';
    import passwordGif from './assets/password.gif'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

    function App() {
      const [inputValue, setInputValue] = useState('')
      const [value, setValue] = useState(5);
      const [copied, setCopied] = useState(false);
      const [filters, setFilters] = useState({
        uppercase: false,
        lowercase: false,
        number: false,
        specialChars: false
      })
      const randomStringGenerator = () =>{
          let characters = ''

          if(filters.lowercase){
            characters += 'abcdefghijklmnopqrstuvwxyz'
          }
          if(filters.uppercase){
            characters += 'ABCDEFGHIJKLMNOPQRSTUVWXY'
          }
          if(filters.number){
            characters += '1234567890'
          }
          if(filters.specialChars){
            characters += '!@#$%^&*()-_=+[]{};:,.<>?';
          }

          let result = ''

          for (let i = 0; i < value; i++) {
            console.log(Math.floor(Math.random() * value));
            result += characters.charAt(Math.floor(Math.random() * characters.length));
          }

          return result;

      }
      const generateRandomString = () => {
        console.log('')
        let result = randomStringGenerator()
        if(result.length > 4){
          setInputValue(result)
        } else {
          setInputValue('No Check Box is Selected')
        }
        
      }
      return (
        <div className="App">
          <header className="App-header">
          <Card className="mt-6 w-4/12">
          <CardBody class="p-10 bg-red">
            <div class="flex justify-center">
              <img src={passwordGif} alt="Password Gif" class="w-3/12" />
            </div>
            <Typography variant="h5" color="blue-gray" className="mb-2" class="text-black text-2.5xl font-bold">
              PASSWORD GENERATOR
            </Typography>
            <Typography class="text-lg font-100 text-black mb-4">
            Create strong and secure passwords to keep your account safe online.
            </Typography>
            <div class="flex mb-5">
                <div class="grow h-14 mr-2">
                    <Input value={inputValue} icon={<FontAwesomeIcon icon={faSyncAlt} onClick={generateRandomString} />} />
                </div>
                <div class="grow-0">
                <CopyToClipboard text={inputValue} onCopy={() => {setCopied(true)
                window.setTimeout(() => {
                  setCopied(false)
                }, 1000)
              }}>
                    <Button style={{backgroundColor: '#319795', color: 'black', fontWeight: 'bold'}}> {copied ? 'Copied' : 'Copy' }</Button>
                </CopyToClipboard>
                </div>
            </div>
            <div class="flex justify-start ...">
            <Typography class="text-base font-200  text-black">
            Password Length: {value}
            </Typography>
            </div>
            <br />
            <div>
        <Slider
          label="Brightness"
          value={value}
          onChange={(e) => {setValue(e.target.value)}}
          min={5}
          max={30}
          step={1}
          color={"teal"}
        />
      </div>
      <br/>
      <div class="grid grid-flow-row">
    <div class="flex justify-between">
    <Typography class="text-lg font-200  text-black">
            Lowecase
    </Typography>
    <Checkbox color="teal" onChange={() => setFilters({
      ...filters,
      lowercase: !filters.lowercase
    })} value={filters.lowercase} />
    </div>
    <div class="flex justify-between">
    <Typography class="text-lg font-200  text-black">
            Uppercase
    </Typography>
    <Checkbox color="teal" onChange={() => setFilters({
      ...filters,
      uppercase: !filters.uppercase
    })} value={filters.uppercase} />
    </div>
    <div class="flex justify-between">
    <Typography class="text-lg font-200  text-black">
            Number
    </Typography>
    <Checkbox color="teal" onChange={() => setFilters({
      ...filters,
      number: !filters.number
    })} value={filters.number} />
    </div>
    <div class="flex justify-between">
    <Typography class="text-lg font-200  text-black">
            Special Characters
    </Typography>
    <Checkbox color="teal" onChange={() => setFilters({
      ...filters,
      specialChars: !filters.specialChars
    })} value={filters.specialChars} />
    </div>
  </div>
          </CardBody>
        </Card>
          </header>
        </div>
      );
    }

    export default App;
