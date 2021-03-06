import React from "react";
import { useState } from "react";
import Bloglist from "../Bloglist/Bloglist";
import Footer from "../Footer/footer";
import Layout from "../Layout";

const Home = ({ blogData }) => {
  const [searchDog, setSearchDog] = useState("");

  const onSearchChange = (event) => {
    const searchDogString = event.target.value.toLowerCase();
    setSearchDog(searchDogString);
  };

  const filteredBlogs = blogData.filter((blog) => {
    return blog.breed.toLowerCase().includes(searchDog.toLowerCase());
  });

  console.log(filteredBlogs);
  return (
    <>
      <Layout>
        <div className="box">
          <input
            className="search_box"
            type="search"
            placeholder="Search Breed..."
            value={searchDog}
            onChange={(event) => onSearchChange(event)}
          />
        </div>
        <Bloglist blogs={filteredBlogs} />
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
