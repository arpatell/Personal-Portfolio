import type { MetaFunction } from "@remix-run/node";
import Navbar from '../components/Navbar';
import About from '../components/About';
import Video from '../components/Video';

export const meta: MetaFunction = () => {
  return [
    { title: "About Me" },
    { name: "description", content: "Learn some more about me." },
  ];
};

const about: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Video/>
    </div>
  );
}
export default about;