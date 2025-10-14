import "../styles/footer.css";

export default function Footer({ categories, setCategories }) {
  return (
    <footer className="footer">
      <div className="rounded-tab">Categories</div>
      <Categories categories={categories} setCategories={setCategories} />
    </footer>
  );
}

function Categories({ categories, setCategories }) {
  function handleClick(e) {
    const tdId = e.target.getAttribute("data-id");
    setCategories((prev) =>
      prev.map((category) =>
        category.id == tdId
          ? { ...category, active: !category.active }
          : category
      )
    );
  }

  function TableCell({ id, label, active }) {
    return (
      <td
        data-id={id}
        data-bool={active ? "true" : "false"}
        className={active ? "active" : "inactive"}
        onClick={handleClick}
      >
        {label}
      </td>
    );
  }

  return (
    <table className="categories">
      <tbody>
        <tr>
          <TableCell id="1" label="Movement" active={categories[0].active} />
          <TableCell id="2" label="Gunplay" active={categories[1].active} />
          <TableCell id="3" label="Vehicles" active={categories[2].active} />
        </tr>
        <tr>
          <TableCell id="4" label="Sandbox" active={categories[3].active} />
          <TableCell id="5" label="Roleplay" active={categories[4].active} />
          <TableCell id="6" label="Group" active={categories[5].active} />
        </tr>
        <tr>
          <TableCell id="7" label="Strategy" active={categories[6].active} />
          <TableCell id="8" label="Sport" active={categories[7].active} />
          <TableCell id="9" label="MMO" active={categories[8].active} />
        </tr>
      </tbody>
    </table>
  );
}
