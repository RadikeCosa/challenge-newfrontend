import ReactDOMServer from "react-dom/server";
import Swal from "sweetalert2";
import apiService from "../../service/apiService";
import RatingSelect from "./RatingSelect";

const { submitVote, updateVote } = apiService;

const VoteModal = (title, defaultValue, userId, movieId, isUpdate = false) => {
  return Swal.fire({
    title,
    html: ReactDOMServer.renderToString(
      <RatingSelect defaultValue={defaultValue} id="ratingSelect" />
    ),
    focusConfirm: false,
    preConfirm: () => {
      const newRating = document.getElementById("ratingSelect").value;
      const voteData = { user_id: userId, movie_id: movieId, rating: newRating };

      const request = isUpdate ? updateVote(voteData) : submitVote(voteData);

      return request
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            return Swal.fire(
              `Tu voto ha sido ${
                isUpdate ? "actualizado" : "registrado"
              } con éxito`
            );
          } else {
            throw new Error(
              `Error al ${isUpdate ? "actualizar" : "registrar"} el voto`
            );
          }
        })
        .catch((error) => {
          Swal.showValidationMessage(`Request failed: ${error.message}`);
        });
    },
  });
};

export default VoteModal;