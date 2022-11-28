import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Router from "./route/Router";

function App() {
  
  return (
    <div className="flex flex-col h-screen max-w-screen-sm m-auto">
      <Header />
      <div className="App flex-1 bg-gray-400">
        <Router />
      </div>
      <Footer />
    </div>
  )
}

export default App;
