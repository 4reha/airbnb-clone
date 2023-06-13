const SearchBar = () => {
  return (
    <div className="flex border gap-3 shadow-md shadow-gray-300 border-gray-300 rounded-full pl-5 pr-2 items-center h-12 m-auto">
      <div>Anywhere</div>
      <hr className="bg-gray-300 w-[1px] h-[25px]" />
      <div>Any week</div>
      <hr className="bg-gray-300 w-[1px] h-[25px]" />
      <div>Add guests</div>
      <button className="rounded-full border h-[32px] w-[32px] bg-primary text-white flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-4 h-4 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar