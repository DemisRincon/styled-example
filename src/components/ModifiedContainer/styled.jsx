import styled from "styled-components";
import { Container } from "../styled";

export const ModifiedContainer = styled(Container)`
    background-color: blue;
    justify-content: flex-start;
    ul{
        width:auto;
        li{
            background-color: green;
        }
    }
`