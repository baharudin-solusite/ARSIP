// OS module
// OS module merupakan module yang digunakan untuk menyediakan informasi terkait sistem operasi komputer yang digunakan user.
const os = require("os");
console.log("Platform:" + os.platform());
console.log("Architecture:" + os.arch());
