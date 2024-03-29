import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-full h-[100vh] flex justify-center items-center">
      <form className="w-fit flex flex-col gap-4" action={createUser}>
        <div className="form-fields w-full h-full flex flex-col gap-3">
          <Input
            className="border border-black"
            placeholder="Name"
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
    </main>
  );
};

export default Signup;