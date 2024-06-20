import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const bg = "https://getwallpapers.com/wallpaper/full/0/d/d/64705.jpg"
  const [amt, setAmt] =useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmt, setConvertedAmt ] = useState(0);

  const currncyInfo = useCurrencyInfo(from)

  const opts  = Object.keys(currncyInfo)

  const swap = ()=>{
    setTo(from)
    setFrom(to)
    setConvertedAmt(amt)
    setAmt(convertedAmt)
  }

  const convert=() => {setConvertedAmt(amt* currncyInfo[to])}

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('${bg}')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amt}
                            currncyOptions={opts}
                            onCurrChange={(currency)=>setFrom(currency)}
                            selectCurr={from}
                            onAmtChange={(amt)=>setAmt(amt)}
                            on
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmt}
                            currncyOptions={opts}
                            onCurrChange={(currency)=>setTo(currency)}
                            selectCurr={to}
                            amtDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
