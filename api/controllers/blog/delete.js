module.exports = {


  friendlyName: 'Delete',


  description: 'Delete blog.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    try {
      const blogId = this.req.param('id');
      await Blog.destroy({ id: blogId });

      return exits.success();
    } catch (err) {
      return exits.error(err);
    }

  }


};
