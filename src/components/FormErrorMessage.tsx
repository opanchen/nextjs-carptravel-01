import { ErrorIcon } from "@components";

type Props = {
  message: string;
};

const FormErrorMessage: React.FC<Props> = ({ message }: Props) => {
  return (
    <div className="absolute right-0 top-[100%] flex items-center gap-[4px]">
      <ErrorIcon />
      <p
        role="alert"
        className="text-[12px] font-extralight leading-[2.0] tracking-[2.4px] text-red"
      >
        {message}
      </p>
    </div>
  );
};

export default FormErrorMessage;
