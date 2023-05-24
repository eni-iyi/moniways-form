import { useState, useEffect } from "react";
import "./Form.css";
import { toast } from "react-toastify";
import * as Yup from "yup";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        setErrors({});
      })
      .catch((validationErrors) => {
        const errorsObj = {};
        validationErrors.inner.forEach((error) => {
          errorsObj[error.path] = error.message;
        });
        setErrors(errorsObj);
      });
  }, [formData, validationSchema]);

  const handle_input_change = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length > 0) {
        toast.warning("Please fix all form errors");
        return;
      }
    // Display success message or perform further actions
    toast.success("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const { name, email, message } = formData;

  return (
    <div className="formdiv">
      <div className="formleft">
        <h1>CONTACT US</h1>
        <p>We will like to hear from you</p>
        <img
          className="image"
          src="./animation_500_li1nqkaj.gif"
          alt=""
        />
      </div>

      <form className="formright">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handle_input_change}
        />

        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handle_input_change}
        />

        <textarea
          rows="6"
          cols="34"
          name="message"
          placeholder="Type your message here"
          value={message}
          onChange={handle_input_change}
        ></textarea>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
