const ProgressBar = ({
  title,
  percent,
}: {
  title: string;
  percent: number;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="uppercase">{title}</span>
      <div
        className={`h-[5px] flex items-center rounded-full w-[100%] bg-[#ccc]`}
      >
        <div
          className={`h-[10px] bg-primary rounded-full transition-all`}
          style={{
            width: `${percent}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
