import Image from "next/image";
import { db } from "./lib/db";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <div className="text-red-500 bg-white text-center m-12">
      <Button variant="ghost">Hello</Button>
    </div>
  );
}
