const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  method1() {
    this.log("method 1 just ran");
  }

  propmpting() {
    this.log(
      yosay(`Welcome to the exquisite ${chalk.red(`MERN STARTER`)} generator!`)
    );
  }
  installing() {
    this.installDependencies({ npm: true, bower: false, yarn: false });
  }
};

// lost
