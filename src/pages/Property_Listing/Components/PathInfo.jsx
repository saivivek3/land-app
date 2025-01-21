function PathInfo() {
  return (
    <div
      aria-label="Breadcrumb"
      className="text-sm px-20 text-gray-600 my-4 md:px-20 sm:px-4 md:mt-4 mt-12"
    >
      <ol className="flex space-x-2">
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>
        </li>
        <span className="text-gray-400">›</span>
        <li>
          <div>Property List</div>
        </li>
      </ol>
    </div>
  );
}

export default PathInfo;
