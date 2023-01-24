const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdeHandler } = require('./handler');
const { notes } = require('./notes');

const routes = [
	{
		method : 'POST',
		path : '/notes',
		handler : addNoteHandler,
		options: {
			cors: {
				origin: ['*'],
			},
		},
		
	},
	{
		method: 'GET',
		path: '/notes',
		handler: getAllNotesHandler,
	},
	{
		method: 'GET',
		path: '/notes/{id}',
		handler: getNoteByIdHandler,
	},
	{
		method : 'PUT',
		path : '/notes/{id}',
		handler : editNoteByIdHandler,
	},
	{
		method : 'DELETE',
		path : '/notes/{id}',
		handler : deleteNoteByIdeHandler,
	},
];

module.exports = routes;