import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../Component/SearchBar";

const MedicineCompare = () => {

  return (
    <>
      <SearchBar />

      <Container>
        <Row>
          {/* {this.state.articals.map{(element)=> {console.log(element)}}} */}

          <Col>
            <table className="table table-bordered">
              <thead className="headBg">
                <tr>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </Col>

          <Col>
            <table className="table">
              <thead className="headBg">
                <tr>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </Col>
          <div className="w-25">
            <Col>
              <table className="table table-bordered">
                <thead className="headBg">
                  <tr>
                    <th scope="col" >
                      First
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>Thornton</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default MedicineCompare;
