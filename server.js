var express = require('express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var swtoolRouter = require("./routes/SwtoolRout");
var HospitalRout = require("./routes/HospitalRout");

var app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);

//sw Tool 조회
app.use("/api/Hospital", HospitalRout);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));