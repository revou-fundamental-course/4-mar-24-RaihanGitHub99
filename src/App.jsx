// Hook
import { useState } from 'react';

// Boostrap
import { Container, Row, Col, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

// Framer-Motion
import {motion} from 'framer-motion'

// Typing Effect
import { useTypingEffect } from "./components/TypingEffect";

// Data
import {textData} from './data/index'

const App = () => {
    // Validate Form Input
    const [validated, setValidated] = useState(false);
    const [gender, setGender] = useState('');
    
    // Open Tab Result
    const [showResult, setShowResult] = useState(false);

    // Result BMI
    const [bmiResult, setBmiResult] = useState(null);
    const [bmiStatus, setBmiStatus] = useState('');
    const [bmiText, setBmiText] = useState('');
    const [bmiSuggestText, setBmiSuggestText] = useState('');
    const [image, setImage] = useState('')

    // Animation Text
    const [animationKey, setAnimationKey] = useState(0);

    /* 
        Rest Of Script Hook
    */
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false || gender === '') {
            event.stopPropagation();
        } else {
            const weight = parseFloat(event.target.elements.weight.value);
            const height = parseFloat(event.target.elements.height.value) / 100;
            const bmi = weight / (height * height);

            setBmiResult(bmi.toFixed(2));
            setShowResult(true);
            setAnimationKey(animationKey + 1);

            if (bmi > 0 && bmi < 16.5) {
                setBmiStatus("Severely underweight");
                setBmiText("text-danger");
                setBmiSuggestText(textData.BMI.SeverelyUnderweight.text);
                setImage(textData.BMI.SeverelyUnderweight.image);
            } else if (bmi >= 16.5 && bmi < 18.5) {
                setBmiStatus("Underweight");
                setBmiText("text-primary");
                setBmiSuggestText(textData.BMI.Underweight.text);
                setImage(textData.BMI.Underweight.image);
            } else if (bmi >= 18.5 && bmi < 24.9) {
                setBmiStatus("Normal Weight");
                setBmiText("text-success");
                setBmiSuggestText(textData.BMI.NormalWeight.text);
                setImage(textData.BMI.NormalWeight.image);
            } else if (bmi >= 25 && bmi < 29.9) {
                setBmiStatus("Overweight");
                setBmiText("text-primary");
                setBmiSuggestText(textData.BMI.OverWeight.text);
                setImage(textData.BMI.OverWeight.image);
            } else if (bmi >= 30 && bmi < 34.9) {
                setBmiStatus("Obesity Class I");
                setBmiText("text-danger");
                setBmiSuggestText(textData.BMI.ObessityClassI.text);
                setImage(textData.BMI.ObessityClassI.image);
            } else if (bmi >= 35 && bmi < 39.9) {
                setBmiStatus("Obesity Class II");
                setBmiText("text-danger");
                setBmiSuggestText(textData.BMI.ObessityClassII.text);
                setImage(textData.BMI.ObessityClassII.image);
            } else if (bmi >= 40) {
                setBmiStatus("Obesity Class III");
                setBmiText("text-danger");
                setBmiSuggestText(textData.BMI.ObessityClassIII.text);
                setImage(textData.BMI.ObessityClassIII.image);
            } else {
                setBmiStatus("Invalid BMI");
                setBmiText("text-warning");
                window.alert("Invalid BMI value. Please enter valid height and weight.");
            }
        }
        setValidated(true);
    };

    const handleReset = () => {
        setValidated(false);
        setGender('');
        setShowResult(false);
        setAnimationKey(animationKey + 1);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const headerText = useTypingEffect(textData.header.text, 20);
    const bmiSuggest = useTypingEffect(bmiSuggestText, 20);

    return (
        <div className="bmi-calculator">
            <Container className="bmi-calculator-container shadow-lg p-5">
                <Row>
                    <Col>
                        <h1 className='animate__animated animate__bounceInLeft'>BMI Calculator</h1>
                        <p className="">{headerText}</p>
                    </Col>
                </Row>
                <Row className='form-box shadow-sm p-3 border rounded-4 animate__animated animate__backInLeft'>
                    <Col>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} onReset={handleReset}>
                            <FloatingLabel controlId="gender" label="Jenis Kelamin" className="mb-3">
                                <Form.Select
                                    value={gender}
                                    onChange={handleGenderChange}
                                    required
                                    >
                                    <option value="">Pilih Jenis Kelamin</option>
                                    <option value="1">Laki-Laki</option>
                                    <option value="2">Perempuan</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    Harap pilih Jenis Kelamin.
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="weight"
                                label="Berat Badan (kg)"
                                className="mb-3"
                                >
                                <Form.Control
                                    type="number"
                                    placeholder=""
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Harap berikan Berat Badan yang valid.
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="height"
                                label="Tinggi Badan (cm)"
                                className="mb-3"
                                >
                                <Form.Control
                                    type="number"
                                    placeholder=""
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Harap berikan Tinggi Badan yang valid.
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="age"
                                label="Umur (Tahun)"
                                className="mb-3"
                                >
                                <Form.Control
                                    type="number"
                                    placeholder=""
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Harap berikan Umur yang valid.
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <Button type="submit" className="me-2">
                                Hitung BMI
                            </Button>
                            <Button type="reset" variant="secondary">
                                Reset
                            </Button>
                        </Form>
                    </Col>
                </Row>
                {showResult && (
                    <Row md='2'className="shadow-sm mt-4 border rounded-4  animate__animated animate__fadeInLeft" key={animationKey}>
                        <Col md='8' className='p-4 border rounded'>
                            <div>
                                <h5>Hasil BMI Kamu:</h5>
                                <h2>{bmiResult}</h2>
                            </div>
                            <div className={`${bmiText} animate__animated animate__flash animate__repeat-3`}>
                                <p className='h2'>{bmiStatus}</p>
                            </div>
                            <div>
                                <p>{bmiSuggest}</p>
                            </div>
                            <div>
                                <Button variant="primary" className="me-2" href="https://www.klikdokter.com/tanya-dokter/gizi-klinik" target="_blank" rel="noopener noreferrer">Konsultasi Sekarang!</Button>
                            </div>
                        </Col>
                        <Col md='4'className='p-2 border rounded'>
                            <motion.div
                                animate={{
                                scale: [1, 2, 2, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                                }}
                                transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeatDelay: 1,
                                }}
                            >
                                <img src={image} className='image-status' alt='BMI Status' />
                            </motion.div>
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    )
}

export default App