const {
  isValidEmail,
  isValidPassword,
} = require('../utils/validations');
const {
  emptyEmailText,
  emptyPasswordText,
} = require('../utils/constants');

module.exports = {
  validateAuthFields(ctx, next) {
    try {
      const {
        email,
        password,
      } = ctx.request.body;
      const errors = [];
      if (!email || !email.trim()) {
        errors.push(emptyEmailText);
      }
      if (!password || !password.trim()) {
        errors.push(emptyPasswordText);
      }
      if (errors.length) {
        ctx.response.status = 401;
        ctx.body = {
          success: false,
          status: 401,
          statusMessages: [
            ...errors,
          ],
        };
        return;
      }
      const emailValidation = isValidEmail(email.trim());
      const passwordValidation = isValidPassword(password.trim());
      if (!emailValidation.isValid) {
        errors.push(emailValidation.message);
      }
      if (!passwordValidation.isValid) {
        errors.push(passwordValidation.message);
      }
      if (errors.length) {
        ctx.response.status = 401;
        ctx.body = {
          success: false,
          status: 401,
          statusMessages: [
            ...errors,
          ],
        };
        return;
      }
      ctx.request.body.email = email.trim();
      ctx.request.body.password = password.trim();
      return next(); // eslint-disable-line consistent-return
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        success: false,
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
};
