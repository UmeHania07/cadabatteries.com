import cada from './assets/imag.jpeg'
function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl md:text-5xl font-bold">
        {/* CADA Lithium Battery */}
        <img src={cada} alt="" />
      </h1>

      <h2 className="mt-4 text-2xl font-semibold ">
        Website Under Construction
      </h2>

      <p className="mt-2 text-sm md:text-base text-gray-600">
        We are working on something powerful ⚡ Coming Soon.
      </p>
      <p className="mt-2 text-sm md:text-base text-gray-600">Mean while please contact us on whatsapp +1-606-235-5448</p>
    </div>
  )
}

export default App
