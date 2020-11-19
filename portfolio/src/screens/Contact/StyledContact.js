import styled from 'styled-components';

const ContactDiv = styled.div`
display: flex;

.contact-blurb {

}

.form-main {
  margin: 0 auto;
}
.form {
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 300px;
}


.input {
  height: 50px;
}

textarea {
  resize: none;
}
.top-row {
  display: flex;
  width: 100%;
  background: lightgreen;
}

#name {
   width: 100%;
 }

#email {
  width: 100%;
 }







`

export default ContactDiv;