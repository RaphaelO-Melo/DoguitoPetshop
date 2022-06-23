import { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { busca } from "../api/api";
import '../assets/css/post.css';

export default function Post(){
    
    const navigate = useNavigate();
    const { id } = useParams();
    const[post, setPost] = useState({});

    console.log(post);

    useEffect(() => {
        busca(`/posts/${id}`, setPost).catch(() => {
            navigate('/404');
        });
    }, [id]);
    
    return (
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">
                    {post.title}
                </h2>
                <p className="cartao__texto">
                    {post.body}
                </p>
            </article>
        </main>
    );
}