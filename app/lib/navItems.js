export const navItems = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/resources",
    label: "Resources",
  },
  {
    path: "/contact",
    label: "Contact",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
