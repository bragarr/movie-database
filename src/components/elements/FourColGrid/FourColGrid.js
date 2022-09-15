import {
    IMAGEM_URL,
    POSTER_SIZE,
} from "../../config";

const imagemUrl = IMAGEM_URL;
const tamanhoPoster = POSTER_SIZE;

const FourColGrid = ({movie}) => {
    return (
        <div >
            <img src={imagemUrl + tamanhoPoster + movie.poster_path} alt={movie.title} className="conatiner"/>
        </div>
    );
};

export default FourColGrid;