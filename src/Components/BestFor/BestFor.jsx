import doctor from "../../assets/bestFor/doctor.png";
import businessMan from "../../assets/bestFor/businessMan.jpg";
import developer from "../../assets/bestFor/developer.jpg";
import student from "../../assets/bestFor/student.jpg";
import teacher from "../../assets/bestFor/teacher.jpg";

const cardImg = [
  {
    id: 1,
    description:
      "A doctor-specific to-do app streamlines tasks such as appointment scheduling, patient record management, and prescription tracking. It offers quick access to medical histories, timely reminders for follow-ups, and efficient prescription handling. With a user-friendly interface, it optimizes workflow, enhancing patient care and time management in the healthcare setting",
    name: "Doctor",
    img: doctor,
  },
  {
    id: 2,
    description:
      "A business-focused to-do app should include task categorization, priority settings, project management tools, and integration with calendar and email services. It requires collaboration features for teams, reminders for meetings or deadlines, customizable notifications, and seamless synchronization across devices, optimizing productivity and task management for professionals.",
    name: "Business Man",
    img: businessMan,
  },
  {
    id: 3,
    description:
      "A developer-oriented to-do app should offer customizable task management, code integration capabilities, and collaboration tools like version control and bug tracking. It must support various platforms, feature-rich APIs for extensibility, and intuitive UI/UX designs, enhancing productivity and project management for developers.",
    name: "Developer",
    img: developer,
  },
  {
    id: 4,
    description:
      "A student-oriented to-do app should offer task prioritization, deadline tracking, study session scheduling, and goal setting features. It requires integration with academic calendars, reminders for assignments, progress tracking, and the ability to attach notes or resources. Such an app enhances time management and supports academic success for students.",
    name: "Student",
    img: student,
  },
  {
    id: 5,
    description:
      "A teacher-specific to-do app should feature lesson planning tools, grading trackers, class scheduling, and student progress monitoring. It requires options for curriculum alignment, reminders for deadlines or meetings, seamless communication channels, and the ability to attach resources. Such an app enhances organization and facilitates efficient classroom management for educators.",
    name: "Teacher",
    img: teacher,
  },
];

const BestFor = () => {
  return (
    <div className="mt-20 overflow-hidden">
      <div
      data-aos="fade-down"
      data-aos-duration="1500"
      className="divider divider-primary text-4xl border-l-2 border-r-2">
        Best For Whom
      </div>
        <div 
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="grid grid-cols-2 gap-4 my-10">
          {cardImg.map((img) => (
            <div key={img.id} className="p-4 bg-black rounded-xl">
              <div className="flex justify-between">
                <h1 className="text-2xl font-medium">{img.name}</h1>
                <div className=" bg-white h-14 w-24 rounded-xl">
                  <img
                    src={img.img}
                    alt=""
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </div>
              <p className="mt-2">
                <span className="text-blue-300 font-medium text-lg">
                  For What:{" "}
                </span>{" "}
                {img.description}
              </p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default BestFor;
