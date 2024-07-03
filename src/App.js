import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form, Accordion } from 'react-bootstrap';
import Calendar from './Calendar';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [newEvent, setNewEvent] = useState({ date: '', time: '', title: '', description: '', guests: '' });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleSave = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ date: '', time: '', title: '', description: '', guests: '' });
    setShowModal(false);
  };

  const handleDateClick = date => {
    setSelectedDate(date);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value, date: selectedDate });
  };

  const handleDelete = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  const selectedDayEvents = events.filter(event => new Date(event.date).toDateString() === selectedDate.toDateString());

  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={4}>
          <Button variant="primary" onClick={handleShow} className="mb-3">Yeni Etkinlik</Button>
          <h5>Seçili Gün: {selectedDate.toLocaleDateString('tr-TR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h5>
          {selectedDayEvents.length > 0 ? (
            <Accordion defaultActiveKey="0">
              {selectedDayEvents.map((event, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{event.time} - {event.title}</Accordion.Header>
                  <Accordion.Body>
                    {event.description}
                    <br />
                    <small>Davetliler: {event.guests}</small>
                    <br />
                    <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>Kaldır</Button>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <p>Bugüne planlanmış etkinlik yok.</p>
          )}
        </Col>
        <Col sm={8}>
          <Calendar events={events} onDateClick={handleDateClick} />
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Yeni Etkinlik</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formDate">
              <Form.Label>Etkinlik Günü</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={getFormattedDate(selectedDate)}
                min={getFormattedDate(new Date())}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formTime">
              <Form.Label>Etkinlik Saati</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={newEvent.time}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label>Etkinlik Adı</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Etkinlik Açıklaması</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={newEvent.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGuests">
              <Form.Label>Davetliler</Form.Label>
              <Form.Control
                type="text"
                name="guests"
                value={newEvent.guests}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Kapat</Button>
          <Button variant="primary" onClick={handleSave}>Kaydet</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default App;
  