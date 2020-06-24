import React from 'react';
import { useIntl, injectIntl, FormattedMessage } from 'react-intl';

var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
interface IProps{
  intl:any
  }
class Projects extends React.Component<IProps> {

  constructor(props) {
    super(props)
  }
  getPieChartSkills(data) {
    Highcharts.chart(data.id, {
      chart: {
        type: 'pie',
        width: data.width,
        height: 300,
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      title: {
        text: data.text
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },

      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 90

        }
      },
      series: [{
        type: 'pie',
        name: data.text,
        data: data.data
      }]
    });
  }
  componentDidMount() {
    const frontEndText=this.props.intl.formatMessage({id: 'LABEL_FRONTEND'});

    const backendEndText=this.props.intl.formatMessage({id: 'LABEL_BACKEND'});
    const cloudText=this.props.intl.formatMessage({id: 'LABEL_CLOUD'});
    let frontendData = {
      data: [['Html', 10],
      ['JavaScript', 10],
      ['JQuery', 10],
      ['React', 10],
      ['Redux', 10],
      ['Angular', 10],
      ['Css', 10],
      ['Knockout', 10],
      ['Typescript', 10]], id: "frontend", text: frontEndText, width: 350
    };
    let backenddata = {
      data: [
        ['Asp.Net', 10],
        ['Asp.Net Core', 10],
        ['Asp.Net Mvc', 10],
        ['C#', 10],
        ['Web Api', 10],
        ['Wcf', 10],
        ['Node Js', 10],
        ['Entity Framework', 10]
      ], id: "backend", text: backendEndText, width: 360
    }
    let cloudData = {
      data: [
        ['Azure Cloud', 10],
        ['Azure Kubernetes', 10],
        ['Docker', 10],
        ['RabbitMq', 10],
        ['SQL Server', 10],
        ['Mongo DB', 10],
        ['Cosmos DB', 10],
        ['Redis Cache', 10]
      ], id: "cloud", text:cloudText, width: 380
    }
    this.getPieChartSkills(frontendData);
    this.getPieChartSkills(backenddata);
    this.getPieChartSkills(cloudData);
  }
  render() {
    return (

      <section className="fh5co-books">
        <div className="site-container">
          <h2 className="universal-h2 universal-h2-bckg"><FormattedMessage id={"LABEL_SKILLS"}/></h2>
          <div className="books">
            <div className="single-book">
              <div id="frontend" ></div>
            </div>
            <div className="single-book">
              <div id="backend" ></div>
            </div>
            <div className="single-book">
              <div id="cloud" ></div>
            </div>
           
          </div>
        </div>
      </section>

    )
  }
}

export default (injectIntl)(Projects);
