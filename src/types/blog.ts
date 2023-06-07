export interface BlogProps {
  title: string;
  _id: string;
  description: string;
  img: string;
  author: {
    name: string;
    firstName: string;
  };
  date: string;
}
