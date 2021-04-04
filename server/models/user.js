module.exports = function (sequelize, DataTypes) {
  return sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passwordhash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

// module.exports = function (sequelize, DataTypes) {
//   return sequelize.define("userinfo", {
//     dateOfBirth: {
//       type: DataTypes.DATEONLY,
//       allowNull: false,
//       validate: {
//         isBefore: "2005-01-01",
//       },
//     },
//     age: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       validate: {
//         max: 110,
//       },
//     },
//     heightInInches: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//     },
//     weightInPounds: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//     },
//     goal: {
//       type: DataTypes.TEXT,
//       allowNull: true,
//     },
//   });
// };
