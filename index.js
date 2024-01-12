const express = require("express");

const PORT = 3000;

const app = express();

/*
    NOTE

    Sementara route nya baru get doang sih, klo mau di coba yang post sama yang lain2 nanti dulu deh, ini dulu aja wkwkwkwk
*/

// MAIN ROUTE
app.get("/", (req, res) => {
    // Menampilkan di console server nya
  console.log(`\x1B[37mMAIN ROUTE ACCESSED ON = ${new Date().toLocaleString()}\x1B[39m`);

  // Mengirim respon ke client (bisa ke browser atau berupa respon API ke aplikasi lain) dalam bentuk JSON
  res.json({
    status: "SERVER OK",
    route_details: "MAIN ROUTE",
    server_author: "Fredo-Ronan",
  });
});

// PLACEHOLDER ROUTE (Cuma placeholder aja buat ngetest akses route lain gtu2)
app.get("/placeholder", (req, res) => {
      // Menampilkan di console server nya
  console.log(`\x1B[37mPLACEHOLDER ROUTE ACCESSED ON = ${new Date().toLocaleString()}\x1B[39m`);

  // Mengirim respon ke client (bisa ke browser atau berupa respon API ke aplikasi lain) dalam bentuk JSON
  res.json({
    status: "SERVER OK",
    route_details: "PLACEHOLDER ROUTE",
    server_author: "Fredo-Ronan",
  });
})

app.listen(PORT, () => {
    console.log(`\nServer UP and Listen on PORT ${PORT}...`);
    console.log(`Link => \x1B[34mhttp://localhost:${PORT}\n\x1B[37m`);
});
