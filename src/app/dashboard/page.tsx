import { FC } from "react";
import Button from "../components/ui/Button";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="text-center m-12">
      <Button>Hello</Button>
    </div>
  );
};

export default page;
