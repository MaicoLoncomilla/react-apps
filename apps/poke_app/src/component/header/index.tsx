export const Header = () => {
  return (
    <header className="flex w-full bg-transparent justify-center shadow">
      <div className="flex justify-between max-w-7xl w-full py-3 px-4">
        <h1 className="text-xl text-slate-800 dark:text-slate-200">Poke App</h1>
        <button className="bg-blue-500 px-3 rounded">
          <span className="text-slate-200">Dark mode</span>
        </button>
      </div>
    </header>
  )
}
