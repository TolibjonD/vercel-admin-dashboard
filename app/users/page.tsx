import SearchBar from "./_components/SearchBar";

export default function Users() {
  return (
    <div>
      <p className="text-2xl">Users</p>
      <div className="bg-slate-300 w-full h-1 my-2"></div>
      <main className="main">
        <SearchBar />
      </main>
    </div>
  );
}
