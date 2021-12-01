import "./App.css";
import Card from "./components/card";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useState } from "react";

const dataHeroSection = [
  {
    card: {
      id: '1',
      tag: 'industrial',
      authorPic: 'https://image.thanhnien.vn/1200x630/Uploaded/2021/zxaijr/2021_03_16/rosealbumkyluc1_lgic.png',
      title: 'Lenovo’s smarter devices stoke professional passions',
      authorName: 'Foulcher Nathanil',
      date: 'May 20,2021',
      heartNum: '3.4k',
      comment: 13,
      timeRead: 2
    },
    image: 'https://images.unsplash.com/photo-1440778303588-435521a205bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    card: {
      id: '2',
      tag: 'tools',
      authorPic: 'https://2sao.vietnamnetjsc.vn/images/2020/07/07/15/13/Rose.jpg',
      title: 'How AI and Teams are benefitting the littlest of patients',
      authorName: 'Falconar Agnes',
      date: 'May 20,2021',
      heartNum: '3.4k',
      comment: 11,
      timeRead: 2
    },
    image: 'https://images.unsplash.com/photo-1489753735160-2cbf3d9006d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
  },
  {
    card: {
      id: '3',
      tag: 'tools',
      authorPic: 'https://2sao.vietnamnetjsc.vn/images/2020/07/07/15/13/Rose.jpg',
      title: 'DIYer and TV host Trisha Hershberger’s journey through',
      authorName: 'Falconar Agnes',
      date: 'May 20,2021',
      heartNum: '3.0k',
      comment: 13,
      timeRead: 2
    },
    image: 'https://images.unsplash.com/photo-1418854982207-12f710b74003?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
]

function App() {
  const [slideIndex, setSlideIndex] = useState(0)

  const incrementSlideIndex = () => {
    if (slideIndex === dataHeroSection.length - 1) {
      console.log('to last');
      setSlideIndex(0)
    } else {
      setSlideIndex(slideIndex + 1)
    }
  }
  const decrementSlideIndex = () => {
    if (slideIndex === 0) {
      setSlideIndex(dataHeroSection.length - 1)
    } else {
      setSlideIndex(slideIndex - 1)
    }
  }
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

        <div className="grid grid-cols-1 items-center md:grid-cols-2 relative">
          <div className="mt-10   relative md:w-full md:order-1 ">
            <img src={dataHeroSection[slideIndex].image} alt="" className="animate-show rounded-2xl" key={dataHeroSection[slideIndex].image} />
          </div>
          <div className="w-full px-4 md:px-0 relative -top-7 md:top-auto ">
            <div className="md:absolute md:w-150% lg:w-120% -top-24" >
              <Card cardData={dataHeroSection[slideIndex].card} />
              <div className="px-3 mt-4 flex items-center gap-2">
                <button className="bg-white h-10 w-10 rounded-full text-gray-600 border border-gray-200 flex items-center justify-center"
                  onClick={decrementSlideIndex}
                >
                  <AiOutlineLeft />
                </button>
                <button className="bg-white h-10 w-10 rounded-full text-gray-600 border border-gray-200 flex items-center justify-center"
                  onClick={incrementSlideIndex}
                >
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
