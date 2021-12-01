import "./App.css";
import Card from "./components/card";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function App() {
  return (
    <div className="w-full h-screen bg-white relative">
      <div className="absolute w-full h-full">
        <div className="w-full h-full  bg-gradient-radial-red  bg-left  absolute top-0 rounded-full transform -translate-x-20">

        </div>
        <div className="w-full h-full  bg-gradient-radial-blue absolute top-0 rounded-full transform translate-y-72 md:-translate-x-72">

        </div>

      </div>
      <div className="py-16 px-3 xl:container xl:px-16 mx-auto relative">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Editor's pick</h2>
          <p className="text-gray-500 mt-2 md:text-lg">Discover the most outstanding articles in all topics of life.</p>
        </div>

        <div className="flex flex-col items-center md:flex-row-reverse relative">
          <div className="mt-10 rounded-2xl overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1440778303588-435521a205bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
          </div>
          <div className="w-full px-4 md:px-0 relative -top-7 md:top-auto">
            <div className="md:absolute md:w-150% lg:w-120% -top-24" >
              <Card />
              <div className="px-3 mt-4 flex items-center gap-2">
                <button className="h-10 w-10 rounded-full text-gray-600 border border-gray-200 flex items-center justify-center">
                  <AiOutlineLeft />
                </button>
                <button className="h-10 w-10 rounded-full text-gray-600 border border-gray-200 flex items-center justify-center">
                  <AiOutlineRight />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>);
}

export default App;
