'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    startDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true,
        isBefore: this.endDate,
      }
    },
    endDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true,
        isAfter: this.startDate,
        endDateAfterStartDate(value) {
          const startDate = new Date(this.startDate);
          const endDate = new Date(value);

          if (endDate <= startDate) {
            throw new Error('endDate cannot come before startDate');
          };
        },
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};
