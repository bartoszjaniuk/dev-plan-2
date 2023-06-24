export const AppPaths = {
  HOME: "/",
  CSR: "/csr",
  SSR: "/ssr",
  SSG: "/ssg",
  ISR: "/isr",
  SERVER_ACTIONS: "/server-actions",
} as const;

export const AppRoutes = [
  {
    name: "Home",
    path: AppPaths.HOME,
  },
  {
    name: "Csr",
    path: AppPaths.CSR,
  },
  {
    name: "Ssr",
    path: AppPaths.SSR,
  },
  {
    name: "Ssg",
    path: AppPaths.SSG,
  },
  {
    name: "Isr",
    path: AppPaths.ISR,
  },
  {
    name: "Server Actions",
    path: AppPaths.SERVER_ACTIONS,
  },
];
