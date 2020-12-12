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
z-index: 99;

.burger {
  display: none;
}

.script {
  display: none;
}

.all-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 73%;
}

h1 {
  font-weight: 700;
}

.initials {
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  color: #DB686F;
  background: #202020;
  margin-top: 20px;
}

#initials-text {
  transform: rotate(-70deg);
  width: 31px;
}

.initials:hover {
  background: #35a3a3;
  color: #202020;
}

ul {
  padding-inline-start: 0px;
  text-align: center;
}

.icon-container, .social-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
}

.social-icon-container {
  height: 50px;
  width: 50px;
}

#skills {
  cursor: pointer;
}

.nav-icon {
  color: #202020;
  padding: 30px 0;
  font-size: 30px;
  transition: .2s;
}

.nav-icon:hover {
  color: #35a3a3;
  font-size: 33px;
}

a {
  text-decoration: none;
}

.social-container {
  display: flex;
  height: 100px;
  justify-content: space-between;
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

.social{ 
  padding: 0;

}


.social-icons:hover {
  width: 38px;
  margin: 6px;
}

@media screen and (max-width: 800px) {
  
  left: initial;  
  flex-direction: row;
  height: 80px;
  width: 100vw;

.all-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

#nav-icon-main {
  margin-left: 7vw;
}

.initials {
  margin-top: initial;
  margin-left: 15px;
}

ul {
  display: flex;
  flex-direction: row;
}

.social-container {
  flex-direction: row;
  margin-bottom: initial;
  margin-right: 5px;
  position: absolute;
  right: 20px;
  height: 80px;
  align-items: center;
  justify-content: space-between;
}

.icon-container {
  align-items: center;
}

}

@media screen and (max-width: 550px) {

  .burger {
    display: block;
  }
  
  .social-container {
    position: initial;
  }

  .all-icons {
    transform: ${({ openBurger }) => (openBurger ? "translateX(0%)" : "translateX(101%)")};
    transition: .4s;
    transition-timing-function: ease-in-out;
    position: fixed;
    margin-right: initial;
    right: 0;
    top: ${({ home }) => (home ? "200px" : "160px")};
    background: #202020;
    height: 80px;
    width: 100%;
    border-top: 3px solid #35a3a3;
    border-bottom: 3px solid #f0ebeb;
    flex-direction: row-reverse;
    padding: 0px 10px;
  }
  .script {
    position: absolute;
    left: 80px;
    display: flex;
    height: 100%;
    align-items: flex-end;
    width: fit-content;
  }
  
  #e-didonato {
    font-family: 'Nothing You Could Do', cursive;
    font-weight: 500;
    font-size: 31px;
    letter-spacing: -1px;
    margin: 10px;
  }

  .nav-icon {
    color: #35a3a3;
  }

  .nav-icon:hover {
    color: #f0ebeb;
    font-size: 30px;
  }

  .social-container {
    margin-left: 15px;
  }
  
  .social {
    color: #DB686F;
  }

  .icon-container {
    height: 60px;
    width: 60px;
  }

  #nav-icon-main {
    margin-left: initial;
  }

  .nav-hidden {
  font-size: 12.5px;
  font-weight: 400;
  margin-top: -5px;
  margin-bottom: 0;
  color: #c0c0c0;
  transition: .3s;
}


}

`

export default Navbar