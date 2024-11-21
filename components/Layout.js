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
import { Container } from 'react-bootstrap';
import React from 'react';
import MainNav from './MainNav';

export default function Layout(props) {
  return (
    <>
      <MainNav />
      <br />
      <Container>
        {props.children}
      </Container>
      <br />
    </>
  );
}
