import Image from "next/image";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="relative">
      <Image
        src="/hero-image.png"
        alt="Hero Image"
        className="w-screen h-[511px]"
        height={511}
        width={1920}
      />

      <main className="absolute top-0 left-0">
        <p>WHAT WE DO</p>

        <div>
          <h1>Training and Development</h1>
          <p>
            Our comprehensive range of programs and resources is designed to
            enhance skills, broaden knowledge, and propel careers forward in
            today&apos;s ever-evolving landscape.{" "}
          </p>
        </div>

        <Button>Book a Consultation</Button>
      </main>
    </section>
  );
}
