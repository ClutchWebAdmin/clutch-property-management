import TheHeader from "../components/TheHeader";

export default function Layout({ children }) {
  return (
    <>
      <TheHeader />
      {children}
    </>
  );
}
