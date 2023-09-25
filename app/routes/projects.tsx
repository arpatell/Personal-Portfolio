import type { MetaFunction } from "@remix-run/node";
import Projects from '../components/Projects'
import Navbar from '../components/Navbar';
import Video from '../components/Video';

export const meta: MetaFunction = () => {
  return [
    { title: "My Projects" },
    { name: "description", content: "Details about my project experiences." },
  ];
};

const projects: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Projects/>
      <Video/>
    </div>
  );
}
export default projects;