import "./styles.css";

const HelperMenu = () => {
  return (
    <div className="menu">
      <div className="menu-block">
        <form method="get">
          <input
            name="search"
            placeholder="Найти плейлист"
            type="search"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default HelperMenu;
