import type { MetaFunction } from "@remix-run/node";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Video from '../components/Video';
import '../styles.css';

export const meta: MetaFunction = () => {
  return [
    { title: "portfolio - aaron patel" },
    { name: "description", content: "welcome to my portfolio!" },
  ];
};


const Index: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Video/>
    </div>
  );
}
export default Index;