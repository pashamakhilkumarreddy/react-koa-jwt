const {
  User,
} = require('../models');
const {
  genUniqUsername,
} = require('../utils/helpers');

module.exports = {
  async register(ctx) {
    try {
      const {
        email,
        password,
      } = ctx.request.body;
      const user = await User.findOne({
        email,
      });
      if (user) {
        ctx.response.status = 400;
        ctx.body = {
          success: false,
          status: 400,
          statusMessages: [
            'A user already exists with the given email address. Please login!',
          ],
        };
        return;
      }
      const username = genUniqUsername();
      const newUser = await new User({
        email,
        username,
        password,
      }).save();
      if (newUser) {
        ctx.response.status = 201;
        ctx.body = {
          success: true,
          status: 201,
          statusMessages: [
            'Successfully created a new user',
          ],
        };
        return;
      }
      throw new Error('Unable to create a new user!');
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
  async login(ctx) {
    try {
      const {
        email,
        password,
      } = ctx.request.body;
      const user = await User.findOne({
        email,
      });
      if (!user) {
        ctx.response.status = 404;
        ctx.body = {
          success: false,
          status: 404,
          statusMessages: [
            'Unable to find the user with the given email',
          ],
        };
        return;
      }
      const isValidPassword = await user.comparePassword(password);
      if (isValidPassword) {
        ctx.response.status = 200;
        ctx.body = {
          success: true,
          status: 200,
          refreshToken: user.genRefreshToken(),
          accessToken: user.genAccessToken(),
          user: user.formattedUserObj(),
          statusMessages: [
            'Successfully logged In!',
          ],
        };
        return;
      }
      ctx.response.status = 401;
      ctx.body = {
        success: true,
        status: 401,
        statusMessages: [
          'Invalid password',
        ],
      };
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
