import styled from 'styled-components';

const ContactDiv = styled.div`
display: flex;


@keyframes falling {
  0% {transform: translateY(-2000%)}
  /* opacity: 1} 000*/
  100% {transform: translateY(2000%)}
    /* opacity: 0;} */
}

.falling-text {
  animation-name: falling;
animation-timing-function: linear;

  animation-duration: 5s;
  
  animation-iteration-count: infinite;

}


.contact-title {
  position: relative;
  background: #202020;
  display: flex;
  align-items: flex-end;
  z-index: 1;
  width: fit-content;
  height: 90px;
  width: 250px;
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

.pointer {
  width: 40px;
  height: 57px;
  margin-right: -25px;
  padding-top: 15px;
  border-bottom: 1px solid #ecc8cb;
  border-left: 1px solid #ecc8cb;
  transition: .3s;
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

.inline-span {

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








`

export default ContactDiv;