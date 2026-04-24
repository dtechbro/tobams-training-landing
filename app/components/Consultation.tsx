import Image from "next/image";
import Button from "./Button";

export default function Consultation() {
  const trainingPros = [
    {
      title: "Expert-Led Learning",
      details:
        "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
    },
    {
      title: "Comprehensive Curriculum",
      details:
        "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
    },
    {
      title: "Interactive Workshops",
      details:
        "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
    },
    {
      title: "Global Recognition",
      details:
        "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
    },
  ];
  return (
    <>
      <section className="my-10 bg-[#5712441A]">
        <main className="section py-12 flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="headings text-primary">Training The Consultant</h2>
              <p className="text-lg font-semibold text-primary">
                Maximise Your Potential as a Certified Trainer:
              </p>
            </div>

            <p>
              With the help of our Training Consultants program, take a
              revolutionary step toward becoming a distinguished certified
              training consultant. Learn from professionals in the field,
              immerse yourself in a thorough curriculum, and hone your training
              methods through interactive workshops. Participating in our
              program will enable you to gain expertise in diverse courses while
              also developing the abilities to mentor and encourage others in
              their career advancement.
            </p>

            <div className="grid grid-cols-2 bg-primary text-white p-6 gap-5 rounded-lg">
              {trainingPros.map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <h3 className="font-bold">{item.title}</h3>
                  <p>{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          <Button className="mt-8">
            <p>Learn More</p>
            <Image
              src="/arrow-up-right.svg"
              alt="Arrow"
              width={24}
              height={24}
            />
          </Button>
        </main>
      </section>

      <section className="flex items-center justify-center">
        <main className="bg-primary w-[1134px] rounded-lg py-8 flex flex-col items-center justify-center text-white text-center gap-8">
          <p>
            Want to accelerate professional growth and development at your
            organisation? <br /> See how we can help.
          </p>

          <Button className="text-primary bg-white">Book a Consultation</Button>
        </main>
      </section>
    </>
  );
}
