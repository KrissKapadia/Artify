/****************************************************************************
* I declare that this assignment is my own work in accordance with the Seneca Academic
* Policy. No part of this assignment has been copied manually or electronically from
* any other source (including web sites) or distributed to other students.
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
* Assignment: 2247 / 4
* Student Name: Kriss Alpesh Kapadia
* Student Email: kakapadia@myseneca.ca
* Course/Section: WEB422/ZAA
*
*****************************************************************************/
import { Row, Col, Image } from 'react-bootstrap'; 

const Home = () => {
  return (
    <div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
        alt="Metropolitan Museum of Art"
        fluid
        rounded
        className="my-4"
      />
      <Row>
        <Col lg={6}>
          <h2>Metropolitan Museum of Art</h2>
          <p>
            The Metropolitan Museum of Art of New York City, colloquially *The Met*, is the largest art museum in the United States. 
            Its permanent collection contains over two million works, divided among seventeen curatorial departments. 
            The Met is collection is housed in three locations: The Met Fifth Avenue, The Met Cloisters, and The Met Breuer (closed in 2020).
          </p>
        </Col>
        <Col lg={6}>
          <p>
            The museum is known for its expansive and diverse collection, which spans 5,000 years of art history. It is a key cultural institution in New York City, 
            attracting millions of visitors each year. The Met is located in Central Park on the eastern edge of the park along Fifth Avenue.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
            target="_blank"
            rel="noreferrer"
          >
            Read more on Wikipedia
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Home;