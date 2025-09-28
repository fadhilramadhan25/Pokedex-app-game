import Footer from "./footer";
import Header from "./header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;
  return (
    <main className="flex justify-center bg-slate-900 h-screen">
      <div className="layout-container min-w-full max-w-full bg-slate-300 dark:bg-emerald-950 md:min-w-[480px] md:max-w-[480px] flex flex-col">
        <Header />
        <div className="flex-grow overflow-auto">{children}</div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
