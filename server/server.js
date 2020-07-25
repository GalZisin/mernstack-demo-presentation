import app from "./app";

const PORT = process.env.PORT || 8080; // Step 1

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
