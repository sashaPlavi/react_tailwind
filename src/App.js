import React, { useState, useEffect } from "react";
import ImgCard from "./components/ImgCards";
import ImgSearch from "./components/ImgSearch";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    console.log(process.env.REACT_APP_PIXABY_KEY);

    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABY_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <div className="container mx-auto">
      <ImgSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>
      )}
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">loading..</h1>
      ) : (
        <div class="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImgCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
