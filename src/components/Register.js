import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../styleSheets/login.css";
import "../styleSheets/regiter.css";
import { useState } from "react";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { icons } from "react-icons";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paswword, setPassword] = useState("");

  const [state, setstate] = useState(false);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name: name,
    email: email,
    password: paswword,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const singin = () => {
    fetch("http://localhost:3000/api/user/create", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const toggleBtn = () => {
    setstate((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    console.log("name" + data.name)
    console.log("EMAIL: " + data.email);
    console.log("PASSWORD: " + data.password);
    navigate("/register", { replace: true });
  };

  const onNavigateLogin = () => {
    navigate("/login", { replace: true });
    console.log(" entre  onNavigateLogin");
  };

  const aa = () => {
    console.log("entre");
    if (toggleBtn == 123456789) {
      console.log("Simon");
    } else {
      console.log("nel");
    }
  };

  return (
    <div className="mx-1  container-regitrarUsuario">
      <div className="py-5 px-5">
        <div className="text-center px-5">
          <h1 className="th">Register here</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              className="imput-registro mb-4"
              placeholder="Enter your name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          {errors.password && (
            <span className="text-white text-bg-danger">name is required</span>
          )}
          <div>
            <input
              type="text"
              name="email"
              className="imput-registro mb-4"
              placeholder="Enter your email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-white text-bg-danger">Email required</span>
            )}
          </div>
          <div>
            <input
              type={state ? "text" : "password"}
              name="password"
              placeholder="enter your password"
              className=" btn-inicioSecion"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-white text-bg-danger">
                Password is required
              </span>
            )}
            <button className="btn-passworddd" onClick={toggleBtn}>
              {state ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
          <div className="d-grid gap-2 mx-auto pt-2">
            <input
              type="submit"
              value="Sign up"
              className="btn-regiterHere-singUp"
              onClick={singin}
            />
          </div>
        </form>
        <div className="container text-center pt-4">
          <p>
            Do you already have an account?{" "}
            <span
              className="pregunta-restrate fw-bold pointer"
              onClick={onNavigateLogin}
            >
              Log in
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
