function PathInfo() {
  return (
    <div
      aria-label="Breadcrumb"
      className="text-sm px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-gray-600 my-4 md:mt-4 mt-12"
    >
      <ol className="flex flex-wrap space-x-2">
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>
        </li>
        <span className="text-gray-400">›</span>
        <li>
          <a>Property List</a>
        </li>
        <span className="text-gray-400">›</span>
        <li>
          <span className="text-gray-500">Property Profile</span>
        </li>
      </ol>
    </div>
  );
}

export default PathInfo;
