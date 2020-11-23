import styled from 'styled-components'

const Navbar = styled.nav`

position: fixed;
left: 0;
top: 0;

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background: #BF6B72;;
height: 100vh;
width: 80px;

.initials {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #688C8C;
  height: 50px;
  width: 50px;
  color: #bf6b72;
  background: #313131;
  /* background: #688C8C; */
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
  border-radius: 50%;
  transition: .3s;
}

.social-icons:hover {
  width: 36px;
  margin: 7px;
}

`

export default Navbar