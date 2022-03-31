import React from 'react'
import BlogCard  from '../BlogCard/BlogCard'
import { Container } from '@material-ui/core' 
import Masonry from 'react-masonry-css';
import { Link } from "react-router-dom";



const Bloglist = ({blogs, setBlogData}) => {
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1,
    }

    return (
      <div className="blogl">
        <Container>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {blogs.map((blog) => (
              <Link
              to= {`/dogs/${blog.id}`}
              >
                <div key={blog.id}>
                  <BlogCard blog={blog} setBlogData={setBlogData} />
                </div>
              </Link>
            ))}
          </Masonry>
        </Container>
      </div>
    );
}

export default Bloglist
