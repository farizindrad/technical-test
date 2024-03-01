import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

export default function Formulir() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "nama":
        setNama(value);
        setError((prevError) => ({
          ...prevError,
          nama:
            value.trim() === ""
              ? ""
              : /^[A-Za-z]+$/.test(value)
              ? ""
              : "Only contains Alphabet",
        }));
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        setError((prevError) => ({
          ...prevError,
          phoneNumber:
            value.trim() === ""
              ? ""
              : /^\d+$/.test(value)
              ? ""
              : "Only contains number",
        }));
        break;
      case "email":
        setEmail(value);
        setError((prevError) => ({
          ...prevError,
          email:
            value.trim() === ""
              ? ""
              : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
              ? ""
              : "Invalid E-mail",
        }));
        break;
      case "message":
        setMessage(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "postCode":
        setPostCode(value);
        setError((prevError) => ({
          ...prevError,
          postCode:
            value.trim() === ""
              ? ""
              : /^\d{5}(?:[-\s]\d{4})?$/.test(value)
              ? ""
              : "Must be a 5-digit number",
        }));
        break;
      default:
        break;
    }
  };
  //   const handleChange = (e) => {
  //     setNama(e.target.value);
  //     if (e.target.value.trim() === "") {
  //       setError("");
  //     } else if (!/^[A-Za-z]+$/.test(e.target.value)) {
  //       setError("Nama harus berupa huruf");
  //     } else {
  //       setError("");
  //     }
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      const formData = {
        nama,
        email,
        phoneNumber,
        address,
        postCode,
        message,
      };
      console.log(formData);
      navigate("/data", { state: { formData } });
    } else {
      alert("Please fill out the form");
    }
  };

  const validateForm = () => {
    return (
      !error.nama &&
      !error.email &&
      !error.phoneNumber &&
      !error.address &&
      !error.postCode &&
      message.length <= 200
    );
  };

  return (
    <form
      className="bg-slate-200 flex flex-col items-center"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col md:w-1/2 m-4 w-full p-4">
        <Input
          name="nama"
          type="text"
          value={nama}
          pattern="[A-Za-z]+"
          placeholder="Your Name"
          error={error.nama}
          handleChange={handleChange}
        />
        <Input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          pattern="[0-9]+"
          placeholder="Your Phone Number"
          error={error.phoneNumber}
          handleChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="Your E-mail"
          error={error.email}
          handleChange={handleChange}
        />
        <Input
          type="text"
          name="address"
          value={address}
          placeholder="Your Address"
          handleChange={handleChange}
        />
        <Input
          type="text"
          name="postCode"
          pattern="[0-9]{5}"
          value={postCode}
          placeholder="Your Post Code"
          handleChange={handleChange}
          error={error.postCode}
        />
        <div className="mt-2 mb-6 rounded-[20px] relative">
          <textarea
            className="w-full rounded-[20px] p-2 border-solid border-2 border-sky-500"
            name="message"
            value={message}
            onChange={handleChange}
            placeholder="Message (max 200 character)"
            maxLength={200}
          />
        </div>
        <button
          className="w-full text-sm sm:text-xl my-2 p-1 bg-yellow-200 rounded-[20px] hover:bg-black hover:text-white"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
