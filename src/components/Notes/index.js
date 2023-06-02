// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  AppContainer,
  NotesContainer,
  MainHeading,
  Form,
  TitleInput,
  TextAreas,
  Button,
  EmptyContainer,
  Image,
  EmptyNotesHeading,
  Description,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [noteList, setNoteList] = useState([])

  const renderNotes = () => (
    <NotesList>
      {noteList.map(eachNote => (
        <NoteItem key={eachNote.id} noteDetails={eachNote} />
      ))}
    </NotesList>
  )

  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeText = event => setText(event.target.value)

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      text,
    }

    setNoteList(prevState => [...prevState, newNote])
    setTitle('')
    setText('')
  }

  return (
    <AppContainer>
      <EmptyContainer>
        <MainHeading>Notes</MainHeading>
        <Form onSubmit={onAddNote}>
          <TitleInput
            type="text"
            value={title}
            placeholder="Title"
            onChange={onChangeTitle}
          />
          <TextAreas
            placeholder="Take a Note..."
            value={text}
            onChange={onChangeText}
          />
          <Button type="submit">Add</Button>
        </Form>
        {noteList.length === 0 ? (
          <EmptyContainer>
            <Image
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <EmptyNotesHeading>No Notes Yet</EmptyNotesHeading>
            <Description>Notes you add will appear here</Description>
          </EmptyContainer>
        ) : (
          renderNotes()
        )}
      </EmptyContainer>
    </AppContainer>
  )
}

export default Notes
