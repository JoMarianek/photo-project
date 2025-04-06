import { Routes, Route } from "react-router"
import "./components/SlideShow"
import SlideShow from "./components/SlideShow"
import UploadPage from "./pages/UploadPage"
import 'react-slideshow-image/dist/styles.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<SlideShow />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
  )
}

export default App
