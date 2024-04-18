export default function DetailSpecifiction(props) {
    return (
      <div className={"tab-pane fade " + props.clicked} id="desc">
      <div className="pro mb-4">
          <p className="font-light">
            The Model is wearing a white blouse from our stylist's
            collection, see the image for a mock-up of what the actual
            blouse would look like.it has text written on it in a black
            cursive language which looks great on a white color.
          </p>
          <div className="table-responsive">
            <table className="table table-part">
              <tbody>
                <tr>
                  <th>Product Dimensions</th>
                  <td>15 x 15 x 3 cm; 250 Grams</td>
                </tr>
                <tr>
                  <th>Date First Available</th>
                  <td>5 April 2021</td>
                </tr>
                <tr>
                  <th>Manufacturer</th>
                  <td>Aditya Birla Fashion and Retail Limited</td>
                </tr>
                <tr>
                  <th>ASIN</th>
                  <td>B06Y28LCDN</td>
                </tr>
                <tr>
                  <th>Item model number</th>
                  <td>AMKP317G04244</td>
                </tr>
                <tr>
                  <th>Department</th>
                  <td>Men</td>
                </tr>
                <tr>
                  <th>Item Weight</th>
                  <td>250 G</td>
                </tr>
                <tr>
                  <th>Item Dimensions LxWxH</th>
                  <td>15 x 15 x 3 Centimeters</td>
                </tr>
                <tr>
                  <th>Net Quantity</th>
                  <td>1 U</td>
                </tr>
                <tr>
                  <th>Included Components</th>
                  <td>1-T-shirt</td>
                </tr>
                <tr>
                  <th>Generic Name</th>
                  <td>T-shirt</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}