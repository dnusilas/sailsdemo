const { exists } = require("grunt");

module.exports = {


  friendlyName: 'Create',


  description: 'Create blog.',


  inputs: {
    title: {
      type: 'string',
      required: true
    },

    description: {
      type: 'string',
      required: true
    },

    isPin: {
      type: 'boolean'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    try {
      const blog = await Blog.create(_.pick(inputs, ['title', 'description', 'isPin'])).fetch();

      return exits.success(blog);
    } catch (err) {
      return exits.error(err);
    }

  }


};
