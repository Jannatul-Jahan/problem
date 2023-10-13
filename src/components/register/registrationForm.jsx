import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import useRegistration from '../../hooks/useRegistration';
import "./registrationForm.css";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      role: "",
    },
  });
    
  const { registrationData, error, registerUser } = useRegistration(); 
  
  const handlerOnSubmit = (formData) => {
    registerUser(formData);
    // navigate("/login");
  };

  const diffToast = () =>{
    toast("Registration Successfull!");
  }

  return (
    <>
    <div>
      <h1 style={{textAlign: 'center'}}>Registration Form</h1>
      <form onSubmit={handleSubmit(handlerOnSubmit)} className="form-container">
        <div>
          <h4>Username</h4>
          <Controller
            name="name"
            control={control}
            rules={{
              required: "name is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Maximum length must be 20",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter name"
                {...field}
                style={{ border: errors.username ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.name && <h5>{errors.name.message}</h5>}
        </div>
        <div>
          <h4>Email</h4>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",

              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <input placeholder="Enter email" {...field} />
            )}
          />
        </div>

        <div>
          <h4>Password</h4>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "password is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Maximum length must be 20",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Password"
                type="password"
                {...field}
                style={{ border: errors.password ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.password && <h5>{errors.password.message}</h5>}
        </div>

        <div>
          <h4>Confirm Password</h4>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "Confirm Password is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Max length must be 20",
              },
              validate: (value) =>
                value === watch("password") ||
                "Confirm password should match given password",
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Password"
                type="password"
                {...field}
                style={{
                  border: errors.confirmPassword ? "1px solid red" : "",
                }}
              />
            )}
          />
          {errors.confirmPassword && <h5>{errors.confirmPassword.message}</h5>}
        </div>
        <div>
        <h4>Address</h4>
          <Controller
            name="address"
            control={control}
            rules={{
              required: "Address is required",
              minLength: {
                value: 4,
                message: "Minimum length must be 4",
              },
              maxLength: {
                value: 30,
                message: "Max length must be 30",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter address"
                type="address"
                {...field}
                style={{ border: errors.address ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.address && <h5>{errors.address.message}</h5>}
        </div>
        <div>
        <h4>Role</h4>
          <Controller
            name="role"
            control={control}
            // rules={{
            //   required: "Role is required",
            // }}
            render={({ field }) => (
              <input
                placeholder="Enter role"
                type="role"
                {...field}
                style={{ border: errors.role ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.role && <h5>{errors.role.message}</h5>}
        </div>

        <br></br>
        <button type="submit" className="submit-button" onClick={diffToast}>Submit</button>
      </form>
    </div>
    <ToastContainer/>
    </>
  );
};

export default RegistrationForm;