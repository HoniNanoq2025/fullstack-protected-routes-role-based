import MenuAppBar from "../MenuAppBar/MenuAppBar";
import LogOutBtn from "../LogOutBtn/LogOutBtn";

export default function AdminPanel() {
  return (
    <div>
      <MenuAppBar />
      <h2>Admin Panel</h2>
      <p>
        Kun brugere med rollen <strong>admin</strong> kan se dette.
      </p>
      <LogOutBtn />
    </div>
  );
}
