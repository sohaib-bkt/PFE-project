export default function DetaiSizing(props) {
    return (
      <div className={"tab-pane fade " + props.clicked} id="nav-guide">
          <div className="table-responsive">
                      <table className="table table-pane mb-0">
                        <tbody>
                          <tr className="bg-color">
                            <th className="my-2">US Sizes</th>
                            <td>6</td>
                            <td>6.5</td>
                            <td>7</td>
                            <td>8</td>
                            <td>8.5</td>
                            <td>9</td>
                            <td>9.5</td>
                            <td>10</td>
                            <td>10.5</td>
                            <td>11</td>
                          </tr>
                          <tr>
                            <th>Euro Sizes</th>
                            <td>39</td>
                            <td>39</td>
                            <td>40</td>
                            <td>40-41</td>
                            <td>41</td>
                            <td>41-42</td>
                            <td>42</td>
                            <td>42-43</td>
                            <td>43</td>
                            <td>43-44</td>
                          </tr>
                          <tr className="bg-color">
                            <th>UK Sizes</th>
                            <td>5.5</td>
                            <td>6</td>
                            <td>6.5</td>
                            <td>7</td>
                            <td>7.5</td>
                            <td>8</td>
                            <td>8.5</td>
                            <td>9</td>
                            <td>10.5</td>
                            <td>11</td>
                          </tr>
                          <tr>
                            <th>Inches</th>
                            <td>9.25"</td>
                            <td>9.5"</td>
                            <td>9.625"</td>
                            <td>9.75"</td>
                            <td>9.9735"</td>
                            <td>10.125"</td>
                            <td>10.25"</td>
                            <td>10.5"</td>
                            <td>10.765"</td>
                            <td>10.85</td>
                          </tr>
                          <tr className="bg-color">
                            <th>CM</th>
                            <td>23.5</td>
                            <td>24.1</td>
                            <td>24.4</td>
                            <td>25.4</td>
                            <td>25.7</td>
                            <td>26</td>
                            <td>26.7</td>
                            <td>27</td>
                            <td>27.3</td>
                            <td>27.5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

      </div>
    )
}
                