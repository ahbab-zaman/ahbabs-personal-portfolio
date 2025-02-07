import { useEffect, useState } from "react";
import Title from "./Title";
import axios from "axios";
import Card from "./Card";

const Projects = () => {
  const [project, setProjects] = useState([]);
  const animations = ["fade-up", "fade-down", "fade-up"];
  useEffect(() => {
    axios.get(`/project.json`).then((res) => {
      setProjects(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <section
        id="project"
        className="w-full bg-[#09031B] lg:py-10 lg:pt-0 pt-6 pb-0"
      >
        <div data-aos="fade-up">
          <Title title="Project Showcase"></Title>
        </div>
        <div className="w-11/12 mx-auto flex lg:flex-row flex-col justify-between items-center gap-4">
          {project.map((item, index) => (
            <Card
              item={item}
              key={item.id}
              animation={animations[index % animations.length]}
            ></Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
