import React from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';

const CheckoutCard = ({ course,deleteCourse}) => {
    
    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: "540px" ,boxShadow:"0 0 10px grey"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={course.image} className="img-fluid rounded h-100 p-2" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title">{course.course_name}</h5>
                                    <div>
                                        <img style={{height:"40px",width:"40px",borderRadius:"10px"}} src={course.author.image} alt="" />
                                        <small style={{fontWeight:"bold"}} className='ms-2 text-dark'>{course.author.name}</small>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-5 my-auto text-center">
                                <p style={{fontWeight:"bold" ,marginBottom:"4px"}}>$ {course.price}</p>
                                <p onClick={()=>deleteCourse(course)} ><FaDeleteLeft style={{fontSize:"26px",color:"red"}} /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutCard;