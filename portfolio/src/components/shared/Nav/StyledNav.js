import styled from 'styled-components'

const Navbar = styled.nav`

position: fixed;
left: 0;
top: 0;

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background: lightcoral;
height: 100vh;
width: 70px;

.initials {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  height: 50px;
  width: 50px;
}

ul {
  padding-inline-start: 0px;

}

li {
  list-style: none;
  padding: 10px 0;
  transform: rotate(-45deg);
  margin: 50px 0;

} 

a {
  text-decoration: none;
}

.social-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.social-icons {
  width: 30px;
  margin: 10px;
}
`

export default Navbar