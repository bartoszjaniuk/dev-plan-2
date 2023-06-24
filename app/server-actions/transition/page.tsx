import React from "react";
import AddButton from "./AddButton";
import { revalidatePath } from "next/cache";

export const todos: string[] = ["Learn server actions with transition"];

const Transition = () => {
  async function addTodo(todo: string) {
    "use server";
    await new Promise((resolve) => setTimeout(resolve, 3000));

    todos.push(todo);
    revalidatePath("/formPostWithTransition");
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
          <AddButton addTodo={addTodo} />
        </div>
      </main>
    </>
  );
};

export default Transition;
