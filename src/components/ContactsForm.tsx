"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { FormErrorMessage } from "@components";

interface IFormInput {
  fullName: string;
  email: string;
  message: string;
}

const ContactsForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const handleFormSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("SUBMIT: ", JSON.stringify(data));
    reset();
  };

  return (
    <form
      className="flex desktop:inline-flex flex-col tablet:flex-row desktop:flex-col gap-[24px] tablet:gap-[20px] desktop:gap-[42px] desktop:w-[608px]"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex flex-col desktop:flex-row gap-[24px] tablet:gap-[28px] desktop:gap-[20px] tablet:w-[220px] desktop:w-auto">
        <label className="form-label text-form-label desktop:w-[292px]">
          Full Name
          <input
            {...register("fullName", {
              required: "Name is required",
              pattern: {
                value: /^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$/,
                message: "Incorrect name",
              },
              minLength: {
                value: 3,
                message: "Incorrect name",
              },
              maxLength: {
                value: 80,
                message: "Incorrect name",
              },
            })}
            type="text"
            aria-invalid={errors.fullName ? "true" : "false"}
            placeholder="John Smith"
            className={`form-input pl-[8px] grow text-input ${
              errors.fullName && "text-red caret-white"
            }`}
          />
          {errors.fullName?.message && (
            <FormErrorMessage message={errors.fullName.message} />
          )}
        </label>

        <label className="form-label text-form-label desktop:w-[292px]">
          E-mail
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email",
              },
            })}
            type="email"
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="johnsmith@email.com"
            className={`form-input pl-[8px] grow text-input ${
              errors.email && "text-red caret-white"
            }`}
          />
          {errors.email?.message && (
            <FormErrorMessage message={errors.email.message} />
          )}
        </label>
      </div>

      <div className="flex flex-col gap-[16px] desktop:gap-[24px] tablet:grow">
        <label className="form-label text-form-label">
          Message
          <textarea
            {...register("message", {
              required: "Message is required",
            })}
            aria-invalid={errors.message ? "true" : "false"}
            className={`form-input resize-none grow text-input h-[280px] tablet:h-[220px] desktop:h-[174px] px-[9px] `}
          />
          {errors.message?.message && (
            <FormErrorMessage message={errors.message.message} />
          )}
        </label>

        <button
          className="self-end w-[82px] desktop:w-[87px] text-[30px] desktop:text-32 font-medium uppercase"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactsForm;
