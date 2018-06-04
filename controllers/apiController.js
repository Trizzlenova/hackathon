function index(req, res) {
  res.json({
    message: 'VOTE!',
        base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api'
      }
    ]
  });
}

module.exports = {
  index,
}
