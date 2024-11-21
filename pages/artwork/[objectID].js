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
import { useRouter } from 'next/router';
import { Row, Col } from 'react-bootstrap'; 
import ArtworkCardDetail from '../../components/ArtworkCardDetail'; 

const ArtworkById = () => {
  const router = useRouter();
  const { objectID } = router.query; 

  if (!objectID) {
    return <div>Loading...</div>;
  }

  return (
    <Row>
      <Col>
        <ArtworkCardDetail objectID={objectID} /> 
      </Col>
    </Row>
  );
};

export default ArtworkById;
