"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import axios from "axios";

import { BlogProps } from "@/types";
import { Card } from "@/components";

async function getUsers() {
  const res = await fetch("http://localhost:3001/posts");
  const users = (await res.json()) as BlogProps[];
  return users;
}

export default function ListUsers() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["hydrate-users"],
    queryFn: getUsers,
  });

  async function deleteBlogOnServer(id: number) {
    const deleteItem = await axios.delete(`http://localhost:3001/posts/${id}`);
    const res = deleteItem.data;
    return res;
  }

  const { mutate } = useMutation({
    mutationFn: deleteBlogOnServer,

    onSuccess: (resonse) => {
      console.log("succes");
    },

    onError: (error: Error, posts, context) => {
      console.log(error.message);
    },

    onSettled: () => {
      queryClient.invalidateQueries(["hydrate-users"]);
    },
  });

  function deleteHandler(id: number) {
    mutate(id);
  }

  return (
    <main>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <div>
          {data.map((user) => (
            <Card key={user.id} data={user} onDelete={deleteHandler} />
          ))}
        </div>
      ) : null}
    </main>
  );
}
