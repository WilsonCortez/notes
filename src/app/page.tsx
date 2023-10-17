import Notes from './components/Notes/notes'

export default function Home() {
  let data: number = 6
  return (
  <>
    <h3>Iniciando</h3>
    <Notes data={data} />
  </>
  )
}
