import Profile from "./components/Profile"
import SkillList from "./components/SkillList"

function App() {

  return (
    <>
      <Profile image=".\src\images\avatar.png" name="Victor Magalhães" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita esse, nemo laboriosam libero et quis veniam aliquam amet labore laudantium dolorem explicabo saepe ducimus dolores quo deserunt facere eligendi? Cumque?">
        <SkillList />
      </Profile>
    </>
  )
}

export default App
 