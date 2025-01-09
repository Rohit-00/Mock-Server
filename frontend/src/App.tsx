import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import ApiTester from "./pages/server";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Server } from "lucide-react";
import { MainDash } from "./pages/mainDash";
export interface App {
  Greet(name: string): Promise<string>;
}

declare global {
  interface Window {
      main: {
          App: App;
      },
      go :any
  }
}
function App() {
  const [value, setValue] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");

  const handleGreet = async (name:string) => {
    try {
      // Call the Go function `Greet`
      const result = await window.go.main.App.Greet(name);
      setGreeting(result);
    } catch (err) {
      console.error("Error calling Go function:", err);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const router = createBrowserRouter([
    {
      path:'/',
      element:<ApiTester/>
    }
    ])
  return (
    <div className="">
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
