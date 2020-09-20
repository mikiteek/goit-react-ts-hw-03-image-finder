import PropTypes from "prop-types";
const fetchImages = (searchQuery = "", page = 1, pageSize = 12) => {
  const url = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&per_page=${pageSize}&image_type=photo&orientation=horizontal&key=17739956-bd5b1f13e46aad2b0c362606a`;
  return fetch(url)
    .then(res => res.json())
    .then(({hits}) => hits);
}

fetchImages.propTypes = {
  searchQuery: PropTypes.string,
  page: PropTypes.number,
  pageSize: PropTypes.number,
}

export default fetchImages;