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
      <section>
        <main>
          <div>
            <h2>Training The Consultant</h2>
            <p>Maximise Your Potential as a Certified Trainer:</p>
          </div>

          <p>
            With the help of our Training Consultants program, take a
            revolutionary step toward becoming a distinguished certified
            training consultant. Learn from professionals in the field, immerse
            yourself in a thorough curriculum, and hone your training methods
            through interactive workshops. Participating in our program will
            enable you to gain expertise in diverse courses while also
            developing the abilities to mentor and encourage others in their
            career advancement.
          </p>

          <div>
            {trainingPros.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
              </div>
            ))}
          </div>

          <button>Learn More</button>
        </main>
      </section>

      <section>
        <main>
          <p>
            Want to accelerate professional growth and development at your
            organisation? <br /> See how we can help.
          </p>
          <button>Book a Consultation</button>
        </main>
      </section>
    </>
  );
}
