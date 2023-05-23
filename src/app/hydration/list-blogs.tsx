"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

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

export default function ListUsers() {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["hydrate-users"],
    queryFn: getUsers,
  });

  return (
    <main>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div>
          {data.map((user) => (
            <div key={user.id}>
              <h3>{user.title}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}
