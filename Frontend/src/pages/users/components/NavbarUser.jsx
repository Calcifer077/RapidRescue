function NavbarUser() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-light-green backdrop-blur-md p-6 px-12">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-main-text font-bold text-xl">RapidRescue</div>
        <div className="flex gap-6">
          <button className="bg-light-green text-main-text font-bold border p-2 px-10 rounded-md cursor-pointer">
            Sign in
          </button>
          <button className="bg-button-dark-green text-white border p-2 px-10 rounded-md hover:bg-button-hover-green cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavbarUser;
