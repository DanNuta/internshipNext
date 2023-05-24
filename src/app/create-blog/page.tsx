import { redirect } from "next/navigation";

import { Input, Button, Textarea } from "@/components";
import { useCreateBlog } from "@/hooks";
import { BlogProps } from "@/types";

async function postBlog(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  const dateTime = data.get("data")?.valueOf();
  const description = data.get("description")?.valueOf();
  const image = data.get("link-img")?.valueOf();

  if (typeof title !== "string" || title.length === 0) return;
  if (typeof dateTime !== "string" || dateTime.length === 0) return;
  if (typeof description !== "string" || description.length === 0) return;
  if (typeof image !== "string" || image.length === 0) return;

  const uniq = new Date().getTime();
  const blog: BlogProps = {
    title,
    date: dateTime,
    linkImage: image,
    description,
    id: uniq,
    author: {
      name: "Dan",
      prenume: "Nuta",
    },
  };

  const send = await useCreateBlog(blog);
  redirect("/blogs");
}

const EditPage = () => {
  return (
    <form action={postBlog}>
      <Input
        placeholder="Introdu un title pentru blog"
        name="title"
        type="text"
      />
      <Input type="date" name="data" />
      <Input placeholder="Introdu o imagine" name="link-img" type="text" />

      <Textarea name="description" />

      <Button type="submit" title="Submit" />
    </form>
  );
};

export default EditPage;
