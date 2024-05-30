class $project_lom_button extends $project_lom_view {

	dom_name() { return 'button' }

	title() { return '' }

	click( e: Event ) {}

	sub() {
		return [ this.title() ]
	}

	event() {
		return {
			click: (e: Event) => this.click(e)
		}
	}
}

class $project_lom_button_minor extends $project_lom_button {
	attr() {
		return {
			'my_counter_button_minor': true,
		}
	}
}
