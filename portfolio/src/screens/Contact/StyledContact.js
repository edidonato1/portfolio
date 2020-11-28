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