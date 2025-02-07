import { useEffect, useState } from "react";
import Title from "./Title";
import axios from "axios";
import Card from "./Card";

const Projects = () => {
  const [project, setProjects] = useState([]);
  useEffect(() => {
    axios.get(`/project.json`).then((res) => {
      setProjects(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <section className="w-full bg-[#09031B] lg:py-10 lg:pt-0 pt-6 pb-0">
        <Title title="Project Showcase"></Title>
        <div className="w-11/12 mx-auto flex justify-between items-center gap-4">
          {project.map((item) => (
            <Card item={item} key={item.id}></Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
