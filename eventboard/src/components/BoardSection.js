import React, { Component } from 'react';
import { 
    Container,
    Row, 
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';
import '../styles/BoardSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class PortfolioSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('https://api.github.com/users/richardxia15/repos')
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            else{
                throw new Error("something went wrong...")
            }
        }).then(data => {
            this.setState({projects: data, isLoading: false});

        }).catch(error => {
            this.setState({error: error, isLoading: false})
        });  
    }

    render() {
        const { projects, isLoading, error } = this.state;

        if(isLoading) {
            return (
                <div>
                    loading...
                </div>
            );
        }
        if(error) {
            return (
                <div>
                    An Error has occurred.
                </div>
            );
        }
        return (
            <div className="Portfolio-section">
                <div className="block-padding grey-section">
                    <Container>
                        <Row className="row-padding">
                            <Col sm={{ size: 6, offset: 3 }}>
                                <PortfolioCardTitle/>
                            </Col>
                        </Row>
                        <Row className="row-padding">
                        { projects.map(function (project, i) {
                            return (
                                <GithubCard project={ project } key={ i }/>
                            );
                        }.bind(this))}
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

function PortfolioCardTitle(props) {
    return (
        <div>
            <h2>Events</h2>
        </div>
    );
}

function GithubCard(props) {
    return (
        <Col sm={{ size: 4 }} className="card-padding">
            <a href={props.project.html_url} target="_blank">
                <Card className="portfolio-card">
                    <CardBody>
                        <CardTitle>{props.project.name}</CardTitle>
                        <CardText>{props.project.description}</CardText>
                    </CardBody>
                </Card>
            </a>
       </Col>
    )
}


export default PortfolioSection;