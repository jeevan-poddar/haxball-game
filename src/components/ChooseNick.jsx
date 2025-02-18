import React from "react";
import { useForm } from "react-hook-form";

const ChooseNick = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    props.setIsVisible(false);
  };
  return (
    <div className={`containerNick ${props.isVisible ? "" : "hide"}`}>
      <img className="logo_play" src="/img/logo.png" alt="" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formHeading">Choose Nickname</div>
        <hr className="horizontalLine" />
        <label className="nickname-lable" htmlFor="nickname">
          Nickname:
          <input
            autoComplete="off"
            {...register("nickname", {
              required: { value: true, message: "Please Enter a nickname" },
              minLength: {
                value: 3,
                message: "The nickname must be at least 3 characters long",
              },
            })}
            type="text"
            placeholder="Enter Nickname"
          />
        </label>
        {errors.nickname && (
          <div className="nickname_error">{errors.nickname.message}</div>
        )}
        <input
          className="submit_btn"
          disabled={isSubmitting}
          type="submit"
          value="OK"
        />
      </form>
    </div>
  );
};

export default ChooseNick;
