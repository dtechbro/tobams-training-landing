import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <Link href="#" className={`${className} flex items-center py-4 px-3 rounded-lg`}>
      {children}
    </Link>
  );
}
