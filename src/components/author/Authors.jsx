import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS_INFO } from '../../graphql/queries';
import { Grid, Avatar, Typography, Divider } from "@mui/material"

const Authors = () => {
    const {loading , data , errors} = useQuery(GET_AUTHORS_INFO);

    console.log(data)

    if(loading) return <h3>Loading ...</h3>

    if(errors) return <h3>Something went wrong</h3>
    const { authors } = data;
    return (
        <Grid container sx={{boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4}}>
           {authors.map(author => (
            <React.Fragment key={author.id}>
            <Grid item xs={12} padding={2}  >
                <a href={`/authors/${author.slug}`} style={{display:"flex", alignItems:"center", textDecoration:"none"}}>
                <Avatar src={author.avatar.url} sx={{marginLeft: 2}}/>
                <Typography component="p" variant="p" color="text.secondary">{author.name}</Typography>
                </a>
            </Grid>
            <Grid>
                <Divider variant="middle"/>
            </Grid>
           </React.Fragment>
           ))}
        </Grid>
    );
};

export default Authors;