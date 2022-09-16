import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./LoadMoreBtn.css";

const LoadMoreBtn = () => {

    const [load, setLoad] = useState("");
    const navigate = useNavigate();
    
    const stopSubmit = (e) => {
        e.preventDefault();
       
    };

    return (
        <div className="campao_botao">
            <form onSubmit={stopSubmit}>
                <button type="submit" className="botao_filmes">EXPLORE +</button>
            </form>
        </div>
    );

}

export default LoadMoreBtn
