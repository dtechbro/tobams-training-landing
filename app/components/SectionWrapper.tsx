type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionWrapper({
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section className={className}>
      <main className="max-w-[1312px] mx-auto px-4">{children}</main>
    </section>
  );
}
