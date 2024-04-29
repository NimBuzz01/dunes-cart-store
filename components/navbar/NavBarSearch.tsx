import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "../ui/button";

const NavBarSearch = () => {
  return (
    <Button size="icon" className="rounded-full" variant="ghost">
      <AiOutlineSearch className="text-cmneutral h-6 w-6" />
    </Button>
  );
};

export default NavBarSearch;
