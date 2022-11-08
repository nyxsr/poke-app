import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperHeader = styled.header`
    > * > img{
        width: 20rem; 
        margin: auto;
    }
    > * > p {
        margin-top: -2rem;
        text-align: center;
        color: #fafafa;
        font-size: 3rem;
    }
`

export const SearchInput = styled.input`
    font-size: 3rem;
    padding: 10px;
    text-align: center;
    &:focus{
        outline: 5px #2433ff80;
    }
`

export const PokelistSection = styled.section`
    background-color: #fafafa;
    border-radius: 15px;
    padding: 5rem;
    height: fit-content;
`

export const Card = styled(motion.div)`
    background-color: ${props => props.color === 'bug' ? 'green' : null};
    background-color: ${props => props.color === 'grass' ? '#1ae045' : null};
    background-color: ${props => props.color === 'fire' ? '#d14c27' : null};
    background-color: ${props => props.color === 'normal' ? 'brown' : null};
    background-color: ${props => props.color === 'water' ? '#378ee4' : null};
    background-color: ${props => props.color === 'poison' ? '#5513bf' : null};
    background-color: ${props => props.color === 'electric' ? '#dbc81e' : null};
    background-color: ${props => props.color === 'fighting' ? '#7c7daf' : null};
    background-color: ${props => props.color === 'fairy' ? '#ece7e7' : null};
    background-color: ${props => props.color === 'ground' ? '#cd8347' : null};
    background-color: ${props => props.color === 'psychic' ? '#e42bc3' : null};
    background-color: ${props => props.color === 'rock' ? '#6f6f6f' : null};
    background-color: ${props => props.color === 'ghost' ? '#390f67' : null};
    background-color: ${props => props.color === 'dragon' ? '#2f5a3f' : null};
    background-color: ${props => props.color === 'ice' ? '#6fbfde' : null};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: fit-content;
    padding-right: 5rem;
    height: 20rem;
    border-radius: 1rem;
    margin: 2rem;
    > img{
        order: 2;
        position: absolute;
        top: -3rem;
        right: -2rem;
        width: 8rem;
    }
`
export const DetailCard = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    padding-top: 2rem;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    > p span{
        font-weight: 600;
        text-transform:capitalize;
    }
`
export const Button = styled(Link)`
    padding: 10px 20px;
    background-color: #1f1f1f;
    color: white;
    border-radius: 10px;
    text-decoration: none;
    position: absolute;
    bottom: -1rem;
    left: 1rem;
    &:hover{
        color:#fafafa;
        scale:1.5;
        transition: all .5s;
    }
`

export const BoxDetail = styled(motion.div)`
    background-color: ${props=> props.color};
    border-radius: 15px;
    padding: 10px;
    > * >p{
        font-size: 3rem;
        text-align: center;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #1f1f1f;
    }
`