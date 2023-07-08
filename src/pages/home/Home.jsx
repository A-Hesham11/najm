import { Container } from "react-bootstrap";
import "./home.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import items from "./items.json"

const Home = () => {
    const [active, setActive] = useState(false);
    const [groupData, setGroupData] = useState(items);
    const navigate = useNavigate();

    const handleSubmit = (id) => {
        setGroupData(prevArray => prevArray.map(element => {
          if (element.id === id) {
            setActive(true);
            return { ...element, clicked: true }; 
          } else {
            return { ...element, clicked: false };
          }
        }));
    };

    return (
        <div className="home" style={{paddingTop:"100px"}}>
            <Container>
                <div className="text-center m-auto" style={{maxWidth:"996px"}}>
                    <p className="title">اختر نوع الشكوي</p>
                    <div className="group" >
                        {groupData.map((item) => (
                            <div key={item.id} id={item.id} className={`${item.clicked ? "active" : ""} item`} onClick={() => handleSubmit(item.id)} >
                                <img src={item.image}  alt="Image Group" className={`${item.clicked ? "active" : ""}`} />
                                <p className={`${item.clicked ? "active" : ""} m-0`}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => {`${active ? navigate("/dashboard") : null}`}} className={`${active ? "active" : ""} confirm-btn`}>تأكيد</button>
                </div>
            </Container>
        </div>
    );
};

export default Home;