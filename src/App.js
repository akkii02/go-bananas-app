import React, { useState, useEffect } from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import { Container, Grid, Typography, CircularProgress, Paper } from '@mui/material';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = posts.filter((post) => post.title.toLowerCase().includes(searchTerm));
    setFilteredPosts(filtered);
  };

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Posts
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={2}>
            {filteredPosts.map((post) => (
              <Grid item xs={12} md={6} lg={4} key={post.id}>
                <Paper elevation={3} sx={{ p: 2, height: '100%',margin:"2px" }}>
                  <Typography variant="h6" sx={{color:"green",width:"100%",height:"100px"}} gutterBottom>{post.title}</Typography>
                  <Typography>{post.body}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default App;