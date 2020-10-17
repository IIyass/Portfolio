import React from 'react'
import * as Style from './styles'


const BlogCard = ({ title, Details, image }) => {
    return (
        <Style.Card>
            <h1>{title}</h1>
            <Style.Image image={image} />
            <Style.Details>
                {Details}
            </Style.Details>
        </Style.Card>

    );
}


export default BlogCard