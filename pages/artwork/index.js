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
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Error from 'next/error';
import { Row, Col, Card, Pagination } from 'react-bootstrap';
import ArtworkCard from '../../components/ArtworkCard';  

const PER_PAGE = 10;

const Artwork = () => {
  const router = useRouter();
  const [artworkList, setArtworkList] = useState([]); 
  const [page, setPage] = useState(1); 
  
  let finalQuery = router.asPath.split('?')[1];

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/search?${finalQuery}`,fetcher);

  useEffect(() => {
    if (data) {
      const results = [];
      for (let i = 0; i < data?.objectIDs?.length; i += PER_PAGE) {
        const chunk = data?.objectIDs.slice(i, i + PER_PAGE);
        results.push(chunk);
      }
      setArtworkList(results); 
      setPage(1); 
    }
  }, [data]); 

  const previousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const nextPage = () => {
    setPage((prevPage) => (prevPage < artworkList.length ? prevPage + 1 : prevPage));
  };

  if (error) {
    return <Error statusCode={404} />;
  }

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Artwork Gallery</h1>

      {artworkList.length === 0 ? (
        <Card className="my-4">
          <Card.Body>
            <h4>Nothing Here</h4>
            <p>Try searching for something else.</p>
          </Card.Body>
        </Card>
      ) : (
        <Row className="gy-4">
          {artworkList[page - 1]?.map((currentObjectID) => (
            <Col lg={3} key={currentObjectID}>
              <ArtworkCard objectID={currentObjectID} />
            </Col>
          ))}
        </Row>
      )}

      {artworkList.length > 0 && (
        <Row className="mt-4">
          <Col>
            <Pagination>
              <Pagination.Prev onClick={previousPage} disabled={page === 1} />

              <Pagination.Item>{page}</Pagination.Item>

              <Pagination.Next onClick={nextPage} disabled={page === artworkList.length} />
            </Pagination>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Artwork;
