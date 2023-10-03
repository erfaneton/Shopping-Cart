import { Card } from 'react-bootstrap'
import formatCurrancy from '../../utilities/formatCurrancy'

type StoreItemProps = {
    id: number
    name: string
    price: number
    img: string
}


export default function StoreItem({ id, name, price, img }: StoreItemProps) {
    return (
        <Card>
            <Card.Img variant='top' src={img} height='400px' style={{ objectFit: 'cover' }} />
            <Card.Body className='d-flex flex-coulumn' ></Card.Body >
            <Card.Title className='d-flex justify-content-between align-item-baseline mb-4'>
                <span className='fs-2'>{name}</span>
                <span className='ms-2 text-muted'>{formatCurrancy(price)}</span>
            </Card.Title>
        </Card>
    )
}
