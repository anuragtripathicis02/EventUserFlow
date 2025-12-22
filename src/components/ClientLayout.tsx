"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import SideBar from "./SideBar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = ["/login", "/signup"].includes(pathname);

  return (
    <div className="dashboardPage">
      {!isAuthPage && <Header />}
      <div className="d-flex dashboard-main">
        {!isAuthPage && (
          <div className="side-menu-sec-main position-relative">
            <SideBar />
          </div>
        )}
        <div className="right-pages">
          <div className="inner-dashboard-pages">{children}</div>
        </div>
      </div>
    </div>
  );
}
