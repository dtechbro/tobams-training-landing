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
    <section className="bg-[#5712441A] my-4">
      <main className="section flex items-center gap-20 py-12">
        <Image
          src="/learning-system.png"
          alt="Learning System"
          width={100}
          height={100}
          className="h-[568px] w-auto"
        />

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="headings text-primary">
              Learning Management System
            </h2>

            <div className="bg-[#5712441A] p-6 rounded-lg flex flex-col gap-5">
              <p className="text-lg">
                TG Academy is a hub of knowledge and skill-building resources
                designed to empower tech talents on their learning journey. From
                technical courses covering the latest programming languages and
                development frameworks to soft skills training in leadership,
                effective communication and project management, TG Academy
                offers a wide range of courses to cater to diverse learning
                needs. With accessible and interactive learning materials,
                individuals can enhance their skills and stay ahead in
                today&apos;s competitive tech landscape.
              </p>

              <div>
                <h4 className="text-primary font-bold text-lg">
                  Some of our courses include:
                </h4>
                <ul className="flex flex-wrap gap-x-7 ml-5">
                  {courses.map((course) => (
                    <li className="list-disc text-[16px]" key={course}>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
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
        </div>
      </main>
    </section>
  );
}
