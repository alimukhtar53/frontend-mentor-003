import Form from "@/components/Form";
import dynamic from "next/dynamic";

const Home = () => {
  const DynamicForm = dynamic(() => import("@/components/Form"), {
    ssr: false,
  });

  return (
    <div>
      <DynamicForm />
    </div>
  );
};

export default Home;
