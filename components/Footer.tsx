const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto w-full border-t ">
      <div className="flex w-full flex-col items-center justify-center space-x-3 p-10 md:flex-row">
        <p className="text-xs text-slate-500 md:text-sm">
          &copy; {year} Dunes Cart store. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
