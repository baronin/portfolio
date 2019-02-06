const openCloseMixin = {
  data: function() {
    return {
      isVisible: false,
    };
  },
  methods: {
    open: function() {
      this.isVisible = true;
    },
    close: function() {
      this.isVisible = false;
    },
  },
};

export default openCloseMixin;
