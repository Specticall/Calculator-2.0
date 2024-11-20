import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/ui/Input";
import TopicInput from "../components/support/TopicInput";
import { cn } from "../utils/lib";
import { useState } from "react";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { useNavigate } from "react-router-dom";

type SupportValues = {
  firstName: string;
  lastName: string;
  email: string;
  topic: "General" | "Bug";
  description: string;
};

export default function Support() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<SupportValues>();

  const onSubmit: SubmitHandler<SupportValues> = async (value) => {
    console.log(value);
    setIsSubmitting(true);

    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    setIsSubmitting(false);
    navigate("/success");
  };

  return (
    <div className="bg-black/90 min-h-screen w-full grid place-items-center">
      <div className="bg-black p-12 rounded-lg max-w-[40rem]">
        <div className="border-b-[1px] border-slate-500 w-full pb-6 mb-4">
          <h1 className="text-white text-3xl">Support Ticket Form</h1>
          <p className="text-white/60 mt-3 leading-[200%]">
            Please enter your contact details and a brief description of the
            issue you are experiencing to create a support ticket.
          </p>
        </div>
        <form className="grid gap-6 mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p className="col-span-2 text-white mb-2">
              Name <span className="text-red-300">*</span>
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Input
                placeholder="First Name"
                {...register("firstName", {
                  required: "This field can't be empty",
                })}
                className="w-full"
                errorMessage={errors.firstName?.message}
              />
              <Input
                placeholder="Last Name"
                {...register("lastName", {
                  required: "This field can't be empty",
                })}
                className="w-full"
                errorMessage={errors.lastName?.message}
              />
            </div>
          </div>
          <div>
            <p className="col-span-2 text-white mb-2">
              Email <span className="text-red-300">*</span>
            </p>

            <Input
              placeholder="Email"
              {...register("email", {
                required: "This field can't be empty",
              })}
              className="w-full"
              errorMessage={errors.email?.message}
            />
          </div>
          <Controller
            name="topic"
            control={control}
            render={({ field: { onChange } }) => {
              return <TopicInput onSelect={onChange} />;
            }}
          />
          <div>
            <p className="col-span-2 text-white mb-2">
              Description <span className="text-white/50">(Optional)</span>
            </p>

            <textarea
              placeholder="Description Report"
              {...register("description", {
                required: "This field can't be empty",
              })}
              className={cn(
                "w-full resize-none bg-black border-white/50 border rounded-md min-h-40 p-4 text-white",
                errors.description && "border-red-400"
              )}
            ></textarea>
            {errors.description?.message && (
              <div className="flex gap-2 items-center mt-2">
                <i className="text-red-400 bx bxs-error-circle leading-[150%]"></i>
                <p className="text-red-400 leading-[150%]">
                  {errors.description?.message}
                </p>
              </div>
            )}
          </div>
          <button
            className={cn(
              "text-white disabled:bg-gray-600 w-full px-8 py-3 rounded-md mt-2 transition-all duration-200 cursor-pointer flex gap-4 items-center justify-center",
              isValid && "bg-yellow-500 hover:bg-yellow-400 "
            )}
            disabled={isSubmitting || !isValid}
          >
            Send
            {isSubmitting && <LoadingSpinner />}
          </button>
        </form>
      </div>
    </div>
  );
}
