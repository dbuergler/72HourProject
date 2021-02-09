import React, { useState } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { UncontrolledCollapse, Button, CardBody, Card, Row, Col } from 'reactstrap';


const Job = (props) => {
  let toggleId = "job" + props.index;
  let toggleSelector = "#job" + props.index;
  return ( 
      <tr key={props.job.id} className='table_row'>
        <Row class="jobRow">
          <Col md="2" className="image_col">
            <img src={props.job.company_logo} alt={props.job.company} class="com_logo"/>
          </Col>
          <Col md="8">
            <Row> 
              <h4><a href={props.job.url} target="_blank"><strong>{props.job.title}</strong> </a></h4>
            </Row>
            <Row> 
              <Col md="5"><p><strong>Company:</strong> {props.job.company}</p></Col>
              <Col md="3"><p><strong>Type: </strong>{props.job.type}</p></Col>
              <Col md="2"> 
                <Button color="primary" id={toggleId} style={{ marginBottom: '1rem' }}>
                  Description
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <UncontrolledCollapse toggler={toggleSelector}>
            <Card>
              <CardBody>
                <div className='job-desc'>{ReactHtmlParser(props.job.description)}</div>
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </Row>
      </tr>


   );
}
 
export default Job;