import { Container } from "react-bootstrap";
import "./dashboard.css";
import { useState } from "react";
import data from "./data.json";

const Dashboard = () => {
    const [show, setShow] = useState([]);

    const handleShow = (id) => {
        if (show.includes(id)) {
            setShow(prevIds => prevIds.filter(activeId => activeId !== id));
          } else {
            setShow(prevIds => [prevIds, id]);
        }
    }

    return (
        <div className="dashboard" style={{marginTop:'120px'}}>
            <Container>
                <ul className="text-center p-0">
                    <li>شكاوي جديدة 
                        <p>150</p>
                    </li>
                    <li>شكاوي تم اعتمادها        
                        <p>150</p>
                    </li>
                    <li>الشكاوي المرفوضة   
                        <p>44</p>
                    </li>
                    <li>الشكاوي المرفوضة        
                        <p>44</p>
                    </li>
                </ul>
                <div className="select">
                    <p className="m-md-0 mb-sm-3 text-center text-md-end">الشكاوي الجديدة</p>
                    <div className="d-flex gap-2 align-items-center">
                        <span>التاريخ</span>
                        <select className="form-select" dir="rtl" >
                            <option>الكل</option>
                            <option value="1">One</option>
                        </select>
                    </div>
                    <div className="classify d-flex gap-2 align-items-center">
                        <span>التصنيف</span>
                        <select className="form-select" dir="rtl" >
                            <option>الكل</option>
                            <option value="1">One</option>
                        </select>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                        <span>الحالة</span>
                        <select className="form-select" dir="rtl" >
                            <option>الكل</option>
                            <option value="1">One</option>
                        </select>
                    </div>
                </div>
                <div className='table-container mt-4 mb-5 w-100'>
                    <table className="w-100">
                        <thead>
                            <tr className='p-5' style={{verticalAlign: "middle"}}>
                                <th className="text-end pe-2">رقم الشكوي</th>
                                <th>نوع الشكوي</th>
                                <th>تاريخ الشكوي</th>
                                <th>المدينة</th>
                                <th>الادارة</th>
                                <th>الحالة</th>
                                <th className="text-start ps-3">عرض</th>
                            </tr>
                        </thead>
                        {data.map((item, index) => (
                            <tbody key={item.id} className="text-center">
                                <tr style={{backgroundColor: show.includes(item.id) ? '#F6F6F6' : 'transparent',
                                     borderBottom :  show.includes(item.id + 1) || show.includes(item.id) ? 'none' : '1px solid #656565'}}
                                >
                                    <th>{index + 1}</th>
                                    <td>{item.type}</td>
                                    <td>{item.date}</td>
                                    <td>{item.location}</td>
                                    <td>{item.admin}</td>
                                    <td style={{color: "#FFAB5F"}}>{item.condition}</td>
                                    <td className="text-start ps-3" style={{ minWidth:"90px", cursor:"pointer" }} onClick={() => handleShow(item.id)}>
                                        <img src="/images/show.svg" alt="Show" className={`${show.includes(item.id) ? "active" : 'bg-transparent'}`}/>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default Dashboard;

