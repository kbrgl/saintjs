'use strict';

const render = function(template, mappings) {
	for (let mapping in mappings) {
		template = template.replace(new RegExp(`\\{\\{\\s?${mapping}\\s?\\}\\}`, 'g'), (capture) => {
			if (typeof mappings[mapping] === 'function') {
				return mappings[mapping]();
			} else {
				return mappings[mapping];
			}
		});
	}

	return template;
};

module.exports = {
	render: render
};
