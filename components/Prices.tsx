function Prices() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-lg font-bold">Portrait Photography</h2>
        <table>
          <thead>
            <tr>
              <th>Package</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1-Hour Photo Shoot</td>
              <td>$150</td>
            </tr>
            <tr>
              <td>2-Hour Photo Shoot</td>
              <td>$250</td>
            </tr>
            <tr>
              <td>Additional Hours</td>
              <td>$100 per hour</td>
            </tr>
            <tr>
              <td>Edited Digital Images</td>
              <td>$20 per image</td>
            </tr>
            <tr>
              <td>Full Session Gallery</td>
              <td>$350</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <h2 className="text-lg font-bold">Event Photography</h2>
        <table>
          <thead>
            <tr>
              <th>Package</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2-Hour Photo Shoot</td>
              <td>$300</td>
            </tr>
            <tr>
              <td>4-Hour Photo Shoot</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>Additional Hours</td>
              <td>$100 per hour</td>
            </tr>
            <tr>
              <td>Edited Digital Images</td>
              <td>$25 per image</td>
            </tr>
            <tr>
              <td>Full Session Gallery</td>
              <td>$550</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <h2 className="text-lg font-bold">Product Photography</h2>
        <table>
          <thead>
            <tr>
              <th>Package</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic Product Photography</td>
              <td>$200</td>
            </tr>
            <tr>
              <td>Additional Products</td>
              <td>$25 per product</td>
            </tr>
            <tr>
              <td>Edited Digital Images</td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>5 Images</td>
                      <td>$75</td>
                    </tr>
                    <tr>
                      <td>10 Images</td>
                      <td>$124</td>
                    </tr>
                    <tr>
                      <td>20 Images</td>
                      <td>$225</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Prices;
