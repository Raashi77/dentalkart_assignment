import styled from 'styled-components'
import {theme} from './theme'
export const Card = styled.div`
  padding: ${props => props.fontSize||'10px'},
  boxShadow: 1px 3px 1px #9E9E9E",
  margin: '10px'
`;
export const ScreenContainer = styled.div`
  flex: 1;
 background-color: ${props=>props.backgroundColor||theme.screenBackgroundColor};
`
export const SectionView = styled.div`
    margin-top: ${props=>props.marginTop||'10px'};
    margin-bottom: ${props=>props.marginBottom||'5px'};
    margin-left: 10px;
    margin-right: 10px;
`
export const SectionHeadingText = styled.div`
    font-size: 18px;
    color: ${theme.guestColors.guestColor18};
`
export const DarkColoredText = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: ${props =>props.size||'15px'};
    color: ${props =>props.color||theme.guestColors.guestColor18};
`
export const FadedText = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: ${props =>props.size||'15px'};
    color: ${props =>props.color||theme.tabInactiveColor};
`
export const BoldDarkColoredText = styled.div`
    font-size: ${props =>props.size||'15px'};
    color: ${props =>props.color||theme.guestColors.guestColor18};
    font-weight: 650;
`
export const SectionContent = styled.div`
    margin-top: ${props=>props.marginTop||'5px'};
    margin-bottom: ${props=>props.marginBottom||'5px'};
`
export const SectionHeading = styled.div`
    margin-top: ${props=>props.marginTop||'18px'};
    margin-bottom: ${props=>props.marginBottom||'18px'};
`
export const RowLayout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${props=>props.normalRow?'flex-start':'center'};
`
