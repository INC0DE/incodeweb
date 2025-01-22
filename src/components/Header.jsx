import { Link } from "react-router-dom";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { useState } from "react";
import { incodenav } from "../assets";
import Modalnav from "./Modal";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from "@nextui-org/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      item: "Inicio",
      to: "/",
    },
    {
      item: "Website",
      to: "/Website",
    },
    {
      item: "Marketing",
      to: "/Marketing",
    },
  ];

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/">
            <Image src={incodenav} width={180} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className={clsx(
              linkStyles({ color: "gold" }),
              "data-[active=true]:text-primary data-[active=true]:font-bold"
            )}
            color="gold"
            to="/"
          >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={clsx(
              linkStyles({ color: "gold" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium"
            )}
            to="/Website"
          >
            Website
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={clsx(
              linkStyles({ color: "gold" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium"
            )}
            to="/Marketing"
          >
            Marketing
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Modalnav />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              to={item.to}
              size="lg"
            >
              <div className="p-10">
                <p className="text-5xl text-gold">{item.item}</p>
              </div>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
