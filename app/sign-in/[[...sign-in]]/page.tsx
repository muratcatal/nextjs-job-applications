import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-1 items-center justify-center mt-8">
      <SignIn />
    </div>
  );
}
