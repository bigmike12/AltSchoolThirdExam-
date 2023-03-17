<template>
  <div class="counter">
    <h1>Counter</h1>
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="reset">Reset</button>
    </div>
    <div class="input">
      Set Count,
      <input @input="setCounter" type="text" placeholder="Set Count" />
    </div>
    <p>Count: {{ counter }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.counter;
    },
  },
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    reset() {
      this.$store.dispatch("reset");
    },
    setCounter(e) {
      this.$store.dispatch("setCounter", e.target.value);
    },
  },
};
</script>

<style>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.counter button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.3s;
}

.counter button:hover {
  background-color: #3e8e41;
}

.input {
  margin-top: 10px;
  display: flex;
}
</style>
