"use client";

import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Input, Button, Textarea } from "@/components";

interface PostBlog {
  title: string;
  data: string;
  linkImage: string;
  description: string;
  author: {
    name: string;
    prenume: string;
  };
  id: number;
}

async function postBlog(data: PostBlog) {
  await axios.post("http://localhost:3001/posts", data);
}

const EditPage = () => {
  const [title, setTitle] = useState("");
  const [data, setDate] = useState("");
  const [linkImage, setLinkImage] = useState("");
  const [description, setDescription] = useState("");

  const { mutate } = useMutation({
    mutationFn: postBlog,

    onError: (error: Error) => {
      console.log(error.message);
    },

    onSuccess: () => {
      console.log("totul a mers cu succes");
    },
  });

  function submitData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title || !data || !linkImage || !description) return;

    const uniq = new Date().getTime();

    const blog: PostBlog = {
      title,
      data,
      description,
      linkImage,

      author: {
        name: "Dan",
        prenume: "Nuta",
      },
      id: uniq,
    };

    mutate(blog);

    setTitle("");
    setDescription("");
    setDate("");
    setLinkImage("");

    console.log(blog);
  }

  return (
    <form onSubmit={(e) => submitData(e)}>
      <Input
        value={title}
        placeholder="Introdu un title pentru blog"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        value={data}
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      <Input
        value={linkImage}
        placeholder="Introdu o imagine"
        type="text"
        onChange={(e) => setLinkImage(e.target.value)}
      />

      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button title="Submit" />
    </form>
  );
};

export default EditPage;
