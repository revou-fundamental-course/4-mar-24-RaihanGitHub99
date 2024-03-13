// Hook
import { useState } from 'react';

// Boostrap
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';

// Framer-Motion
import { motion } from 'framer-motion';

// Typing Effect
import { useTypingEffect } from "./components/TypingEffect";

// Data
import { textData } from './data/index';

const App = () => {
    const [validated, setValidated] = useState(false);
    const [gender, setGender] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [bmiResult, setBmiResult] = useState(null);
    const [bmiStatus, setBmiStatus] = useState('');
    const [bmiText, setBmiText] = useState('');
    const [bmiSuggestText, setBmiSuggestText] = useState('');
    const [image, setImage] = useState('');
    const [animationKey, setAnimationKey] = useState(0);

    const calculateBMI = (weight, height) => {
        const bmi = weight / (height * height);
        setBmiResult(bmi.toFixed(2));
        return bmi;
    };

    const setBMIStatus = (bmi) => {
        const bmiRanges = [
            { min: 0, max: 16.5, status: "Severely underweight", text: "text-danger", suggestText: textData.BMI.SeverelyUnderweight },
            { min: 16.5, max: 18.5, status: "Underweight", text: "text-primary", suggestText: textData.BMI.Underweight },
            { min: 18.5, max: 24.9, status: "Normal Weight", text: "text-success", suggestText: textData.BMI.NormalWeight },
            { min: 25, max: 29.9, status: "Overweight", text: "text-primary", suggestText: textData.BMI.OverWeight },
            { min: 30, max: 34.9, status: "Obesity Class I", text: "text-danger", suggestText: textData.BMI.ObessityClassI },
            { min: 35, max: 39.9, status: "Obesity Class II", text: "text-danger", suggestText: textData.BMI.ObessityClassII },
            { min: 40, max: Infinity, status: "Obesity Class III", text: "text-danger", suggestText: textData.BMI.ObessityClassIII },
        ];

        const bmiRange = bmiRanges.find(range => bmi >= range.min && bmi < range.max);

        if (bmiRange) {
            setBmiStatus(bmiRange.status);
            setBmiText(bmiRange.text);
            setBmiSuggestText(bmiRange.suggestText.text);
            setImage(bmiRange.suggestText.image);
        } else {
            setBmiStatus("Invalid BMI");
            setBmiText("text-warning");
            window.alert("Invalid BMI value. Please enter valid height and weight.");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false || gender === '') {
            event.stopPropagation();
        } else {
            const weight = parseFloat(event.target.elements.weight.value);
            const height = parseFloat(event.target.elements.height.value) / 100;
            const bmi = calculateBMI(weight, height);
            setBMIStatus(bmi);
            setShowResult(true);
            setAnimationKey(prevKey => prevKey + 1);
        }

        setValidated(true);
    };

    const handleReset = () => {
        setValidated(false);
        setGender('');
        setShowResult(false);
        setAnimationKey(prevKey => prevKey + 1);
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
                    <Row md='2' className="shadow-sm mt-4 border rounded-4 animate__animated animate__fadeInLeft" key={animationKey}>
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
                        <Col md='4' className='p-2 border rounded'>
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
    );
};

export default App;