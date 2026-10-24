import Accordian from "./components/Accordion/Accordian"
import ImageSlider from "./components/Image-slider/ImageSlider"
import QrCode from "./components/Qr-code-generator/QrCode"
import RandomColor from "./components/random-color-generate/RandonColor"
import StarRating from "./components/Star-Rating/StarRating"


const App = () => {
  return (
    <div>
      {/* Accordian Project */}
      {/* <Accordian/> */}

      {/* Random Color Generater Project*/}
      {/* <RandomColor/> */}

      {/* Star Rating Project*/}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image Slider Project */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'}/> */}

      {/* Qr Code Generator */}
      <QrCode/>
    </div>
  )
}

export default App
