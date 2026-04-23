import Image from "next/image";

export default function ManagementDevProgram() {
  const programBenefits = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organisational Culture",
    "Sustainable Growth",
  ];

  return (
    <section>
      <main>
        <Image />
        
        <div>
          <h2>Management Development Program</h2>

          <p>
            Tobams Group offers a comprehensive Management Development Program
            designed to equip corporate organisations with the high -performing
            leaders they need to thrive. <br /> Our program includes workshops,
            seminars, coaching sessions, online courses, and experiential
            learning opportunities designed to improve leadership, strategic
            thinking, communication, and other essential managerial competencies
            for corporate organisations.
          </p>

          <ul>
            {programBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
}
