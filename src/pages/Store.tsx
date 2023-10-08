import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/Items.json'
import StoreItem from '../components/StoreItem/StoreItem'


export default function Store() {
    return (
        <>
            <h1>store</h1>
            <Row lg={3} md={2} xs={1}>
                {storeItems.map(item => (
                    <Col key={item.id}><StoreItem {...item} /></Col>
                ))}
            </Row>
        </>
    )
}
