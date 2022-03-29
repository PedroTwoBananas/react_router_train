import styled from 'styled-components'

export const LoginWrapper = styled.div`
   margin-top: 200px;
   display: flex;
   justify-content: center;
`

export const LoginBlock = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   gap: 100px;
   align-items: center;
   width: 400px;
   height: 200px;
   border: 2px solid #22B8EE;
   border-radius: 5px;
   background-color: rgba(0, 0, 0, 0.4);
`

export const LoginTitle = styled.span`
font-size: 30px;
font-family: Arial, Helvetica, sans-serif;
color: white;
`

export const LoginButton = styled.button`
width: 150px;
height: 40px;
background-color: rgba(0, 0, 0, 0.4);
border: 2px solid orange;
color: white;
font-family: Arial, Helvetica, sans-serif;
cursor: pointer;
&:hover {
    border: 2px solid white;
}
`
