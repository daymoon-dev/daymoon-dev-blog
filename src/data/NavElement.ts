type navElementsProps = {
  id: number;
  path: string;
  value: string;
}[];

const navElements: navElementsProps = [
  {
    id: 1,
    path: "whoami",
    value: "whoami",
  },
  {
    id: 2,
    path: "posts",
    value: "echo",
  },
  {
    id: 3,
    path: "portfolio",
    value: "Portfolio",
  },
];

export default navElements;
