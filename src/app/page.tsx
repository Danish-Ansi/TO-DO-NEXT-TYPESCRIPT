import AddTodo from "@/components/add-todo"
import Navbar from "@/components/navbar";
import Todos from "@/components/todos";

const Page = () => {
  return(
    <main className="">
      <h2 className="flex justify-center mt-5 font-serif text-2xl">TO-DO NEXT + TYPESCRIPT</h2>
      <div className="flex justify-center">
        <Navbar/>
      </div>
      <div className="flex justify-center">
        <AddTodo/>
      </div>
      <div className="flex justify-center">
        <Todos />
      </div>
    </main>
  )
}

export default Page;