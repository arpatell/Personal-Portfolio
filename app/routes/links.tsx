import type { MetaFunction } from "@remix-run/node";
import Navbar from '../components/Navbar';
import Links from '../components/Links';
import Video from '../components/Video';

export const meta: MetaFunction = () => {
  return [
    { title: "Links" },
    { name: "description", content: "A list of links for my platforms." },
  ];
};

const links: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Links/>
      <Video/>
    </div>
  );
}
export default links;