const App = {
  data() {
    return {
      counter: 0,
      title: "Счетчик",
      titleTodo: "Todo - List",
      placeholderString: "Введите текст заметки",
      inputValue: "",
      notes: ["Item 1", "asdf"],
      person: {
        name: "Rustam Samiev",
        dev: "Native Hook Front-end developer",
        age: 30,
      },
    };
  },
  methods: {
    // inputChangeHandler(event) {
    //   this.inputValue = event.target.value;
    // },
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    // inputKeyPress(event) {
    //   if (event.key === "Enter") {
    //     this.addNewNote();
    //   }
    // },
    // doubleCount() {
    //   console.log("doubleCount");
    //   return this.notes.length * 2;
    // },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    removeNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(val) {
      if (val.length > 10) {
        this.inputValue = "";
      }
      console.log("input Value change", val);
    },
  },
};

Vue.createApp(App).mount("#app");
