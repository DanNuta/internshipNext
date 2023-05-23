export interface BlogProps {
  title: string;
  id: number;
  description: string;
  linkImage: string;
  author: {
    name: string;
    prenume: string;
  };
  date: string;
}
