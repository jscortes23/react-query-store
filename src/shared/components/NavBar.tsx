
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

import { AcmeLogo } from "./AcmeLogo";
import { useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../products/services/actions";


const routes = [
  { to: '/', text: 'Todo', category: undefined },
  { to: '/men', text: 'Hombres', category: "men's clothing" },
  { to: '/women', text: 'Mujeres', category: "women's clothing" },
]

export const NavBar = () => {

  const queryClient = useQueryClient()

  const prefetchQuery = (filterKey: string | undefined) => {
    queryClient.prefetchQuery({
      queryKey: ['products', { filterKey }],
      queryFn: () => getProducts({ filterKey })
    })
  }

  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">

        {
          routes.map(({ to, text, category }) => (
            <NavbarItem key={to}>
              <NavLink onMouseEnter={() => prefetchQuery(category)} to={to} className={({ isActive }) => isActive ? styles.active : styles.inactive}>
                {text}
              </NavLink>
            </NavbarItem>
          ))
        }



      </NavbarContent>

      <NavbarContent justify="end">

        <NavbarItem>

          <Button as={NavLink} color="primary" to="/new" variant="flat">
            Nuevo producto
          </Button>

        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
