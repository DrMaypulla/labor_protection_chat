<template>

  <div class="instruction-container">

    <h2>📌 Инструкция по использованию чат-бота</h2>

    <hr>

    <h3>📱 Выбор базы знаний в мини-приложении</h3>
    <p>📚 В разделе ИИ выберите ту базу знаний, по теме которой хотели бы задать вопрос (охрана труда или финансовая грамотность). Выбор осуществляется путем нажатия на соответствующее наименование.</p>
    <img src="/select_kb.png" width="370">

    <hr>

    <h3>Как задать вопрос?</h3>
    <ul>
      <li>✅ Формулируйте вопросы четко и конкретно</li>
      <li>❌ «Расскажи про финансы» – слишком общее</li>
      <li>✅ «Как рассчитать проценты по вкладу?» – точный запрос</li>
      <li>❌ «Какие есть налоговые вычеты?»</li>
      <li>✅ «Какие налоговые вычеты положены самозанятым в 2024 году?»</li>
    </ul>

    <hr>

    <h3>Задавайте вопросы последовательно</h3>
    <p>Если тема сложная, разбивайте вопросы на этапы:</p>
    <ul>
      <li>👉 «Как оформить инвестиционный счет?»</li>
      <li>👉 «Какие налоговые льготы для него есть?»</li>
    </ul>

    <hr>

    <h3>🏦 Примеры вопросов по финансовой грамотности</h3>
    <ul>
      <li>✔ «Как создать финансовую подушку безопасности?»</li>
      <li>✔ «Чем отличается дебетовая карта от кредитной?»</li>
      <li>✔ «Какие есть способы инвестирования для новичков?»</li>
    </ul>

    <hr>

    <h3>🏥 Примеры вопросов по охране труда</h3>
    <ul>
      <li>✔ «Какие обязанности у работодателя по охране труда?»</li>
      <li>✔ «Как правильно оформить инструктаж по технике безопасности?»</li>
      <li>✔ «Какие средства индивидуальной защиты нужны на стройке?»</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    closeComponent() {
      this.$router.push('/chat');
    },

  }
};
</script>

<style scoped>
.exit-button {
  position: absolute;
  height: 2.6rem;
  width: 2.6rem;
  top: 0.4rem;
  right: 0.4rem;
  background-color: #ff0000;
  outline: none;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 0.6rem;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.exit-button:hover {
  background-color: #cc0000;}

.instruction-container {

  top: 0;
  left: 0;
  width: 100vw; /* 100% ширины окна */
  height: 100vh; /* 100% высоты окна */
  background-color: #ededed;
  color: rgb(0, 0, 0);
  padding: 2rem;
  text-align: justify;
  overflow-y: auto; /* Прокрутка при необходимости */
}


h2, h3 {
  color: #000000;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

hr {
  margin: 1rem 0;
  border: 0;
  height: 1px;
  background: #ffffff;
}
</style>