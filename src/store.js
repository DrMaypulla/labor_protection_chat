import { createStore } from 'vuex';
import instance from "./Api/instance.js";

export default createStore({
  state: {
    news: null,
    passed_surveys: [],
    surveys: [],
    currentSurveyId: null,
  },

  getters: {
    GET_NEWS: state => {
      return state.news;
    },
    GET_SURVEYS: state => {
      return state.surveys;
    },
    GET_PASSED_SURVEYS: state => {
      return state.passed_surveys;
    },
    GET_CURRENT_SURVEY_ID: state => {
      return state.currentSurveyId;
    }
  },

  mutations: {
    SET_NEWS(state, payload) {
      state.news = payload;
    },
    SET_SURVEYS(state, payload) {
      state.surveys = payload;
    },
    SET_PASSED_SURVEYS(state, payload) {
      state.passed_surveys = payload;
    },
    SET_CURRENT_SURVEY_ID(state, payload) {
      state.currentSurveyId = payload;
    }
  },

  actions: {
    getAllNews: (context) => {
      instance.get('/news/all').then(response => {
        context.commit('SET_NEWS', response.data);
      })
    },
    getAllSurveys: (context) => {
      instance.get('/surveys/all').then(response => {
        context.commit('SET_SURVEYS', response.data);
      })
    },
    getPassedSurveys: (context, surveys) => {
      let tg = window.Telegram.WebApp;
      instance.get('/surveys/passed_tests', {params: {init_data: tg.initData}}).then(res => {
        context.commit('SET_PASSED_SURVEYS', res.data);
      })
    },
    setCurrentSurveyId: (context, surveyId) => {
      context.commit('SET_CURRENT_SURVEY_ID', surveyId);
    },
  }
});