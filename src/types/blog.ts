export interface BlogProps {
  title: string;
  id: string;
  description: string;
  linkImage: string;
  author: {
    name: string;
    prenume: string;
  };
  date: string;
}
