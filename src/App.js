import { RouterProvider } from "react-router-dom";
import "./App.css"
import { router } from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
      {/* https://www.indeed.com/jobs?q=software+developer&l=New+York%2C+NY&from=searchOnHP&vjk=ddadd32949f80f48 */}
    </div>
  );
};

export default App;
