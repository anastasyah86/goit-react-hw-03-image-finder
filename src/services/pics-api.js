import axios from "axios";
const key = "3533171-8055817a9c2a16331b7f6fbf1";

// axios.defaults.headers.common["Authorization"] =
//   "Bearer 3533171-8055817a9c2a16331b7f6fbf1";

const fetchPics = ({ searchQuery = "", currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${key}&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=${pageSize}
`
    )
    .then((response) => response.hits)
    .catch(console.log);
};

export default { fetchPics };
