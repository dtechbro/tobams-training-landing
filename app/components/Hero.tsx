import Image from "next/image";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="w-full h-[511px] overflow-hidden relative">
        <Image
          src="/hero-image.jpg"
          alt="Hero Image"
          className="object-cover object-center w-full h-full"
          fill
          // sizes="(max-width: 1920px) 100vw, 1920px"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <main className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <p className="py-3 px-12 bg-white/10 rounded-[100px]">WHAT WE DO</p>

            <div className="flex flex-col items-center gap-4">
              <h1 className="font-bold text-[56px]">
                Training and Development
              </h1>
              <p className="font-semibold text-lg w-[1077px]">
                Our comprehensive range of programs and resources is designed to
                enhance skills, broaden knowledge, and propel careers forward in
                today&apos;s ever-evolving landscape.{" "}
              </p>
            </div>
          </div>

          <Button>Book a Consultation</Button>
        </div>
      </main>
    </section>
  );
}
