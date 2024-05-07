export default function DetailDesc(props) {
    return (
      <div className={"tab-pane fade " + props.clicked} id="desc">
      <div className="shipping-chart">
                {props.description}
              </div>
            </div>
    )
}