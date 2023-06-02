// Write your code here
import {ListItem, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, text} = noteDetails

  return (
    <ListItem>
      <Title>{title}</Title>
      <Note>{text}</Note>
    </ListItem>
  )
}
export default NoteItem
