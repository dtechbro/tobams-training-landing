import Image from "next/image";

export default function ManagementDevProgram() {
  const programBenefits = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organisational Culture",
    "Sustainable Growth",
  ];

  return (
    <section className="py-16">
      <main className="section flex items-center bg-primary p-10 rounded-[20px] text-white gap-12">
        <Image
          src="/mgt-dev-program.png"
          alt="image-for-mgt-training"
          width={500}
          height={500}
          className="w-[592px]"
        />

        <div className="flex flex-col gap-4 w-[592px]">
          <h2 className="headings">Management Development Program</h2>

          <p className="text-lg">
            Tobams Group offers a comprehensive Management Development Program
            designed to equip corporate organisations with the high -performing
            leaders they need to thrive. <br /> <br /> Our program includes
            workshops, seminars, coaching sessions, online courses, and
            experiential learning opportunities designed to improve leadership,
            strategic thinking, communication, and other essential managerial
            competencies for corporate organisations.
          </p>

          <ul className="py-2 px-4 flex flex-col gap-6">
            {programBenefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-2 bg-[#8F6182] py-1 px-2 rounded-lg"
              >
                <Image
                  src="blazing.svg"
                  alt="blazing"
                  width={12}
                  height={16}
                  className="text-white"
                />
                <p className="text-lg font-semibold">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
}
