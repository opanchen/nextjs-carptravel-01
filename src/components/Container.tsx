type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="mx-auto px-[20px] tablet:px-[32px] desktop:px-[24px] mobile-up:w-[480px] tablet:w-[768px] desktop:w-[1280px]">
      {children}
    </div>
  );
};

export default Container;
