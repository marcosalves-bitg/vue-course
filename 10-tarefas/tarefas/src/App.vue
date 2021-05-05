<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TasksProgress :progress="progress" />
		<NewTask @taskAdded="addTask" />
		<TaskGrid :tasks="tasks"
			@taskDeleted="deleteTask" 
			@taskStateChanged="toggleTaskState" />
	</div>
</template>

<script>
import NewTask from '@/components/NewTask'
import TaskGrid from '@/components/TaskGrid'
import TasksProgress from '@/components/TasksProgress'
export default {
	components: { TasksProgress, NewTask, TaskGrid },
	data() {
		return {
			tasks: []
		}
	},
	computed: {
		progress() {
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round(done / total * 100) || 0
		}
	},
	watch: {
		tasks: {
			deep: true,
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	methods: {
		addTask(task) {
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length == 0
			if(!task.name === '') {
				if(reallyNew) {
					this.tasks.push({
						name: task.name,
						pending: task.pending || true
					})
				}
			}
			
		},
		deleteTask(i) {
			this.tasks.splice(i, 1)
		},
		toggleTaskState(i) {
			this.tasks[i].pending = !this.tasks[i].pending
		}
	},
	created() {
		const json = localStorage.getItem('tasks')
		const array = JSON.parse(json)
		this.tasks = Array.isArray(array) ? array : []
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, #0575E6, #00F260); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
