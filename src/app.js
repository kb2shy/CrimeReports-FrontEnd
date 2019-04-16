class App {
  constructor() {
    this.adapter = new Adapter();

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createNotes = this.createNotes.bind(this);
    this.addNotes = this.addNotes.bind(this);
  }

  attachEventListeners() {
    document.getElementById("notes-list").addEventListener('click', this.handleEditClick);
    document.getElementById("update").addEventListener('submit', this.handleFormSubmit);
  }

  createNotes(notes) {
    notes.forEach(note => {
      new Note(note);
    });
    this.addNotes();
  }

  addNotes() {
    document.getElementById("notes-list").innerHTML = '';
    Note.all.forEach(note => (document.getElementById("notes-list").innerHTML += note.renderListItem()));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const note = Note.findById(id);
    const title = e.target.querySelector('input').value;
    const content = e.target.querySelector('textarea').value;

    const bodyJson = { title, content};
    this.adapter.updateNote(note.id, bodyJson)
    .then(updatedNote => console.log(updatedNote));
  }

  handleEditClick(e) {
    const id = parseInt(e.target.dataset.id);
    const note = Note.findById(id);

    document.getElementById("update").innerHTML = note.renderUpdateForm();
  }
}
