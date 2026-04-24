import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <Link href="#" className={`${className} flex items-center gap-3 py-3 px-6 rounded-sm bg-primary w-fit font-semibold text-lg text-white`}>
      {children}
    </Link>
  );
}
