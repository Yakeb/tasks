import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

export function EditMode() {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleIsStudentChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIsStudent(event.target.checked);
    };

    const handleEditModeChange = () => {
        setEditMode(!editMode);
    };

    return (
        <>
            <div>
                {!editMode ? (
                    <>
                        {name} is {isStudent ? "a" : "not a"} student
                    </>
                ) : (
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check
                                        type="checkbox"
                                        label="I am a student"
                                        checked={isStudent}
                                        onChange={handleIsStudentChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                )}
            </div>
            <div>
                <Form.Check
                    type="switch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={handleEditModeChange}
                />
            </div>
        </>
    );
}
