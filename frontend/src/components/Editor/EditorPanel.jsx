import MenuAppBar from "../MenuAppBar/MenuAppBar";
import LogOutBtn from "../LogOutBtn/LogOutBtn";

export default function EditorPanel() {
  return (
    <div className="container">
      <MenuAppBar />
      <h2>Editor Panel</h2>
      <p>
        Kun brugere med rollen <strong>editor</strong> eller{" "}
        <strong>admin</strong>kan se dette.
      </p>

      <LogOutBtn />
    </div>
  );
}
