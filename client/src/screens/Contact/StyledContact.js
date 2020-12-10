import styled from 'styled-components';

const ContactDiv = styled.div`
display: flex;


.contact-title {
  position: relative;
  background: #202020;
  display: flex;
  align-items: flex-end;
  z-index: 1;
  width: fit-content;
  height: 90px;
  width: 100%;
  margin-top: -26px;
}

.contact-blurb {
width: 360px;
text-align: center; 
margin-bottom: 20px;
}

.form-main {
  margin: 0 auto;
}
.form {
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 350px;
  padding: 8px;
  padding-bottom: 20px;
  background: rgba(200, 200, 200, .2);
}

.show-contact {
  color: #43a8a8;
  cursor: pointer;
}

a {
  color: inherit;
}

a:hover {
  color: #35a3a3;
  font-size: 18px;
}

.pointer {
  width: 40px;
  height: 60px;
  margin-right: -25px;
  padding-top: 15px;
  border-bottom: 1px solid #ecc8cb;
  border-left: 1px solid #ecc8cb;
  transition: .3s;
  border-bottom-color:  ${({ showContact }) => (showContact ? "#ecc8cb" : "#202020")};
  border-left-color:  ${({ showContact }) => (showContact ? "#ecc8cb" : "#202020")};
}

.inline-span {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: fit-content;
  margin-top: -10px;
  transform: ${({ showContact }) => (showContact ? "translateY(0)" : "translateY(-120%)")};
  line-height: ${({ showContact }) => (showContact ? "25px" : "0px")};
  transition: .5s;
  z-index: 0;
}

.input {
  font-family: avenir;
  height: 50px;
  margin: 8px;
  text-align: center;
  border: none;
  background: rgb(222, 222, 222);
}

*::placeholder {
  color: #688C8C !important;
}

textarea {
resize: vertical;
min-height: 100px;
max-height: 250px;
}

.input:focus {
  background: rgb(236, 200, 203);
  outline: none;
}

.top-row {
  display: flex;
  width: 100%;
}

#name {
   width: 100%;
 }

#email {
  width: 100%;
 }

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 8px;
  height: 50px;
}
button {
  border: none;
  width: 20%;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  background:  #296CF2;
  font-weight: 500;
  color: rgb(207, 207, 207);
  transition: .3s;
  font-size: 14px;
}

button:hover {
  height: 45px;
  width: 80px;;
  margin-bottom: -2px;
  color: #202020;
  font-size: 16px;
  font-weight: 500;
}

@media screen and (max-width: 600px) {

  .left-div-child {
    height: 100%;
  }

  .contact-title {
  position: initial;
  background: #202020;
  margin: initial;
  height: 100%;
  display: flex;
  align-items: center;
  display: flex;
  z-index: 1;
  width: 150px;
}

  .form {
    padding-top: 10px;
  }

  .top-row {
    flex-direction: column;
  }

  #name, #email {
    width: initial;
  }

  #contact-blurb-bottom {
    margin-top: -10px;
  }

  input, textarea {
    font-size: 18px;
  }

  .inline-span {
    overflow: visible;
    margin-left: 0px;
    transform: ${({ showContact }) => (showContact ? "translateX(0)" : "translateX(-120%)")};
    line-height:  25px;
  }
  
  .pointer {
    overflow: auto;
    width: 140px;
    height: 30px;
    margin-right: -120px;
    margin-top: 25px;
  }

  #contact-extra {
    display: flex;
    flex-flow: column-reverse;
    color: #35a3a3;
  }

}

@media screen and (max-width: 400px)  {


  .form {
    width: 95vw;
  }

  #form-right {
    overflow: initial;
  }



}






`

export default ContactDiv;