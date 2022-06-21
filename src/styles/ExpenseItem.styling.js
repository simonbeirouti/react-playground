import { device } from "./constants"
import styled from "styled-components"

export const Parent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    padding: 0.5rem;
    margin: 1rem 0;
    border-radius: 12px;
    background-color: #4b4b4b;
`
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-end;
    flex-flow: column-reverse;
    justify-content: flex-start;
    flex: 1;
    @media ${device.tabletS} { 
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex: 1;
    }
`
export const ItemTitle = styled.h2`
    color: #3a3a3a;
    font-size: 1rem;
    flex: 1;
    margin: 0 1rem;
    color: white;
    @media ${device.tabletS} { 
        font-size: 1.25rem;        
    }
`
export const ItemPrice = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #40005d;
    border: 1px solid white;
    padding: 0.5rem;
    border-radius: 12px;
    @media ${device.tabletS} { 
        font-size: 1.25rem;
        padding: 0.5rem 1.5rem;    
    }
`