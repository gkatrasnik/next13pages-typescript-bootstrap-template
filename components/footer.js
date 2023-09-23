import { Container } from 'react-bootstrap'

export default function MyFooter() {
  return (
    <Container fluid className="bg-light py-3">
      <Container>
        <p className="text-center mb-0">© 2023 AB Bike. All rights reserved.</p>
      </Container>
    </Container>
  )
}