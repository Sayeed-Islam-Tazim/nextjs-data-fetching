import Form from "next/form";

export const SearchComponent = () => {
  return (
    <Form action={"/parallel-posts/3"}>
      <input name="query" className="bg-white text-blue-400" />
      <button type="submit">Search</button>
    </Form>
  );
};
