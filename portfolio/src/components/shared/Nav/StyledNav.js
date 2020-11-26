import styled from 'styled-components'

const Navbar = styled.nav`

position: fixed;
left: 0;
top: 0;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background: #DB686F;
height: 100vh;
width: 80px;

.initials {
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #688C8C;
  height: 50px;
  width: 50px;
  color: #DB686F;
  background: #202020;
}

.initials-outer {
  margin-top: 40px;
  border-radius: 10px;
  border: 3px solid #202020;
  height: 56px;
  width: 56px;
}

ul {
  padding-inline-start: 0px;
  text-align: center;
}

.icon-container {
  display: flex;
  justify-content: center;
  height: 90px;
}

.nav-icon {
  color: #202020;
  padding: 30px 0;
  font-size: 30px;
  transition: .3s;
}

.nav-icon:hover {
  color: #35a3a3;
  margin-top: -2px;
  font-size: 34px;
}

a {
  text-decoration: none;
}

.social-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.nav-hidden {
  font-size: 18px;
  font-weight: 500;
  margin-top: -35px;
  color: #ecc8cb;
  transition: .3s;
}

.social-icons {
  width: 30px;
  margin: 10px;
  border-radius: 50%;
  transition: .3s;
}

.social-icons:hover {
  width: 38px;
  margin: 6px;
}

`

export default Navbar