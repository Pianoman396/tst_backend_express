const { check } = require("express-validator");
const { UnprocessableEntity } = require("../../constants/errors");
const validate = require("../../middleware/validation.middleware");

const getAuth = [
  check("user")
    .notEmpty()
    .withMessage({
      code: UnprocessableEntity,
      message: "user: parameter is required",
    })
    .bail()
    .custom((value) => value.id)
    .withMessage({
      code: UnprocessableEntity,
      message: "user.id: parameter is required",
    }),
  validate,
];

const login = [
  check("email")
    .notEmpty()
    .withMessage({
      code: UnprocessableEntity,
      message: "email: parameter is required",
    })
    .bail()
    .isEmail()
    .withMessage({
      code: UnprocessableEntity,
      message: "email: must be a valid email address",
    }),

  check("password")
    .notEmpty()
    .withMessage({
      code: UnprocessableEntity,
      message: "password: parameter is required",
    })
    .bail()
    .isLength({ min: 6 })
    .withMessage({
      code: UnprocessableEntity,
      message: "password: must be at least 6 characters long",
    }),
  validate,
];

const register = [
  check("full_name")
    .notEmpty()
    .withMessage({
      code: UnprocessableEntity,
      message: "full_name: parameter is required",
    })
    .bail()
    .isLength({ min: 2 })
    .withMessage({
      code: UnprocessableEntity,
      message: "full_name: must be at least 2 characters long",
    }),

  check("email")
    .notEmpty()
    .withMessage({
      code: UnprocessableEntity,
      message: "email: parameter is required",
    })
    .bail()
    .isEmail()
    .withMessage({
      code: UnprocessableEntity,
      message: "email: must be a valid email",
    }),

  check("password")
    .notEmpty()
    .withMessage({
      code: UnprocessableEntity,
      message: "password: parameter is required",
    })
    .bail()
    .isLength({ min: 6 })
    .withMessage({
      code: UnprocessableEntity,
      message: "password: must be at least 6 characters",
    }),
  validate
];

const test = [
  check("email")
    .notEmpty()
    .withMessage({
      code: UnprocessableEntity,
      message: "email: parameter is required",
    })
    .bail()
    .isEmail()
    .withMessage({
      code: UnprocessableEntity,
      message: "email: must be a valid email address",
    }),
];

module.exports = {
  getAuth,
  login,
  register,
  test
};
