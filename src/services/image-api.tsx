const fetchImages = (searchQuery: string = "", page: number = 1, pageSize: number = 12) => {
  const url = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&per_page=${pageSize}&image_type=photo&orientation=horizontal&key=17739956-bd5b1f13e46aad2b0c362606a`;
  return fetch(url)
    .then(res => res.json())
    .then(({hits}) => hits);
}

export default fetchImages;