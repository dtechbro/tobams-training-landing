import Image from "next/image";
import Button from "./Button";

export default function LearningSystem() {
  const courses = [
    "Business Analysis",
    "Design Thinking",
    "Effective Communication",
    "Entrepreneurship",
    "Career Development",
    "Business Model",
  ];
  return (
    <section>
      <main>
        <Image
          src="/learning-system.png"
          alt="Learning System"
          width={100}
          height={100}
        />

        <div>
          <h2>Learning Management System</h2>

          <div>
            <p>
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey. From
              technical courses covering the latest programming languages and
              development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy offers
              a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can
              enhance their skills and stay ahead in today&apos;s competitive
              tech landscape.
            </p>

            <h4>Some of our courses include:</h4>
            <div>
              {courses.map((course) => (
                <p key={course}>{course}</p>
              ))}
            </div>
          </div>

          <Button>Learn More</Button>
        </div>
      </main>
    </section>
  );
}
