import React from "react";
import styled from "styled-components";
import flipkartText from "../assets/images/flipkart_text.png";
import plusLogo from "../assets/images/plus_logo.png";
import { Container } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

const ContainerMain = styled.div`
    background-color: #2874f0;
    height: 100%;
    padding: 0px 200px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    color: #fff;
    -webkit-box-shadow: 0px 9px 13px -8px rgba(0, 0, 0, 0.43);
    -moz-box-shadow: 0px 9px 13px -8px rgba(0, 0, 0, 0.43);
    box-shadow: 0px 9px 13px -8px rgba(0, 0, 0, 0.43);

    @media only screen and (max-width: 768px) {
        padding: 0;
    }
`;

const Wrapper = styled.div`
    display: flex;
    gap: 15px;
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    cursor: pointer;
`;

const FlipkartTextImg = styled.img`
    width: 75px;
`;

const PlusImg = styled.img`
    width: 10px;
`;

const LogoText = styled.span`
    display: flex;
    align-items: center;
    font-style: italic;
    font-size: 11px;
    /* font-weight: 500; */

    &:hover {
        text-decoration: underline;
    }
`;

const PlusText = styled.span`
    padding: 0px 2px;
    color: #ffe500;
    font-weight: 500;
`;

const SearchContainer = styled.div`
    flex: 1;
    position: relative;
`;

const SearchIcon = styled.div`
    height: 100%;
    padding-right: 12px;
    display: flex;
    align-items: center;
    top: 0;
    right: 0;
    font-size: 23px;
    color: #2874f0;
    position: absolute;
`;

const SearchInput = styled.input`
    width: 100%;
    font-size: 14px;
    padding: 7px 50px 7px 17px;
    outline: none;
    border: none;
    -webkit-box-shadow: 0px 9px 13px -8px rgba(0, 0, 0, 0.43);
    -moz-box-shadow: 0px 9px 13px -8px rgba(0, 0, 0, 0.43);
    box-shadow: 0px 9px 13px -8px rgba(0, 0, 0, 0.43);
    border-radius: 2px;
`;

const RightContainer = styled.div`
    display: flex;
    justify-content: space-around;
    font-weight: 500;
    align-items: center;
    flex: 1;
`;

const Button = styled.button`
    font-weight: 500;
    background: #fff;
    color: #2874f0;
    border: none;
    border-radius: 2px;
    padding: 4px 40px;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: #eee;
    }
`;

const NavText = styled.span`
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;
`;

const Navbar = () => {
    return (
        <ContainerMain>
            <Container fluid>
                <Wrapper>
                    <LogoContainer>
                        <FlipkartTextImg src={flipkartText} alt="" />
                        <LogoText>
                            Explore
                            <PlusText>Plus</PlusText>
                            <PlusImg src={plusLogo} />
                        </LogoText>
                    </LogoContainer>
                    <SearchContainer>
                        <SearchInput
                            type="text"
                            placeholder="Search for products, brands and more"
                        />
                        <SearchIcon>
                            <BiSearch />
                        </SearchIcon>
                    </SearchContainer>
                    <RightContainer>
                        {/* <Button>Login</Button> */}
                        <NavText>
                            Debanjan
                            <BiChevronDown />
                        </NavText>
                        <NavText>Become a Seller</NavText>
                        <NavText>
                            More <BiChevronDown />
                        </NavText>
                        <NavText>
                            <FaShoppingCart />
                            Cart
                        </NavText>
                    </RightContainer>
                </Wrapper>
            </Container>
        </ContainerMain>
    );
};

export default Navbar;
