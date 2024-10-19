const Footer = () => {
  return (
    <footer className="py-8 flex flex-col gap-3 items-center bg-rose-200 opacity-75">
      <h2 className="text-2xl font-bold lowercase italic">
        Meal<span className="text-rose-500">Quest</span>
      </h2>
      <p>&copy; {new Date().getFullYear()} Foodverse. All rights reserved.</p>
    </footer>
  );
};

export default Footer;