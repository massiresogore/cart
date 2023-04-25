// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./context";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return <main className="loading">...</main>;
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
