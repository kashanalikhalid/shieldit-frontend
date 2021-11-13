import React, {useEffect, useState} from "react";
import ChartistGraph from "react-chartist";
import Graph from "react-graph-vis";
import '../assets/css/dashboard.css'
import CanvasJSReact from '../assets/canvasJs/canvasjs.react';

import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

function Dashboard({history}) {
  let CanvasJS = CanvasJSReact.CanvasJS;
  let CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const dispatch= useDispatch()


  const emailOptions = {
    theme: "light2",
    animationEnabled: true,
    title:{
      text: "Emails sent vs received from outside company"
    },
    axisX: {
      title: "States"
    },
    axisY: {
      title: "Emails Sent",
      titleFontColor: "#6D78AD",
      lineColor: "#6D78AD",
      labelFontColor: "#6D78AD",
      tickColor: "#6D78AD"
    },
    axisY2: {
      title: "Emails received",
      titleFontColor: "#51CDA0",
      lineColor: "#51CDA0",
      labelFontColor: "#51CDA0",
      tickColor: "#51CDA0"
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
    },
    data: [{
      type: "spline",
      name: "Emails from outside",
      showInLegend: true,
      xValueFormatString: "MMM",
      yValueFormatString: "#,##0 Emails",
      dataPoints: [
        { x: new Date(2017, 0), y: 120 },
        { x: new Date(2017, 1), y: 135 },
        { x: new Date(2017, 2 ), y: 144 },
        { x: new Date(2017, 3 ), y: 103 },
        { x: new Date(2017, 4 ), y: 93 },
        { x: new Date(2017, 5 ), y: 129 },
        { x: new Date(2017, 6 ), y: 143 },
        { x: new Date(2017, 7 ), y: 156 },
        { x: new Date(2017, 8 ), y: 122 },
        { x: new Date(2017, 9 ), y: 106 },
        { x: new Date(2017, 10 ), y: 137 },
        { x: new Date(2017, 11), y: 142 }
      ]
    },
      {
        type: "spline",
        name: "Emails from inside",
        axisYType: "primary",
        showInLegend: true,
        xValueFormatString: "MMM",
        yValueFormatString: "#,##0 Emails",
        dataPoints: [
          { x: new Date(2017, 0), y: 190 },
          { x: new Date(2017, 1  ), y: 200 },
          { x: new Date(2017, 2 ), y: 273 },
          { x: new Date(2017, 3 ), y: 200 },
          { x: new Date(2017, 4 ), y: 202 },
          { x: new Date(2017, 5 ), y: 290 },
          { x: new Date(2017, 6 ), y: 304 },
          { x: new Date(2017, 7 ), y: 325 },
          { x: new Date(2017, 8 ), y: 202 },
          { x: new Date(2017, 9 ), y: 272 },
          { x: new Date(2017, 10 ), y: 335 },
          { x: new Date(2017, 11), y: 325 }
        ]
      }]
  }


  const departmentOptions = {
    animationEnabled: true,
    theme: "ligh1",
    title: {
      text: "Threats Statistics Month Wise"
    },
    axisY: {
      title: "Threats per department",
      scaleBreaks: {
        autoCalculate: true,
        type: "wavy",
        lineColor: "white"
      }
    },
    data: [{
      type: "column",
      indexLabel: "{y}",
      indexLabelFontColor: "white",
      dataPoints: [
        {"label":"Marketing","y":5},
        {"label":"Accounts","y":4},
        {"label":"Pharma","y":2},
        {"label":"IT","y":3},
        {"label":"Design","y":2},
        {"label":"Support","y":2}
      ]
    }]
  }

  const pieOptions = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    title:{
      text: "Company Health"
    },
    data: [{
      type: "pie",
      indexLabel: "{label}: {y}%",
      startAngle: -90,
      dataPoints: [
        { y: 30, label: "Suspicious Employees" },
        { y: 70, label: "Normal Employees" },
      ]
    }]
  }


  useEffect(()=>{
  },[dispatch])

  const showDashboad=()=>{



    let options = {
      nodes: {
        shape: "dot",
        size: 30,
        font: {
          size: 20,
          color: "black",
        },
        borderWidth: 2,
      },
      edges: {
        width: 2,
      },
    };

    const events = {
      select: function(event) {
        var { nodes, edges } = event;
      }
    };

        return( <Container fluid>
        <Row>
          <Col lg="4" sm="6">
            <Card className="card-stats card-stats-bg-1">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className=" text-white-util nc-icon nc-single-02 "></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category text-white-util">Total Employees</p>
                      <Card.Title className="text-white-util" as="h4">284</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats card-stats-bg-2">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-email-85 text-white-util"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className=" text-white-util card-category">Total Emails</p>
                      <Card.Title className="text-white-util" as="h4">3600</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats card-stats-bg-3">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-bell-55 text-white-util"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className=" text-white-util card-category">No. of Risky Emails</p>
                      <Card.Title className="text-white-util" as="h4">170</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
        </Row>
          <Row className="graphs-container">
              <Col xs={6}>
                <CanvasJSChart options = {pieOptions}/>
              </Col>
              <Col xs={6}>
                <CanvasJSChart options = {departmentOptions}
                    /* onRef={ref => this.chart = ref} */
                />

              </Col>

            <Col xs={12}>
              <CanvasJSChart options = {emailOptions}
                  /* onRef={ref => this.chart = ref} */
              />

            </Col>
          </Row>


      </Container>)
    }


  return (
    <>{showDashboad()}
    </>
  );
}

export default Dashboard;
