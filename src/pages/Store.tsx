import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/Items.json'
import StoreItem from '../components/StoreItem/StoreItem'


export default function Store() {
    return (
        <>
            <div>store</div>
            <Row lg={3} md={2} xs={1}>
                {storeItems.map(item => (
                    <Col key={item.id}><StoreItem {...item} /></Col>
                ))}
            </Row>
        </>
    )
}
