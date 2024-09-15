"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const Searchparams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const handleSearch = (term: string) => {
    const params = new URLSearchParams(Searchparams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params}`);
  };
  return (
    <div className="p-2">
      <input
        type="text"
        className="w-[300px] rounded p-2 "
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={Searchparams.get("query")?.toString()}
      />
    </div>
  );
}
