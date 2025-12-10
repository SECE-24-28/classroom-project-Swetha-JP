import "./App.css";
import Counter from "./components/Counter";
import RandomNumberGame from "./components/RandomNumberGame";

function App() {
  const username = "Mike";
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">React Games Collection</h1>
        <Counter username={username} />
        <RandomNumberGame />
      </div>
    </div>
  );
}

export default App;
