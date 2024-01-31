const { app, port, express } = require('./config/config');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');

app.use(express.json());
app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use('/property', propertyRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});