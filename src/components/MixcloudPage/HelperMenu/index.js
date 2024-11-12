import "./styles.css";

const HelperMenu = () => {
  return (
    <div className="menu">
      <div className="menu-block wdth70perc">
        <form method="get">
          <input
            name="search"
            placeholder="Найти плейлист"
            type="search"
          ></input>
        </form>
      </div>
      <div className="menu-block wdth30perc">
        
      </div>
    </div>
  );
};

export default HelperMenu;
