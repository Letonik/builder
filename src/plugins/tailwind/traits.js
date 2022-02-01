export default (editor, config = {}) => {
  const tm = editor.TraitManager;

  tm.addType("class_select", {
    events: {
      change: "onChange",
    },
    createInput({ trait }) {
      const md = this.model;
      const opts = md.get("options") || [];
      const input = document.createElement("select");
      const target_view_el = this.target.view.el;

      for (let i = 0; i < opts.length; i++) {
        const option = document.createElement("option");
        let value = opts[i].value;
        if (value === "") {
          value = "text-black";
        }
        option.text = opts[i].name;
        option.value = value;

        const css = Array.from(target_view_el.classList);

        const value_a = value.split(" ");
        const intersection = css.filter((x) => value_a.includes(x));

        if (intersection.length === value_a.length) {
          option.setAttribute("selected", "selected");
        }

        input.append(option);
      }
      return input;
    },
    onUpdate({ elInput, component }) {
      const classes = component.getClasses();
      const opts = this.model.get("options") || [];
      for (let i = 0; i < opts.length; i++) {
        let value = opts[i].value;
        if (value && classes.includes(value)) {
          elInput.value = value;
          return;
        }
      }
      elInput.value = "text-black";
    },

    onEvent({ elInput, component, event }) {
      const classes = this.model.get("options").map((opt) => opt.value);
      for (let i = 0; i < classes.length; i++) {
        if (classes[i].length > 0) {
          const classes_i_a = classes[i].split(" ");
          for (let j = 0; j < classes_i_a.length; j++) {
            if (classes_i_a[j].length > 0) {
              component.removeClass(classes_i_a[j]);
            }
          }
        }
      }
      const value = this.model.get("value");
      const elAttributes = component.attributes.attributes;
      delete elAttributes[""];

      if (value.length > 0 && value !== "text-black") {
        const value_a = value.split(" ");
        for (let i = 0; i < value_a.length; i++) {
          component.addClass(value_a[i]);
        }
      }
      component.em.trigger("component:toggled");
    },
  });
};
