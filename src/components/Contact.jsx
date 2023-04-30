import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import TextArea from "./TextArea";

const Contact = () => {
  const validate = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Email is invalid").required("Required"),
    message: Yup.string().required("Required"),
  });
  return (
    <div
      name="contact"
      className="w-full pt-[100px] text-gray-300 bg-[#0a192f] flex justify-center items-center p-4"
    >
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={validate}
        // onSubmit={(values) => {
        //   const formData = new FormData();
        //   Object.entries(values).forEach(([key, value]) => {
        //     formData.append(key, value);
        //   });
        //   fetch("https://getform.io/f/dc135e7d-8317-4e8a-a369-c005a4c1cc94", {
        //     method: "POST",
        //     body: formData,
        //     headers: {
        //         "Accept": "application/json",
        //     },
        // })
        // .then(response => console.log(response))
        // .catch(error => console.log(error))
        // }}
      >
        {(formik) => (
          <Form className="flex flex-col max-w-[600px] w-full">

            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                Contact
              </p>
            </div>

            <div className="py-6">
              <ul className="flex justify-center">
                <li className="hover:scale-150 px-2 duration-300">
                  <a href="https://www.linkedin.com/in/priyanshu-pandit-b8415b220 ">
                    <FaLinkedin size={30} />
                  </a>
                </li>
                <li className="hover:scale-150 px-2 duration-300">
                  <a href="https://github.com/Priyanshu255/">
                    <FaGithub size={30} />
                  </a>
                </li>
                <li className="hover:scale-150 px-2 duration-300">
                  <a href="mailto:priyanshu4443@gmail.com">
                    <HiOutlineMail size={30} />
                  </a>
                </li>
                <li className="hover:scale-150 px-2 duration-300">
                  <a href="http://">
                    <BsFillPersonLinesFill size={30} />
                  </a>
                </li>
              </ul>
            </div>

            <TextField name = "name" type = "text" placeholder="Name"/>
            <TextField name = "email" type = "email" placeholder="Email"/>
            <TextArea name = "message" type = "text" rows = "10" placeholder="Message"/>

            <button type="submit" className="text-white shadow-lg shadow-[#040c16] border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
              Let's Colloborate
            </button>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;


{/* <form
        ref={formref}
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
        </div>
        <div className="py-6">
          <ul className="flex justify-center">
            <li className="hover:scale-150 px-2 duration-300">
              <a href="https://www.linkedin.com/in/priyanshu-pandit-b8415b220 ">
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="hover:scale-150 px-2 duration-300">
              <a href="https://github.com/Priyanshu255/">
                <FaGithub size={30} />
              </a>
            </li>
            <li className="hover:scale-150 px-2 duration-300">
              <a href="mailto:priyanshu4443@gmail.com">
                <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="hover:scale-150 px-2 duration-300">
              <a href="http://">
                <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="p-2 bg-[#ccd6f6] shadow-sm shadow-[#040c16]"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="my-4 p-2 bg-[#ccd6f6] shadow-lg shadow-[#040c16]"
        />
        <textarea
          name="user_message"
          placeholder="Message"
          rows="10"
          className="p-2 bg-[#ccd6f6] shadow-lg shadow-[#040c16]"
        />
        <button className="text-white shadow-lg shadow-[#040c16] border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Colloborate
        </button>
    </form>
*/}