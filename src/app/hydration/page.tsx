import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/query-core";
import ListUsers from "./list-blogs";

interface BlogProps {
  title: string;
  id: number;
  description: string;
  linkImage: string;
  author: {
    name: string;
    prenume: string;
  };
}

async function getUsers() {
  const res = await fetch("http://localhost:3001/posts");
  const users = (await res.json()) as BlogProps[];
  return users;
}

export default async function Hydation() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-users"], getUsers);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ListUsers />
    </Hydrate>
  );
}
