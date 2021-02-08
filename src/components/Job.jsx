import React, { useState } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { UncontrolledCollapse, Button, CardBody, Card, Row, Col } from 'reactstrap';


const Job = (props) => {
  let toggleId = "job" + props.index;
  let toggleSelector = "#job" + props.index;
  return ( 
      <div key={props.job.id}>
        <Row class="jobRow">
          <Col md="2">
          <img src={props.job.company_logo} alt={props.job.company} class="com_logo"/>
          </Col>
          <Col md="8">
            <Row> 
              <h3><strong>{props.job.title}</strong> </h3>
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
                <div>{ReactHtmlParser(props.job.description)}</div>
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </Row>
        
      </div>


   );
}
 
export default Job;