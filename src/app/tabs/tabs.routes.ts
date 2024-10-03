import { Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

export const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "home",
        loadComponent: () =>
          import("../home/home.page").then((m) => m.HomePage),
      },
      {
        path: "transactions",
        loadComponent: () =>
          import("../transactions/transactions.page").then(
            (m) => m.TransactionsPage,
          ),
      },
      {
        path: "new",
        loadComponent: () => import("../new/new.page").then((m) => m.NewPage),
      },
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
];
