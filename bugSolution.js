const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... database query to fetch user ...
    const fetchedUser = await database.getUser(userId);
    if (!fetchedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ user: fetchedUser });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));