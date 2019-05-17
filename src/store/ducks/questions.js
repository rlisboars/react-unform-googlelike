import uuidv4 from 'uuid/v4'
// TYPES

export const Types = {
  CHANGE_TITLE: 'questions/CHANGE_TITLE',
  CHANGE_DESCRIPTION: 'questions/CHANGE_DESCRIPTION',
  SET_ANSWERING: 'questions/SET_ANSWERING',
  ADD_QUESTION: 'questions/ADD_QUESTION',
  CHANGE_QUESTION: 'questions/CHANGE_QUESTION',
  REMOVE_QUESTION: 'questions/REMOVE_QUESTION',
  COPY_QUESTION: 'questions/COPY_QUESTION',
  SET_ACTIVE: 'questions/SET_ACTIVE',
  SET_INACTIVE: 'questions/SET_INACTIVE',
  ADD_ANSWERS: 'questions/ADD_ANSWERS',
  CHANGE_TAB: 'questions/CHANGE_TAB'
}

// REDUCERS

const INITIAL_STATE = {
  activeTab: 0,
  formTitle: 'Título do formulário de exemplo',
  formDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum libero quis eros congue, eu egestas diam tincidunt. Vivamus maximus pharetra porta. Nunc a purus sollicitudin, vehicula nunc commodo, hendrerit odio. In hac habitasse platea dictumst. Phasellus sollicitudin placerat neque, eu mollis felis sodales ac.',
  questions: [
    {
      id: uuidv4(),
      type: 'short',
      question: 'Pergunta com resposta curta',
      active: true,
      options: [{ id: uuidv4(), option: 'Opção 1' }],
      answers: []
    },
    {
      id: uuidv4(),
      type: 'long',
      question: 'Pergunta com resposta longa',
      options: [{ id: uuidv4(), option: 'Opção 1' }],
      answers: []
    },
    {
      id: uuidv4(),
      type: 'radio',
      question: 'Pergunta com opção única',
      options: [
        { id: uuidv4(), option: 'Opção 1' },
        { id: uuidv4(), option: 'Opção 2' }
      ],
      answers: []
    },
    {
      id: uuidv4(),
      type: 'check',
      question: 'Pergunta com opção múltipla',
      options: [
        { id: uuidv4(), option: 'Opção 1' },
        { id: uuidv4(), option: 'Opção 2' },
        { id: uuidv4(), option: 'Opção 3' },
        { id: uuidv4(), option: 'Opção 4' }
      ],
      answers: []
    },
    {
      id: uuidv4(),
      type: 'list',
      question: 'Pergunta com seleção em lista',
      options: [
        { id: uuidv4(), option: 'Opção A' },
        { id: uuidv4(), option: 'Opção B' },
        { id: uuidv4(), option: 'Opção C' }
      ],
      answers: []
    }
  ]
}

export default function questions (state = INITIAL_STATE, action) {
  let newQuestions = [...state.questions]

  switch (action.type) {
    case Types.CHANGE_TITLE: {
      return { ...state, formTitle: action.title }
    }
    case Types.CHANGE_DESCRIPTION: {
      return { ...state, formDescription: action.description }
    }
    case Types.SET_ANSWERING: {
      const currentActiveQuestionIdx = newQuestions.findIndex(
        question => question.active === true
      )
      newQuestions[currentActiveQuestionIdx] = {
        ...newQuestions[currentActiveQuestionIdx],
        active: false
      }
      return {
        ...state,
        questions: newQuestions,
        activeTab: action.activeTab
      }
    }
    case Types.ADD_QUESTION: {
      const newQuestion = action.question
        ? action.question
        : { ...INITIAL_STATE.questions[0], id: uuidv4(), active: true }
      const createAfterIndex = newQuestions.findIndex(
        q => q.id === action.createAfterId
      )
      newQuestions.splice(createAfterIndex + 1, 0, newQuestion)
      return { ...state, questions: newQuestions }
    }
    case Types.CHANGE_QUESTION: {
      let questionIdx = state.questions.findIndex(
        question => question.id === action.question.id
      )
      const newQuestions = [...state.questions]
      newQuestions[questionIdx] = {
        ...action.question
      }
      return {
        ...state,
        questions: [...newQuestions]
      }
    }
    case Types.REMOVE_QUESTION: {
      return {
        ...state,
        questions: newQuestions.filter(q => q.id !== action.id)
      }
    }
    case Types.COPY_QUESTION: {
      const copiedIndex = newQuestions.findIndex(q => q.id === action.id)
      newQuestions.splice(copiedIndex + 1, 0, {
        ...newQuestions[copiedIndex],
        id: uuidv4(),
        active: true,
        answers: []
      })
      return { ...state, questions: newQuestions }
    }
    case Types.SET_ACTIVE: {
      const currentActiveQuestionIdx = newQuestions.findIndex(
        question => question.active === true
      )
      const nextActiveQuestionIdx = newQuestions.findIndex(
        question => question.id === action.id
      )
      newQuestions[currentActiveQuestionIdx] = {
        ...newQuestions[currentActiveQuestionIdx],
        active: false
      }
      newQuestions[nextActiveQuestionIdx] = {
        ...newQuestions[nextActiveQuestionIdx],
        active: true
      }
      return { ...state, questions: newQuestions }
    }
    case Types.SET_INACTIVE: {
      const questionIdx = newQuestions.findIndex(
        question => question.id === action.id
      )
      newQuestions[questionIdx] = {
        ...newQuestions[questionIdx],
        active: false
      }
      return { ...state, questions: newQuestions }
    }
    case Types.ADD_ANSWERS: {
      const { answers } = action
      Object.keys(answers).map(answerKey => {
        const questionIdx = newQuestions.findIndex(q => q.id === answerKey)
        return newQuestions[questionIdx].answers.push(answers[answerKey])
      })
      return { ...state, activeTab: 2, questions: newQuestions }
    }
    case Types.CHANGE_TAB: {
      return { ...state, activeTab: action.activeTab }
    }
    default:
      return state
  }
}

// ACTIONS

export const Creators = {
  changeTitle: title => ({
    type: Types.CHANGE_TITLE,
    title: title
  }),
  changeDescription: description => ({
    type: Types.CHANGE_DESCRIPTION,
    description: description
  }),
  setAnswering: activeTab => ({
    type: Types.SET_ANSWERING,
    activeTab: activeTab
  }),
  addQuestion: (question, createAfterId) => ({
    type: Types.ADD_QUESTION,
    question: question,
    createAfterId: createAfterId
  }),
  changeQuestion: question => ({
    type: Types.CHANGE_QUESTION,
    question: question
  }),
  removeQuestion: id => ({
    type: Types.REMOVE_QUESTION,
    id: id
  }),
  copyQuestion: id => ({
    type: Types.COPY_QUESTION,
    id: id
  }),
  setActive: id => ({
    type: Types.SET_ACTIVE,
    id: id
  }),
  setInactive: id => ({
    type: Types.SET_INACTIVE,
    id: id
  }),
  addAnswers: answers => ({
    type: Types.ADD_ANSWERS,
    answers: answers
  }),
  changeTab: newActiveTabId => ({
    type: Types.CHANGE_TAB,
    activeTab: newActiveTabId
  })
}
