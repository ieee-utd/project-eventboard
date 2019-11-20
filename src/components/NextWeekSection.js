import React, { Component } from 'react';
import { Container,Row, Col,Card,CardBody,CardTitle,CardText,CardImg} from 'reactstrap';
import '../styles/NextWeekSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class NextWeekSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('https://api.github.com/users/saloniss/repos')
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            else{
                throw new Error("something went wrong...")
            }
        }).then(data => {
            this.setState({events: data, isLoading: false});

        }).catch(error => {
            this.setState({error: error, isLoading: false})
        });  
    }

    render() {
        const { events, isLoading, error } = this.state;

        if(isLoading) {
            return (
                <div>
                    Loading...
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
            <div className="Board-section">
                <div className="block-padding grey-section">
                    <Container>
                        <Row className="row-padding">
                            <Col sm={{ size: 6, offset: 3 }}>
                                <BoardCardTitle/>
                            </Col>
                        </Row>
                        <Row className="row-padding">
                        {
                            /* { events.map(function (project, i) {
                            return (
                                <CalendarCard project={ project } key={ i }/>
                            );
                        }.bind(this))} */
                        <CalendarCard/>
                        }
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

function BoardCardTitle(props) {
    return (
        <div>
            <h2>Next Week</h2>
        </div>
    );
}

//For project name : {props.project.name}
//For project desc : {props.project.description}
//For href : {props.project.html_url}
function CalendarCard() {
    return (
        <Col sm={{ size: 3 }} className="card-padding">
            <a href="https://github.com/ieee-utd/project-eventboard" target="_blank">
                <Card className="board-card">
                    <CardBody>
                        <CardTitle>Content</CardTitle>
                    </CardBody>
                </Card>
            </a>
       </Col>
    )
}


export default NextWeekSection;