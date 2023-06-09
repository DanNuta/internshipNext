import { Loading } from "@/icons";

const LoadingPage = () => {
  return (
    <div
      role="status"
      className="flex items-center justify-center max-w-7xl mx-auto h-[47vh]  "
    >
      <div className="w-5 h-5">
        <h1 className="dark:text-white">Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingPage;
