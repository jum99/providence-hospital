import React, { useEffect, useState } from 'react';
import './Blog.css';

const article = [

    {
        img: "https://hygger.io/wp-content/uploads/2019/12/535bca2223e6debf446ff3d7876e1ccc.jpg",
        name: "Family Health Care Project",
        descrip: "This project designed by the authority because they want to give safety to all kind of people for better health condition. From the beginning of the hospital they are providing health concerns to people."

    },
    {
        img: "https://thumbayhospital.com/wp-content/uploads/2019/04/thumbay-dental-hospital-celebrates-first-anniversary-adds-cbct-3d-dental-imaging-to-its-state-of-the-art-technologies.jpg",
        name: "Inauguration Ceremony",
        descrip: "The new SDH building was inaugurated by Sri Manik Sarkar, Honorable Chief Minister of Sylhet at 12.00 noon on 2nd June, 2012 in presence of Sri Badal Choudhury, Honorable Health Minister and Family Welfare Department."
    },
    {
        img: "https://cdn.pixabay.com/photo/2019/01/01/13/08/insurance-3906680_960_720.jpg",
        name: "Family Health Card Distribution",
        descrip: "Many people are not aware of health condition of their family members. So, this hospital provide everyone a health card for all of their family members so that they can contact via number if they face any health condition."

    }
]

const Blog = () => {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        setBlog(article)
    }, []);

    return (
        <>
            <div className="container doctor">
                <h1 className="title mt-5 mb-5 text-center">Recent News And Blogs</h1>
                <div className="row justify-content-center">
                    {
                        blog.map(article => <div className="col-lg-4 col-sm-6">
                            <div className="blog-item mb-4">
                                <div className="top">
                                    <a href='/' target='_blank'>
                                        <img src={article.img} alt="" className="blog-img w-100" />
                                    </a>
                                </div>

                                <div className="blog-bottom">
                                    <h3>{article.name}</h3>
                                    <p className="mt-4">{article.descrip}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default Blog;