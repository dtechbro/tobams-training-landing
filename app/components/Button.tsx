type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`${className} flex items-center gap-3 py-3 px-6 rounded-sm bg-primary w-fit font-semibold text-sm lg:text-lg text-white`}
    >
      {children}
    </button>
  );
}
