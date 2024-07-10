import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PlantTracker from '../assets/PlantTracker.png'
import './styles/Home.css'

const Home = () => {

    return(
        <Container>
            <Row>
                <Col>
                    <div className = "home">
                        <img src = {PlantTracker} className = 'plant-tracker-logo-lg' alt = 'Plant Tracker'/>
                        <h3>Track, nurture and watch your garden flourish.</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;