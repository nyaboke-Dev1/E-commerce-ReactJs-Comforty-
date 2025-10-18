import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const raw = localStorage.getItem('cartItems');
    setItems(raw ? JSON.parse(raw) : []);

    function onUpdate() {
      const r = localStorage.getItem('cartItems');
      setItems(r ? JSON.parse(r) : []);
    }
    window.addEventListener('cartUpdated', onUpdate);
    return () => window.removeEventListener('cartUpdated', onUpdate);
  }, []);

  const save = (newItems) => {
    setItems(newItems);
    localStorage.setItem('cartItems', JSON.stringify(newItems));
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  }

  const inc = (key) => {
    const next = items.map(i => i.key === key ? { ...i, quantity: (i.quantity || 0) + 1 } : i);
    save(next);
  }
  const dec = (key) => {
    const next = items.map(i => i.key === key ? { ...i, quantity: Math.max(1, (i.quantity || 0) - 1) } : i);
    save(next);
  }
  const remove = (key) => {
    const next = items.filter(i => i.key !== key);
    save(next);
  }

  const grandTotal = items.reduce((s, it) => s + (it.unitPrice || 0) * (it.quantity || 0), 0);

  const ensureLoggedIn = () => {
    const user = localStorage.getItem('user');
    if (!user || localStorage.getItem('loggedIn') !== 'true') {
      alert('Please log in to view your cart.');
      navigate('/login');
      return false;
    }
    return true;
  }

  useEffect(() => {
    if (!ensureLoggedIn()) return;
  }, []);

  if (!ensureLoggedIn()) return null;

  return (
    <div className="lg:container mx-auto p-8">
      <h2 className="text-2xl mb-6">Your Cart</h2>

      {items.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/">Continue shopping</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.key} className="flex items-center gap-4 p-4 border rounded">
              <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">Price: {item.displayPrice}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => dec(item.key)} className="px-2 py-1 border rounded">-</button>
                  <span className="px-3">{item.quantity}</span>
                  <button onClick={() => inc(item.key)} className="px-2 py-1 border rounded">+</button>
                  <button onClick={() => remove(item.key)} className="ml-4 text-red-600">Remove</button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">${((item.unitPrice || 0) * (item.quantity || 0)).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <div className="text-right">
            <p className="text-xl font-semibold">Grand total: ${grandTotal.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
