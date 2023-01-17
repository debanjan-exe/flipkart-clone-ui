import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import CartPage from "./pages/Cartpage";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages";

const Container = styled.div``;

const Wrapper = styled.div``;

const NavbarContainer = styled.div`
    position: sticky;
    height: 6vh;
`;

const ContentContainer = styled.div`
    height: 94vh;
    /* background-color: #999; */
    overflow-y: scroll;
`;

function App() {
    return (
        <Container>
            <Wrapper>
                <NavbarContainer>
                    <Navbar />
                </NavbarContainer>
                <ContentContainer>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Homepage />} />
                            <Route path="cart" element={<CartPage />} />
                        </Route>
                    </Routes>
                </ContentContainer>
            </Wrapper>
        </Container>
    );
}

export default App;
