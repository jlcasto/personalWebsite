import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Divider from './Divider';

const Cover = () => (
  <StaticQuery
    query={graphql`
      query {
        coverImg: file(relativePath: { eq: "books-dark.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160, duotone: { highlight: "#283246", shadow: "#283246", opacity: 70 }) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data: any) => {
      // Set ImageData.
      const imageData = data.coverImg.childImageSharp.fluid;
      return (
        <div id='cover'>
          <BackgroundImage classId='cover' Tag='section' fluid={imageData} backgroundColor={`#111111`}>
            <Container>
              <Row className='text-center'>
                <div className='col-12'>
                  <h1>Jocelyn Irwin</h1>
                  <p>
                    <Divider />
                  </p>
                  <h3>Code Witch</h3>
                </div>
              </Row>
            </Container>
          </BackgroundImage>
        </div>
      );
    }}
  />
);
export default Cover;
