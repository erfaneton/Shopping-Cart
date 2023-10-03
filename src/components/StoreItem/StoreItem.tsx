import { Button, Card } from 'react-bootstrap'
import formatCurrancy from '../../utilities/formatCurrancy'

type StoreItemProps = {
    id: number
    name: string
    price: number
    img: string
}


export default function StoreItem({ id, name, price, img }: StoreItemProps) {
    const quantity = 0
    return (
        <Card className='h-100'>
            <Card.Img variant='top' src={img} height='400px' style={{ objectFit: 'cover' }} />
            <Card.Body className='d-flex flex-column' >

                <Card.Title className='d-flex justify-content-between align-item-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrancy(price)}</span>
                </Card.Title>
                <div className='mt-auto'>
                    {quantity === 0 ? (<Button className='w-100'>+ Add To Cart</Button>) : <div className='d-flex align-items-center flex-column' style={{ gap: '.3rem' }}><div className='d-flex align-items-center justify-content-center' style={{ gap: '.3rem' }}>
                        <Button>-</Button>
                        <div>
                            <span className='fs-3'>{quantity}</span>in cart
                        </div>
                        <Button>+</Button>
                    </div>
                        <Button variant='danger' size='sm'>Remove</Button>
                    </div>}
                </div>
            </Card.Body >
        </Card>
    )
}
