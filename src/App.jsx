import { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Route, Routes
} from "react-router-dom";
import HomeScreen from "./pages/Home";
import styled from "styled-components";
import Header from "./components/Header";
import Canvas from "./canvas";
import ThemeWrapper from "./components/DarkMode";
import Footer from './components/Footer'
import Loader from './components/Loader'

import { initiateAnimation } from "./gsap";


function App() {
  useEffect(() => {
    initiateAnimation()
  }, [])

  return (
    <ThemeWrapper>
      <Helmet>
        <title>Aswin</title>
        <meta name="description" content={'YOUR WEB3 MARKETING SAVIOUR'} />
        <meta property="og:title" content={'Aswin'} />
        <meta property="og:description" content={"Welcome to my space! I'm Aswin, a marketer and content creator"} />
        <meta property="og:image" content='/aswin.webp' />
        <meta property="og:type" content="website" />
      </Helmet>
      <Canvas />
      <MainContainer>
        <Header />
        <Routes>
          <Route element={<HomeScreen />} path="/" />
        </Routes>
        <Footer />
      </MainContainer>
      <Loader />
    </ThemeWrapper>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  height: 100%; 
 overflow-x: hidden;
`