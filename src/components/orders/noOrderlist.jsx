import { useNavigate } from "react-router-dom";
import { useCartItems } from "../../context/Orderitems";

export default function Receipt() {
  const navigate = useNavigate();
  const { cartItems } = useCartItems();

  if (!cartItems.length) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">🧾 No orders yet</h2>
        <p className="text-gray-500 mb-6">
          You haven’t placed any order. Start browsing our menu.
        </p>
        <button
          onClick={() => navigate("/menu")}
          className="px-6 py-3 font-semibold rounded-[var(--radius-xl)] bg-[var(--primary)] text-[var(--primary-foreground)]"
        >
          Browse Menu
        </button>
      </div>
    );
  }
}
