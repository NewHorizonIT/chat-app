import app from "./src/app.js";

const server = app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server is close");
  });
});
