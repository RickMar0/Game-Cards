import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="rounded-tab">Categories</div>
      <Categories />
    </footer>
  );
}

function Categories() {
  return (
    <table className="categories">
      <tbody>
        <tr>
          <td>Action</td>
          <td>Adventure</td>
          <td>Sandbox</td>
        </tr>
        <tr>
          <td>Physical</td>
          <td>Creative</td>
          <td>Social</td>
        </tr>
        <tr>
          <td>Risk</td>
          <td>Speed</td>
          <td>Strategy</td>
        </tr>
        <tr>
          <td>Fun</td>
          <td>Extreme</td>
          <td>Wildcard</td>
        </tr>
      </tbody>
    </table>
  );
}
