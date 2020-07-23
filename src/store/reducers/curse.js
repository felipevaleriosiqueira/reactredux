const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: "Aprendendo React",
            lessons: [
                { id: 1, title: "Criando um projeto" },
                { id: 2, title: "Iniciando o projeto" }
            ]
        },
        {
            id: 2,
            title: "Aprendendo Redux",
            lessons: [
                { id: 3, title: "Instalando" },
                { id: 4, title: "Implementando Store" }
            ]
        }
    ]
}

// Reduce function
export default function curse(state = INITIAL_STATE, action) {

    if(action.type === 'TOGGLE_LESSON') {
        return { ...state, activeLesson: action.lesson, activeModule: action.module}
    }

    return state
}