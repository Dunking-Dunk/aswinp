import { useEffect } from "react";
import {
  Route, Routes
} from "react-router-dom";
import HomeScreen from "./pages/Home";
import styled from "styled-components";
import Header from "./components/Header";
import Canvas from "./canvas";
import ThemeWrapper from "./components/DarkMode";
import Footer from './components/Footer'

import { initiateAnimation } from "./gsap";


function App() {
  useEffect(() => {
    initiateAnimation()
  }, [])

  return (
    <ThemeWrapper>
      <MainContainer>
        <Header />
        <Canvas />
        <Routes>
          <Route element={<HomeScreen />} path="/" />
        </Routes>
        <Footer />
      </MainContainer>
    </ThemeWrapper>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  height: 100%; 
 overflow-x: hidden;
`