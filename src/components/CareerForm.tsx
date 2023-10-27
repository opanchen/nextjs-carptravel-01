"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import ReactInputMask from "react-input-mask";
import { FormErrorMessage } from "@components";

interface IFormInput {
  fullName: string;
  email: string;
  position: string;
  phone: string;
  message: string;
  isConfirmed: boolean;
}

const CareerForm: React.FC = () => {
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
      className="relative flex tablet:inline-flex flex-col gap-[16px]"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex flex-col tablet:flex-row gap-[16px] tablet:gap-[20px]">
        <div className="flex flex-col gap-[16px] tablet:w-[222px] desktop:w-[290px]">
          <label
            className={`form-label text-form-label ${
              errors.fullName && "text-red"
            }`}
          >
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

          <label
            className={`form-label text-form-label ${
              errors.email && "text-red"
            }`}
          >
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

          <label
            className={`form-label text-form-label ${
              errors.position && "text-red"
            }`}
          >
            Position
            <input
              {...register("position", {
                required: "Position is required",
              })}
              type="text"
              aria-invalid={errors.position ? "true" : "false"}
              placeholder="Movie maker"
              className={`form-input pl-[8px] grow text-input ${
                errors.position && "text-red caret-white"
              }`}
            />
            {errors.position?.message && (
              <FormErrorMessage message={errors.position.message} />
            )}
          </label>

          <label
            className={`form-label text-form-label ${
              errors.phone && "text-red"
            }`}
          >
            Phone
            <div className="bg-gray-light flex items-center gap-[6px] pl-[8px]">
              <span className="inline-block shrink-0 text-white text-[13px] desktop:text-[20px] font-extralight leading-[1.846] desktop:leading-[1.2] text-justify">
                + 38
              </span>

              <ReactInputMask
                mask={"(999) 99 99 999"}
                alwaysShowMask={false}
                maskPlaceholder={""}
                {...register("phone", {
                  required: "Phone is required",
                  minLength: {
                    value: 15,
                    message: "Incorrect phone",
                  },
                  maxLength: {
                    value: 15,
                    message: "Incorrect phone",
                  },
                })}
                type="tel"
                aria-invalid={errors.phone ? "true" : "false"}
                placeholder="(097) 12 34 567"
                className={`form-input form-input-phone grow text-input ${
                  errors.phone && "text-red caret-white"
                }`}
              />
            </div>
            {errors.phone?.message && (
              <FormErrorMessage message={errors.phone.message} />
            )}
          </label>
        </div>

        <label className="form-label text-form-label">
          Message
          <textarea
            {...register("message")}
            className={`form-input resize-none grow text-input h-[196px] tablet:h-[228px] tablet:w-[221px] desktop:h-[268px] desktop:w-[292px] px-[9px] `}
          />
        </label>
      </div>

      <label className="flex gap-[8px] tablet:w-[222px] desktop:w-[290px] text-[12px] font-extralight leading-[1.833] desktop:leading-[2.0]">
        <input
          {...register("isConfirmed", {
            required: true,
          })}
          type="checkbox"
          className="confirmation-checkbox absolute opacity-0 w-0 h-0"
        />
        <span
          className={`checkmark relative inline-block shrink-0 w-[22px] desktop:w-[24px] h-[22px] desktop:h-[24px] border cursor-pointer`}
        ></span>
        <span>
          I confirm my consent to the processing of personal data.{" "}
          {errors.isConfirmed && <span className="text-red">*</span>}
        </span>
      </label>

      <button
        className="tablet:absolute tablet:right-0 tablet:bottom-[16px] desktop:bottom-[20px]  self-end w-[82px] desktop:w-[87px] text-[30px] desktop:text-32 font-medium uppercase"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default CareerForm;
