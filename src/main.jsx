import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { RecipeProvider } from "./context/RecipeList.jsx";
import { OrderItems } from "./context/Orderitems.jsx";
import { Location } from "./context/location.jsx";
import { Toaster } from "react-hot-toast"; // ✅

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecipeProvider>
      <OrderItems>
        <Location>
          <RouterProvider router={router} />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                fontSize: "16px",
                padding: "12px 18px",
                borderRadius: "10px",
              },
            }}
          />
        </Location>
      </OrderItems>
    </RecipeProvider>
  </StrictMode>,
);
