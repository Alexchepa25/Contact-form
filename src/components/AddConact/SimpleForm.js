import React from "react";
import style from "./style";
import Greetings from './Greetings';
import FirstNameField from './FirstNameField';
import LastNameField from './LastNameField';
import EmailField from "./EmailField";
import LocationField from "./LocationField";
import PhoneField from "./PhoneField";
import PhotoField from "./PhotoField ";
import TextAreaField from "./TextAreaField";

class SimpleForm extends React.Component {
  state = {
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    location: "",
    locationError: "",
    email: "",
    emailError: "",
    phone: "",
    phoneError: "",
    textarea: "",
    textareaError: "",

    photo: "",
    imageData: ''

  };

  validateName = name => {
    //const regex = /[A-Za-z]{3,}/;  ^[а-яА-ЯёЁa-zA-Z0-9]+$ 
    const regex = /^[А-ЯЁA-Z][а-яА-ЯёЁa-zA-Z]{2,10}$/;
    return !regex.test(name)
      ? "The name must contain at least three letters. Numbers and special characters are not allowed."
      : "";
  };

  // First Name
  onFirstNameBlur = () => {
    const { firstName } = this.state;
    const firstNameError = this.validateName(firstName);
    return this.setState({ firstNameError });
  };

  onFirstNameChange = event =>
    this.setState({
      firstName: event.target.value
    });

  // Last Name
  onLastNameBlur = () => {
    const { lastName } = this.state;
    const lastNameError = this.validateName(lastName);
    return this.setState({ lastNameError });
  };

  onLastNameChange = event =>
    this.setState({
      lastName: event.target.value
    });

  // Location
  validateLocation = location => {
    //const regex = /[A-Za-z]{3,}/;  ^[а-яА-ЯёЁa-zA-Z0-9]+$ 
    const regex = /^[А-ЯЁA-Z][а-яА-ЯёЁa-zA-Z0-9]{2,100}$/;
    return !regex.test(location)
      ? "The Location must contain at least three letters."
      : "";
  };

  onLocationBlur = () => {
    const { location } = this.state;
    const locationError = this.validateLocation(location);
    return this.setState({ locationError });
  };

  onLocationChange = event =>
    this.setState({
      location: event.target.value
    });

  // Phone
  validatePhone = phone => {
    //const regex = /[A-Za-z]{3,}/;  ^[а-яА-ЯёЁa-zA-Z0-9]+$ 
    // /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i

    // ^[\d|\+|\(]+[\)|\d|\s|-]*[\d]$
    const regex = /^[\d|\+]+[|\-|\(|\)|\d|\s|-]*[\d]{3,20}$/;
    return !regex.test(phone)
      ? "The phone must contain at least three nambers."
      : "";
  };

  onPhoneBlur = () => {
    const { phone } = this.state;
    const phoneError = this.validatePhone(phone);
    return this.setState({ phoneError });
  };

  onPhoneChange = event =>
    this.setState({
      phone: event.target.value
    });

  // Email
  validateEmail = email => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email) {
      return " Please enter Email ";
    } else {
      return !regex.test(email)
        ? "INVALID email ADDRESS!"
        : "";
    };
  };

  onEmailBlur = () => {
    const { email } = this.state;

    const emailError = this.validateEmail(email);

    return this.setState({ emailError });
  };

  onEmailChange = event =>
    this.setState({
      email: event.target.value
    });

  // Text Area 
  validateTextArea = textarea => {
    const regex = /^[а-яА-ЯёЁa-zA-Z0-9\s\D]{10,300}$/;
    return !regex.test(textarea)
      ? "This text field must contain at least ten letters and no more than three hundred."
      : "";
  };

  onTextAreaBlur = () => {
    const { textarea } = this.state;
    const textareaError = this.validateTextArea(textarea);
    return this.setState({ textareaError });
  };

  onTextAreaChange = event =>
    this.setState({
      textarea: event.target.value
    });

  // PhotoField
  onPhotoChange = (event, fieldName) => {
    if (fieldName && fieldName == 'photo') {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.setState({ imageData: e.target.result });
        }
        reader.readAsDataURL(event.target.files[0]);
      }
      this.setState({
        photo: event.target.value
      });
    }
  }






  render() {
    const { firstNameError, firstName, lastName, lastNameError, email, emailError, location, locationError, phone, phoneError, photo, textarea, textareaError } = this.state;

    return (
      <div style={style.wrapper}>
        <span style={style.spanHello}> Hello Friends! </span><br />
        <div style={style.formWrapper}>
          <h1 style={style.h1}>Add New Contact</h1>

          <div>          
            <img  style={style.img} src={this.state.imageData} />
          </div>

          <div style={style.form}>

            <PhotoField onChange={(event) => { this.onPhotoChange(event, 'photo') }}
                onBlur={this.onPhotoBlur} />

            <FirstNameField onChange={this.onFirstNameChange}
              onBlur={this.onFirstNameBlur}
              error={firstNameError} />

            <LastNameField onChange={this.onLastNameChange}
              onBlur={this.onLastNameBlur}
              error={lastNameError} />

            <LocationField onChange={this.onLocationChange}
              onBlur={this.onLocationBlur}
              error={locationError} />

            <PhoneField onChange={this.onPhoneChange}
              onBlur={this.onPhoneBlur}
              error={phoneError} />

            <EmailField onChange={this.onEmailChange}
              onBlur={this.onEmailBlur}
              error={emailError} />

            <TextAreaField onChange={this.onTextAreaChange}
              onBlur={this.onTextAreaBlur}
              error={textareaError} />

          </div>

          <div>          
            <img  style={style.imgBottom} alt='' src={this.state.imageData} />
          </div>

          <div style={style.divList}>
            {/* <button onClick={addPost}>Add post</button> */}
            <button style={{...style.button, ...style.buttonSave}} onClick=''>SAVE</button>
            <button style={{...style.button, ...style.buttonDelete}} onClick=''>DELETE</button>           
          </div>
          <div style={style.divList}>           
            <button style={{...style.button, ...style.buttonList}} onClick=''>LIST</button>
          </div>

          
         
          <Greetings firstName={firstName} lastName={lastName} email={email} location={location} phone={phone} photo={photo} textarea={textarea} />
        </div>
      </div>
    );
  }
}

export default SimpleForm;
