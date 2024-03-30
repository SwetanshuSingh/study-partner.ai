import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";

const Signup = () => {
  const createUser = async (formData: FormData) => {
    "use server";
    const rawFormData = {
      username: formData.get("username")?.toString(),
      email: formData.get("email")?.toString() || "",
      password: formData.get("password")?.toString(),
    };

    // Add Zod Validation here
    try {
      const newUser = await prisma.user.create({
        data: {
          username: rawFormData.username,
          email: rawFormData.email,
          password: rawFormData.password,
        },
      });
      console.log(newUser);
      //   redirect("/app"); Add redirect to logic after successfull login
    } catch (error) {
      console.log(error);
    } finally {
        formData.set("username", ""),
        formData.set("email", ""),
        formData.set("password", "");
    }
  };

  return (
    <main className="w-full h-[100vh] flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <div>
          <h1 className="text-center text-5xl font-black text-stone-800 md:text-6xl">
            StudyPartner AI
          </h1>
        </div>
        <div>
          <h1 className="text-center text-xl font-bold text-stone-500">
            your ultimate study companion
          </h1>
        </div>
      </div>
      <div className="flex w-80 flex-col gap-6 rounded-xl border bg-background p-4 sm:w-96 md:p-8">
        <div>
          <h1 className="text-2xl font-bold">Welcome</h1>
          <h2 className="text-stone-500">Please sign up below</h2>
        </div>
      <form className="w-fill flex flex-col gap-4" action={createUser}>
        <div className="form-fields w-full h-full flex flex-col gap-3">
          <Input
            className="border border-black"
            placeholder="Username"
            name="username"
          />
          <Input
            className="border border-black"
            placeholder="Email"
            type="email"
            name="email"
          />
          <Input
            className="border border-black"
            placeholder="Password"
            type="password"
            name="password"
          />
        </div>
        <Button>Sign Up</Button>
      </form>
      </div>
    </main>
  );
};

export default Signup;
