export interface BlogProps {
  title: string;
  _id: string;
  description: string;
  img: string;
  author: {
    name: string;
    prenume: string;
  };
  date: string;
}
