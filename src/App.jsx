import "./App.css";

function App() {
  
  return (
    <div className="h-screen w-full flex justify-center items-center bg-[url(./assets/background.jpg)] bg-no-repeat bg-cover bg-center">
      <div className="absolute h-[450px] w-[90%] bg-white/30 backdrop-blur-sm rounded-3xl overflow-hidden p-8 flex justify-between">
        <div className="bg-red-300 w-[25%] h-full overflow-hidden p-5 rounded-xl bg-white/30 backdrop-blur-md flex flex-col justify-center">
          <input
            type="text"
            placeholder="Search City"
            className="outline-none bg-white/40 py-2 px-3 text-sm rounded-full text-fontcolor"
          />
          <div className="flex justify-center">
            <img
              src={`https://openweathermap.org/img/wn/10d@4x.png`}
              alt="Weather Icon"
              className="h-40"
            />
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <div>
              <img
                className="w-5"
                src="data:image/png;base64,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"
              />
            </div>
            <div>
              <h4 className="text-fontcolor font-semibold">Karachi,Pakistan</h4>
            </div>
          </div>
          <h2 className="text-center text-3xl text-fontcolor font-bold my-2">
            23.5 C
          </h2>
          <h3 className="text-fontcolor font-semibold text-center my-3">
            Monday , 20:50 PM
          </h3>
        </div>
        <div className="w-[72%] h-full">
          <div className="w-full h-1/2 p-3">
            <h3 className="text-xl font-semibold text-fontcolor">
              5-Day Forecast
            </h3>
            <div className="w-full flex gap-x-3 my-4">
              <div className="w-1/5 h-28 flex justify-center">
                <div className="bg-white/30 backdrop-blur-md px-6 py-2 rounded-lg">
                  <h4 className="text-fontcolor font-semibold text-center">
                    Tuesday
                  </h4>
                  <img
                    src=" https://openweathermap.org/img/wn/10d@2x.png"
                    alt="Weather icon"
                    className="w-14"
                  />
                  <h2 className="text-center font-semibold text-fontcolor">
                    20&deg; C
                  </h2>
                </div>
              </div>
              <div className="w-1/5 h-28 flex justify-center">
                <div className="bg-white/30 backdrop-blur-md px-6 py-2 rounded-lg">
                  <h4 className="text-fontcolor font-semibold text-center">
                    Tuesday
                  </h4>
                  <img
                    src=" https://openweathermap.org/img/wn/10d@2x.png"
                    alt="Weather icon"
                    className="w-14"
                  />
                  <h2 className="text-center font-semibold text-fontcolor">
                    20&deg; C
                  </h2>
                </div>
              </div>
              <div className="w-1/5 h-28 flex justify-center">
                <div className="bg-white/30 backdrop-blur-md px-6 py-2 rounded-lg">
                  <h4 className="text-fontcolor font-semibold text-center">
                    Tuesday
                  </h4>
                  <img
                    src=" https://openweathermap.org/img/wn/10d@2x.png"
                    alt="Weather icon"
                    className="w-14"
                  />
                  <h2 className="text-center font-semibold text-fontcolor">
                    20&deg; C
                  </h2>
                </div>
              </div>
              <div className="w-1/5 h-28 flex justify-center">
                <div className="bg-white/30 backdrop-blur-md px-6 py-2 rounded-lg">
                  <h4 className="text-fontcolor font-semibold text-center">
                    Tuesday
                  </h4>
                  <img
                    src=" https://openweathermap.org/img/wn/10d@2x.png"
                    alt="Weather icon"
                    className="w-14"
                  />
                  <h2 className="text-center font-semibold text-fontcolor">
                    20&deg; C
                  </h2>
                </div>
              </div>
              <div className="w-1/5 h-28 flex justify-center">
                <div className="bg-white/30 backdrop-blur-md px-6 py-2 rounded-lg">
                  <h4 className="text-fontcolor font-semibold text-center">
                    Tuesday
                  </h4>
                  <img
                    src=" https://openweathermap.org/img/wn/10d@2x.png"
                    alt="Weather icon"
                    className="w-14"
                  />
                  <h2 className="text-center font-semibold text-fontcolor">
                    20&deg; C
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2">
            <h3 className="p-3 text-xl font-semibold text-black/80">
              Today 's Highlists
            </h3>
            <div className="h-auto w-full flex gap-10">
              <div className="w-1/2 h-full flex justify-center">
                <div className="w-4/5 h-full bg-white/30 backdrop-blur-md rounded-2xl p-5 text-center">
                  <h4 className="font-semibold text-fontcolor my-3">
                    Description - Clear Sky
                  </h4>
                  <h4 className="font-semibold text-fontcolor my-3">
                    Wind Speed - Km/h
                  </h4>
                </div>
              </div>
              <div className="w-1/2 h-full flex justify-center">
                <div className="w-4/5 h-full bg-white/30 backdrop-blur-md rounded-2xl p-5 text-center">
                  <h4 className="font-semibold text-fontcolor my-3">
                    Temperature - 64
                  </h4>
                  <h4 className="font-semibold text-fontcolor my-3">
                    Humidity - 64
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
