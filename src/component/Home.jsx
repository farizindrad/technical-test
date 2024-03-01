import { Link } from "react-router-dom";

function ListItem({ to, children }) {
  return (
    <li className="bg-slate-200 px-10 py-3 hover:bg-black hover:text-white   rounded-full m-4 flex justify-center text-2xl font-semibold">
      <Link to={to}>{children}</Link>
    </li>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sky-300">
      <span className="text-8xl m-4 font-bold">Technical Test</span>
      <ul>
        <ListItem to="/anagram">Anagram</ListItem>
        <ListItem to="/array">Array</ListItem>
        <ListItem to="/form">Form</ListItem>
      </ul>
    </div>
  );
}
