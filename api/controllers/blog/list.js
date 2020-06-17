module.exports = {


  friendlyName: 'List',


  description: 'List blog.',


  inputs: {

    limit: {
      type: 'number'
    },

    skip: {
      type: 'number'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    try {
      const blogs = await Blog.find()
        .limit(inputs.limit)
        .skip(inputs.skip);
      return exits.success(blogs);
    } catch (err) {
      return exits.error(err);
    }

  }


};
