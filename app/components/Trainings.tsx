import Image from "next/image";

export default function Trainings() {
  const corporateTraining = [
    "Leadership Training",
    "Strategic Planning and Implementation",
    "Project Management",
    "Sustainability Training",
    "Customised Training",
  ];

  const individualTraining = [
    "Leadership Development",
    "Soft Skills Development",
    "Industry Specific Knowledge",
    "Technical Skills Enhancement",
    "Time Management and Productivity",
    "Career Development",
  ];

  const capacityDevelopment = [
    "Tailored Training Programs",
    "Expert-Led Workshops",
    "Personalized Mentorship",
    "Technical Skills Enhancement",
    "Collaborative Learning Environment",
    "Ongoing Support and Resources",
  ];

  const wrapperStyle =
    "flex flex-col lg:flex-row lg:items-center justify-between h-full gap-6";
  // const headingStyle = "headings"
  const paragraph = "text-subdue text-lg";
  const listStyle = "flex gap-3.5 text-lg text-subdue";

  return (
    <section className="bg-white">
      <main className="section flex flex-col gap-6 lg:gap-24 py-16">
        {/* division for corporate training */}
        <div className={` lg:flex-row-reverse ${wrapperStyle}`}>
          <h2 className="headings lg:hidden">Corporate Training</h2>

          <Image
            src="/corporate-training.png"
            alt="Corporate Training"
            width={500}
            height={500}
            className="h-full"
          />

          <div className="w-full lg:w-[646px] flex flex-col gap-5">
            <h2 className="headings hidden lg:block">Corporate Training</h2>
            <p className="text-subdue text-lg">
              Empower your team with our customised Corporate Training programs
              designed to address the unique needs and objectives of your
              organisation. Our expert facilitators work closely with your team
              to deliver tailored learning experiences that align with your
              company&apos;s goals and values.
            </p>
            <ul className="lg:px-7.5">
              {corporateTraining.map((training) => (
                <li key={training} className={listStyle}>
                  <Image
                    src={"/blazing.svg"}
                    alt="list-icon"
                    width={12}
                    height={16}
                  />
                  <p>{training}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* division for personal training */}
        <div className={wrapperStyle}>
          <h2 className="headings lg:hidden">
            Personalised Individual Training
          </h2>

          <Image
            src="/individual-training.png"
            alt="Individual Training"
            width={500}
            height={500}
            className="h-full"
          />

          <div className="flex flex-col gap-5 w-full lg:w-[629px]">
            <h2 className="headings hidden lg:block">
              Personalised Individual Training
            </h2>
            <p className={paragraph}>
              Begin a journey of lifelong learning and professional development
              with Tobams Group&apos;s diverse range of training programs for
              individuals. From technical skills mastery to soft skills
              enhancement, our courses cover a wide spectrum of topics to meet
              the evolving needs of today&apos;s professionals.
            </p>
            <ul className="lg:px-7.5">
              {individualTraining.map((training) => (
                <li key={training} className={listStyle}>
                  <Image
                    src={"/blazing.svg"}
                    alt="list-icon"
                    width={12}
                    height={16}
                  />
                  <p>{training}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* division for capacity development */}
        <div className={`lg:flex-row-reverse ${wrapperStyle}`}>
          <h2 className="headings lg:hidden">Capacity Development</h2>

          <Image
            src="/capacity-development.png"
            alt="Capacity Development"
            width={500}
            height={500}
            className="h-full"
          />

          <div className="flex flex-col gap-5 w-full lg:w-[644px]">
            <h2 className="headings hidden lg:block">Capacity Development</h2>
            <p className={paragraph}>
              At Tobams Group, we empower individuals and organizations through
              tailored training programs, expert-led workshops, and personalized
              mentorship. We are committed to your success and growth. We are
              dedicated to providing a comprehensive suite of benefits designed
              to foster your development and success:
            </p>
            <ul className="lg:px-7.5">
              {capacityDevelopment.map((training) => (
                <li key={training} className={listStyle}>
                  <Image
                    src={"/blazing.svg"}
                    alt="list-icon"
                    width={12}
                    height={16}
                  />
                  <p>{training}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div></div>
      </main>
    </section>
  );
}
