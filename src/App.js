import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { Routes, Route } from "react-router-dom";

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
                            <Route index element={<HomePage />} />
                            <Route path="cart" element={<CartPage />} />
                        </Route>
                    </Routes>
                </ContentContainer>
            </Wrapper>
        </Container>
    );
}

export default App;
