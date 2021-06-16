import React, { FunctionComponent } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { useLocation, Link } from "react-router-dom";

interface INavButtonProps {
    text: string;
    link: string;
    image: string;
}
const ButtonText: AnyStyledComponent = styled.div`
    display: flex;
    font-family: "Poppins", sans-serif;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 16px;
    user-select: none;
    margin-top: -5px;
    cursor: pointer;
`;
const Img = styled.img`
    height: 20px;
    width: 20px;
    margin-right: 10px;
    margin-bottom: -90px;
    user-select: none;
`;
const ImageGroup: AnyStyledComponent = styled.div``;
const NavButton: FunctionComponent<INavButtonProps> = ({
    text,
    link,
    children,
    image,
}): JSX.Element => {
    const location = useLocation();

    const active: any = {
        backgroundColor: "#ffa500",
        color: "white",
        transition: "all 0.17s ease-in-out",
    };

    if (location.pathname === link) {
        active.backgroundColor = "#292929";
        active.color = "#fff";
    } else {
        active.color = "white";
    }

    return (
        <div>
            <div>
                <Link style={{ textDecoration: "none" }} to={link}>
                    <div style={active}>
                        <ImageGroup>
                            <ButtonText>
                                <Img src={image} />
                                {text}
                            </ButtonText>
                            {children}
                        </ImageGroup>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export { NavButton };
