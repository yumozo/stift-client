import NavMenu from "./nav-menu";

export default function Layout(props: any) {

  return (
    <div className="flex flex-col items-center regular-text-color">

      <NavMenu />

      <main className="container flex flex-col items-center
        pt-24 px-0
        xl:w-1/2 w-3/5 h-screen"
      >
        <div className="flex flex-col items-center
          mt-12
          w-full h-full"
        >
          {props.children}
        </div>
      </main>

    </div>
  );
}
