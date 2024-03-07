import "./App.css";
function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-[url(./assets/background.jpg)] bg-no-repeat bg-cover bg-center">
      <div className="absolute h-[450px] w-[90%] bg-white/30 backdrop-blur-sm rounded-3xl overflow-hidden p-8">
        <div className="bg-red-300 w-[25%] h-full overflow-hidden p-5 rounded-xl bg-white/30 backdrop-blur-md">
          <input
            type="text"
            placeholder="Search City"
            className="outline-none bg-white/40 py-2 px-3 text-sm rounded-full text-[#494949]"
          />
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
