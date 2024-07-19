import SidebarMenu from "@/components/sidebar-menu";

export const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-auto">
      <SidebarMenu />
      <div className="p-16 w-full h-full">{children}</div>
    </div>
  );
};

export default Layout;
