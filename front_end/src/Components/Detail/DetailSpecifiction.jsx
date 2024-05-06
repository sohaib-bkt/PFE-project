export default function DetailSpec(props) {
  console.log(props);
  return (
    <div className={"tab-pane fade " + props.clicked} id="speci">
      <div className="pro mb-4">
        <div className="table-responsive">
          <table className="table table-part">
            <tbody>
              {Array.isArray(props.specification) && props.specification.map((item, index) => (
                <tr key={index}>
                  <th>{item.attribute}</th>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
