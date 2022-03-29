import React from 'react'
import BlogCard  from '../BlogCard/BlogCard'
import { Container } from '@material-ui/core' 
import Masonry from 'react-masonry-css';


const Bloglist = ({blogs, setBlogData}) => {
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1,
    }

    return (

        <Container>
            <Masonry 
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                 {blogs.map((blog)=>(
                    <div key={blog.id} >
                    <BlogCard  blog={blog} setBlogData={setBlogData} />
                    </div>
                 )) }
        </Masonry>
            
        </Container>
    )
}

export default Bloglist
