function Prices() {
  return (
    <>
      <div className="text-center bg-primary p-3 rounded-sm">
        <h2 className="text-xl font-bold [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]">
          Portrait Photography
        </h2>
        <table className="border-collapse border-spacing-0 rounded overflow-hidden bg-backgroundColor text-sm sm:text-lg">
          <thead className="bg-backgroundColor border-b-2">
            <tr>
              <th>Package</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary">
              <td className="text-left p-2">1-Hour Photo Shoot</td>
              <td className="p-2">$150</td>
            </tr>
            <tr>
              <td className="text-left p-2">2-Hour Photo Shoot</td>
              <td className="p-2">$250</td>
            </tr>
            <tr className="bg-secondary">
              <td className="text-left p-2">Additional Hours</td>
              <td className="p-2">$100 per hour</td>
            </tr>
            <tr>
              <td className="text-left p-2">Edited Digital Images</td>
              <td className="p-2">$20 per image</td>
            </tr>
            <tr className="bg-secondary">
              <td className="text-left p-2">Full Session Gallery</td>
              <td className="p-2">$350</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center bg-accent p-3 rounded-sm">
        <h2 className="text-xl font-bold [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]">
          Product Photography
        </h2>
        <table className="border-collapse border-spacing-0 rounded overflow-hidden bg-backgroundColor text-sm sm:text-lg w-max">
          <thead className="bg-backgroundColor border-b-2">
            <tr>
              <th>Package</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary">
              <td>Basic Product Photography</td>
              <td className="p-2">$200</td>
            </tr>
            <tr>
              <td>Additional Products</td>
              <td className="p-2">$25 per product</td>
            </tr>
            <tr className="bg-secondary">
              <td>Edited Digital Images</td>
              <td className="pr-2">
                <ul>
                  <li>$75 for 5 images</li>
                  <li>$124 for 10 images</li>
                  <li>$225 for 20 images</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center bg-primary p-3 rounded-sm">
        <h2 className="text-xl font-bold [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]">
          Event Photography
        </h2>
        <table className="border-collapse border-spacing-0 rounded overflow-hidden bg-backgroundColor text-sm sm:text-lg">
          <thead className="bg-backgroundColor border-b-2">
            <tr>
              <th>Package</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary">
              <td className="text-left p-2">2-Hour Photo Shoot</td>
              <td className="p-2">$300</td>
            </tr>
            <tr>
              <td className="text-left p-2">4-Hour Photo Shoot</td>
              <td className="p-2">$500</td>
            </tr>
            <tr className="bg-secondary">
              <td className="text-left p-2">Additional Hours</td>
              <td className="p-2">$100 per hour</td>
            </tr>
            <tr>
              <td className="text-left p-2">Edited Digital Images</td>
              <td className="p-2">$25 per image</td>
            </tr>
            <tr className="bg-secondary">
              <td className="text-left p-2">Full Session Gallery</td>
              <td className="p-2">$550</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Prices;
