import styled from 'styled-components';

const ContactDiv = styled.div`
display: flex;


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

#message {

}
.top-row {
  display: flex;
  width: 100%;
  /* background: lightgreen; */
}

#name {
   width: 100%;
 }

#email {
  width: 100%;
 }

.button-container {
  text-align: center;
  padding-top: 8px;
}
button {
  border: none;
  width: 20%;
  padding: 10px;
  border-radius: 5px;
  background:  #296CF2;
  font-weight: 500;
  color: rgb(207, 207, 207);
  /* transition: .2s; */
}

button:hover {
  height: 40px;
  width: 21%;
  margin-bottom: -2px;
  /* background: rgb(236, 200, 203); */
  /* font-weight: 500; */
  /* color: rgb(73, 100, 100) */
  color: black;
}








`

export default ContactDiv;