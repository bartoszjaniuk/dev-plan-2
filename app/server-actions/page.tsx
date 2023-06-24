import React from "react";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { AppPaths } from "@/components/Layout/Nav.consts";

const todos: string[] = ["Learn Next.js"];

const ServerActions = () => {
  async function addTodo(data: FormData) {
    "use server";
    console.log(data, "data");
    const todo = data.get("todo") as string;
    todos.push(todo);
    revalidatePath("/");
  }

  return (
    <>
      <h1 className="text-2xl pb-4">Server Actions</h1>
      <main className="py-4">
        Server Actions are an alpha feature in Next.js, built on top of React
        Actions. They enable server-side data mutations, reduced client-side
        JavaScript, and progressively enhanced forms. They can be defined inside
        Server Components and/or called from Client Components
        <div className="pt-4">
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
          <form action={addTodo} className="flex gap-1">
            <input
              type="text"
              name="todo"
              className="border border-gray-300 rounded-sm py-4 px-4 text-base font-normal text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center justify-center rounded-sm py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Add Todo
            </button>
          </form>
        </div>
      </main>
      <Link
        className="cursor-pointer text-blue-300 pt-8"
        href={`${AppPaths.SERVER_ACTIONS}/transition`}
      >
        Go to Action with transition
      </Link>
    </>
  );
};

export default ServerActions;
