module.exports = {


  friendlyName: 'Edit',


  description: 'Edit blog.',


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
      const blogId = this.req.param('id');
      const blog = await Blog.updateOne({ id: blogId })
        .set(_.pick(inputs, ['title', 'description', 'isPin']));

      return exits.success(blog);
    } catch (err) {
      return exits.error(err);
    }

  }


};
