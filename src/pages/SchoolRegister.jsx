import React, { useState } from "react";
import { emailSignUp } from "../services/firebase/emailPassSignup";

function SchoolRegister() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    address: "",
    phone: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(formData);
    const authResponse = await emailSignUp(formData.email, formData.password);

    if (authResponse.status == 200) {
      try {
        const response = await fetch("https://api.schoolapp.basecodes.co/auth/registerschool", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firebaseUser: authResponse.user,
            email: formData.email,
            password: formData.password,
            name: formData.name,
            address: formData.address,
            phone: formData.phone,
          }),
        });

        const data = await response.json();
        if (response.ok) {
          alert("Registration successful");
        } else {
          alert(`Error: ${data.message}`);
        }
      } catch (error) {
        console.error("Error registering school:", error);
        alert("An error occurred. Please try again.");
      }
    } else {
      alert(authResponse.message);
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          School APP
        </a>
        <div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Register Your School
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {[
                {
                  label: "Your email",
                  name: "email",
                  type: "email",
                  placeholder: "name@school.com",
                },
                {
                  label: "Password",
                  name: "password",
                  type: "password",
                  placeholder: "••••••••",
                },
                {
                  label: "Confirm password",
                  name: "confirmPassword",
                  type: "password",
                  placeholder: "••••••••",
                },
                {
                  label: "School Name",
                  name: "name",
                  type: "text",
                  placeholder: "School Name",
                },
                {
                  label: "School Address",
                  name: "address",
                  type: "text",
                  placeholder: "School Address",
                },
                {
                  label: "Phone",
                  name: "phone",
                  type: "text",
                  placeholder: "School Phone",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
              ))}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="termsAccepted"
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500">
                    I accept the
                    <a
                      className="font-medium text-primary-600 hover:underline"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Register
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SchoolRegister;
