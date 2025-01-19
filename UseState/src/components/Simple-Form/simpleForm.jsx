import React, { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (name === "" && email === "") {
      alert("Please fill all fields");
    } else {
      alert(`Name: ${name} \nEmail: ${email}`);
      setName("");
      setEmail("");
    }
  };

  return (
    <>
      <div className="bg-[#ff9000] h-screen w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
        >
          <h2 className="text-3xl font-semibold text-center text-black">
            Simple Form
          </h2>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameInput}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff9000] focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailInput}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff9000] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#ff9000] text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-[#ff9000] transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* {submitted && (
          <div className="mt-6 w-full max-w-md mx-auto bg-[#ff9000] text-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold text-center">Form Submitted</h1>
            <div className="mt-4 text-center">
              <p className="text-lg">Name: <span className="font-semibold">{name}</span></p>
              <p className="text-lg">Email: <span className="font-semibold">{email}</span></p>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};

export default SimpleForm;
