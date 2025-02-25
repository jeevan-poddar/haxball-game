import React from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/ChooseNick.module.css";

const ChooseNick = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = () => {
    console.log(props.nickname);
    props.setPlayActiveTab("server");
  };
  return (
    <div
      className={`${styles.containerNick} ${
        props.playActiveTab === "chooseNick" ? "" : styles.hide
      }`}
    >
      <img className={styles.logo_play} src="/img/logo.png" alt="" />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formHeading}>Choose Nickname</div>
        <hr className={styles.horizontalLine} />
        <label className={styles.nicknameLable} htmlFor="nickname">
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
            value={props.nickname}
            onChange={(e) => props.setNickname(e.target.value)}
          />
        </label>
        {errors.nickname && (
          <div className={styles.nickname_error}>{errors.nickname.message}</div>
        )}
        <input
          className={`${styles.submit_btn} ${"button"}`}
          disabled={isSubmitting}
          type="submit"
          value="OK"
        />
      </form>
    </div>
  );
};

export default ChooseNick;
