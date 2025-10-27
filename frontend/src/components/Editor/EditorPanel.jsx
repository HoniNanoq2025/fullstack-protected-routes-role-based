import LogOutBtn from "../LogOutBtn/LogOutBtn";

export default function EditorPanel() {
  return (
    <div>
      <h2>Editor Panel</h2>
      <p>
        Kun brugere med rollen <strong>editor</strong> eller{" "}
        <strong>admin</strong>kan se dette.
      </p>

      <LogOutBtn />
    </div>
  );
}
