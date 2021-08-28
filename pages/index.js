import React ,{useState} from "react"
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Logo from "../public/images/Logo.png";
import Icon from "../public/images/arrow-right.png"
import Avatar from '../public/images/Avatar.png'
import {
  Button,
  Form,
  FormGroup,
  Label,
  FormText,
  Row,
  Col,
  Badge,
  ListGroup,
  ListGroupItem,
  CardImg,
  email,
} from "reactstrap";

export default function Home() {
 
  const [picture, setPicture] = useState(Avatar);
  const [imgData, setImgData] = useState(Avatar);
  const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <>
      <div className="container mt-2">
        <div className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-md-12">
              <div
                className={styles.logo1}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image src={Logo}></Image>
              </div>
            </div>
            <div className="col-sm-12" className={styles.cntr}>
              <div className="mt-5">
                <ul className={styles.progressBar}>
                  <li className={(styles.active, styles.active1)}>
                    <span className={styles.steps}> STEP 1:</span> <br />
                    CREATE YOUR <br /> ACCOUNT <br /> PASSWORD{" "}
                  </li>
                  <li className={(styles.active, styles.active2)}>
                    <span className={styles.steps}> STEP 2:</span> <br />PERSONAL <br /> INFORMATION{" "}
                    
                  </li>
                  <li className={styles.active3}>
                    <span className={styles.steps}> STEP 3:</span> <br />EMPLOYMENT <br /> DETAILS{" "}
                    
                  </li>
                  <li className={styles.active4}>
                    <span className={styles.steps}> STEP 4:</span> <br /> UPLOAD<br /> DOCUMENTS{" "}
                   
                  </li>
                  <li className={styles.active5}>
                    <span className={styles.steps}> STEP 5:</span> <br /> COMPLETE{" "}
                   
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-8 bg-white">
              <div className="mt-5">
                <h1 className={styles.heading}>Create Your Account</h1>
              </div>

              <p className={styles.first_Para}>
                Because there will be doucments that you need to prepare to
                apply for the loan , let's start off by creating a password so
                that you can login to your account once you have these document
                redy.
              </p>

              <div>
                <Form className="step2 mt-3">
                  <Row>
                    <Col md={3}>
                      <Row>
                        <Col md={12}>
                          <div
                            className="imagediv"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              marginTop: "20px",
                             
                            }}
                          >
                            <Image
                              src={imgData}
                              alt=""
                              width="100px"
                              height="100px"                            
                              className={styles.imgr}
                            />
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mt-2 mb-5">
                            <label for="img" class="btn" className={styles.uploadtext} style={{ fontFamily: 'Open Sans',
  fontWeight: 'bold',
  fontSize: '16px',
  color:' #000',
  marginLeft: '40px'}}>Upload</label>
                            <input type="file" onChange={onChangePicture} id='img'  accept="image/*"
  style={{display:"none"}}/>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={9}>
                      <Row className="justify-content-center">
                        <Col md={5}>
                          <FormGroup label="Children Step 1 m-3">
                            <Label className={styles.label}>Name</Label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className={styles.Input}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={5}>
                          <FormGroup label="Children Step 1 m-3">
                            <Label className={styles.label}>Email</Label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className={styles.Input}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={5} className="mt-3">
                          <FormGroup label="Children Step 1 m-3">
                            <Label className={styles.label}>Password</Label>
                            <input
                              type="text"
                              name="password"
                              id="password"
                              className={styles.Input}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={5} className="mt-3">
                          <FormGroup label="Children Step 1 m-3">
                            <Label className={styles.label}>
                              Confirm Password
                            </Label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className={styles.Input}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={12}>
                          <div>
                          <Button className={styles.btn} >
                 Sava & Next<Image src={Icon} className={styles.imgIcon}
                ></Image>
                  </Button>
                          </div>
                        </Col>
                      </Row>
                    </Col>

                  </Row>

                  
                </Form>
             
              </div>
            </div>
          </div>
        </div>
   
      </div>
    </>
  );
}
