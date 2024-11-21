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
import useSWR from 'swr';
import Error from 'next/error';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

const fetcher = (url) => fetch(url).then((res) => res.json());

function ArtworkCardDetail({ objectID }) {
  const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`, fetcher);

  if (error) {
    return <Error statusCode={404} />;
  }

  if (!data) {
    return null;
  }

  const {
    primaryImage,
    title = 'N/A',
    objectDate = 'N/A',
    classification = 'N/A',
    medium = 'N/A',
    artistDisplayName,
    creditLine = 'N/A',
    dimensions = 'N/A',
    artistWikidata_URL,
  } = data;

  const imageUrl = primaryImage || 'https://via.placeholder.com/375x375.png?text=[+Not+Available+]';

  return (
    <Card style={{ width: '18rem' }}>
      {primaryImage && <Card.Img variant="top" src={imageUrl} alt={title} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <p>Object Date: {objectDate}</p>
          <p>Classification: {classification}</p>
          <p>Medium: {medium}</p>
          <br />
          <br />
          <p>Artist: {artistDisplayName ? <a href={artistWikidata_URL} target="_blank" rel="noreferrer">wiki</a> : 'N/A'}</p>
          <p>Credit Line: {creditLine}</p>
          <p>Dimensions: {dimensions}</p>
        </Card.Text>
        <Link href={`/artwork/${objectID}`} passHref>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ArtworkCardDetail;
