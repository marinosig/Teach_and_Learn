const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			users: [
				
			],
			lessons: [

			],
			assessment: [

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getUsersData: () => {
				// fetching data from the backend
				fetch("https://3001-brunomorais-buildhomewo-nt2arfayahh.ws-eu46.gitpod.io/api/users")
					.then(resp => resp.json())
					.then(dataUsers => setStore({ 
						users: [...getStore().users, dataUsers]
					 }))
				
					.catch(error => console.log("Error loading message from backend Users", error));
			},
			getLessonsData: () => {
				// fetching data from the backend
				fetch("https://3001-brunomorais-buildhomewo-nt2arfayahh.ws-eu46.gitpod.io/api/lessons")
					.then(resp => resp.json())
					.then(dataLesson_Content => setStore({ 
						lessons: [...getStore().lessons, dataLesson_Content]
					 }))
				
					.catch(error => console.log("Error loading message from backend Lessons", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
